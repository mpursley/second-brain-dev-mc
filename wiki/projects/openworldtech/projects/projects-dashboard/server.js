const express = require('express');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const ROOT_DIR = path.resolve(__dirname, '../');

app.use(cors());
app.use(express.json());

// Helper to scan projects
function getSitesData() {
  const sites = [];
  const entries = fs.readdirSync(ROOT_DIR, { withFileTypes: true });
  
  entries.forEach(entry => {
    // Exclude the dashboard itself
    if (entry.isDirectory() && entry.name !== 'projects-dashboard') {
      const basePath = path.join(ROOT_DIR, entry.name);
      const siteDir = basePath;
      let actualPackageJsonPath = path.join(siteDir, 'package.json');
      let actualViteConfigPath = path.join(siteDir, 'vite.config.ts');
      
      if (!fs.existsSync(actualPackageJsonPath) && fs.existsSync(path.join(siteDir, 'webapp', 'package.json'))) {
        actualPackageJsonPath = path.join(siteDir, 'webapp', 'package.json');
        actualViteConfigPath = path.join(siteDir, 'webapp', 'vite.config.ts');
      }

      if (fs.existsSync(actualPackageJsonPath)) {
        let localPort = null;
        let nameMatch = entry.name;
        
        try {
          const pkg = JSON.parse(fs.readFileSync(actualPackageJsonPath, 'utf8'));
          
          if (pkg.scripts && pkg.scripts.dev) {
            const portMatch = pkg.scripts.dev.match(/--port=(\d+)/);
            if (portMatch) localPort = parseInt(portMatch[1]);
          }
        } catch(e) {}

        if (!localPort && fs.existsSync(actualViteConfigPath)) {
          const viteCode = fs.readFileSync(actualViteConfigPath, 'utf8');
          const portMatch = viteCode.match(/port:\s*(\d+)/);
          if (portMatch) localPort = parseInt(portMatch[1]);
        }

        if (!localPort && fs.existsSync(path.join(siteDir, 'webapp', 'server.js'))) {
          const serverCode = fs.readFileSync(path.join(siteDir, 'webapp', 'server.js'), 'utf8');
          const portMatch = serverCode.match(/PORT\s*=\s*(?:process\.env\.PORT\s*\|\|\s*)?(\d+)/);
          if (portMatch) localPort = parseInt(portMatch[1]);
        } else if (!localPort && fs.existsSync(path.join(siteDir, 'server.js'))) {
          const serverCode = fs.readFileSync(path.join(siteDir, 'server.js'), 'utf8');
          const portMatch = serverCode.match(/PORT\s*=\s*(?:process\.env\.PORT\s*\|\|\s*)?(\d+)/);
          if (portMatch) localPort = parseInt(portMatch[1]);
        }
        
        let gitBranch = 'N/A';
        try {
          gitBranch = execSync('git branch --show-current', { cwd: siteDir }).toString().trim();
        } catch (e) {}

        sites.push({
          name: nameMatch,
          domain: entry.name,
          url: localPort ? `http://localhost:${localPort}` : '',
          localPort: localPort,
          cloudRun: null,
          gitUrl: null,
          gitBranch,
          exists: true,
          path: siteDir
        });
      }
    }
  });
  return sites;
}

// API Routes
app.get('/api/sites', (req, res) => {
  const sites = getSitesData();
  
  // Enhance with current status
  const enhancedSites = sites.map(site => {
    let status = 'STOPPED';
    const startStopScript = path.join(site.path, 'scripts', 'start-stop.sh');
    const manageWebappScript = path.join(site.path, 'scripts', 'manage-webapp.sh');
    
    let scriptToUse = null;
    if (fs.existsSync(startStopScript)) scriptToUse = startStopScript;
    else if (fs.existsSync(manageWebappScript)) scriptToUse = manageWebappScript;

    if (scriptToUse) {
      try {
        const output = execSync(`${scriptToUse} status`, { cwd: site.path }).toString();
        if (output.includes('RUNNING')) status = 'RUNNING';
      } catch (e) {}
    }
    return { ...site, status };
  });

  res.json(enhancedSites);
});

app.post('/api/sites/:domain/action', (req, res) => {
  const { domain } = req.params;
  const { action } = req.body; 
  
  const siteDir = path.join(ROOT_DIR, domain);
  if (!fs.existsSync(siteDir)) {
    return res.status(404).json({ error: 'Site not found or directory missing' });
  }

  const startStopScript = path.join(siteDir, 'scripts', 'start-stop.sh');
  const manageWebappScript = path.join(siteDir, 'scripts', 'manage-webapp.sh');
  let scriptToUse = null;
  if (fs.existsSync(startStopScript)) scriptToUse = startStopScript;
  else if (fs.existsSync(manageWebappScript)) scriptToUse = manageWebappScript;

  // Let's create a start-stop.sh dynamically if it doesn't exist? Actually just error
  if (!scriptToUse) {
     return res.status(400).json({ error: 'No management script (scripts/start-stop.sh) found in site directory.' });
  }

  if (action === 'logs') {
    const logFiles = [
      path.join(siteDir, '.run', 'dev.log'),
      path.join(siteDir, '.run', 'api.log'),
      path.join(siteDir, 'dashboard.log'),
      path.join(siteDir, 'webapp.log'),
      path.join(siteDir, 'webapp', 'webapp.log'),
      path.join(siteDir, 'scripts', 'dev.log')
    ];
    let output = "";
    let found = false;
    for (const lf of logFiles) {
      if (fs.existsSync(lf)) {
        output += `\n--- ${path.basename(lf)} ---\n`;
        output += execSync(`tail -n 100 "${lf}"`).toString();
        found = true;
      }
    }
    if (!found) output = "No log files found in standard locations.";
    return res.json({ success: true, output });
  }

  try {
    const output = execSync(`${scriptToUse} ${action}`, { cwd: siteDir }).toString();
    res.json({ success: true, output });
  } catch (e) {
    res.status(500).json({ error: e.message, output: e.stdout?.toString() });
  }
});

// Serve built assets
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`OWT Projects Dashboard running on http://localhost:${PORT}`);
});
