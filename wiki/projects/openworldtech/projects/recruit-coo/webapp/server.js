const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4055;
const DB_PATH = path.join(__dirname, 'candidates.db');

app.use(cors());
app.use(express.json());

// Initialize Database
const db = new Database(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS candidates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    priority TEXT NOT NULL,
    status TEXT DEFAULT 'considering',
    nda_signed INTEGER DEFAULT 0,
    next_step TEXT,
    linkedin_url TEXT,
    resume_path TEXT,
    pros TEXT,
    cons TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS meetings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    candidate_id INTEGER NOT NULL,
    type TEXT,
    date_time TEXT,
    notes TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES candidates (id) ON DELETE CASCADE
  );
`);

// API Routes
app.get('/api/candidates', (req, res) => {
  const rows = db.prepare('SELECT * FROM candidates ORDER BY priority ASC, name ASC').all();
  res.json(rows);
});

app.get('/api/candidates/:id', (req, res) => {
  const candidate = db.prepare('SELECT * FROM candidates WHERE id = ?').get(req.params.id);
  const meetings = db.prepare('SELECT * FROM meetings WHERE candidate_id = ? ORDER BY date_time DESC').all();
  res.json({ ...candidate, meetings });
});

app.post('/api/candidates/:id', (req, res) => {
  const { status, nda_signed, next_step, pros, cons } = req.body;
  db.prepare(`
    UPDATE candidates 
    SET status = ?, nda_signed = ?, next_step = ?, pros = ?, cons = ? 
    WHERE id = ?
  `).run(status, nda_signed, next_step, pros, cons, req.params.id);
  res.json({ success: true });
});

app.post('/api/candidates/:id/meetings', (req, res) => {
  const { type, date_time, notes } = req.body;
  db.prepare('INSERT INTO meetings (candidate_id, type, date_time, notes) VALUES (?, ?, ?, ?)').run(
    req.params.id, type, date_time, notes
  );
  res.json({ success: true });
});

// Seed script logic as an internal endpoint for now
app.post('/api/internal/seed', (req, res) => {
  const applicantsDir = path.join(__dirname, '..', 'applicants');
  const priorities = ['1 - high', '2 - mid', '3 - low'];

  priorities.forEach(pDir => {
    const priorityLabel = pDir.split(' - ')[1];
    const fullPath = path.join(applicantsDir, pDir);
    if (!fs.existsSync(fullPath)) return;

    const files = fs.readdirSync(fullPath);
    const candidateNames = new Set();

    files.forEach(file => {
      // Extract name from "7 - Alex Zhyzhko _ LinkedIn.mhtml" or similar
      const match = file.match(/^\d+\s+-\s+(.+?)(?:\s+_|\s+Resume|\.mhtml|\.docx)/);
      if (match) {
        candidateNames.add(match[1].trim());
      }
    });

    candidateNames.forEach(name => {
      const existing = db.prepare('SELECT id FROM candidates WHERE name = ?').get(name);
      if (!existing) {
        let status = 'considering';
        let nda_signed = 0;
        let next_step = 'To be contacted';
        let notes = '';

        if (name.includes('Alex Zhyzhko')) {
          nda_signed = 1;
          next_step = 'Meeting scheduled / Selection pending';
          notes = 'Replied via LinkedIn, signed MNDA. Sent Cal.com link for next week.';
        } else if (name.includes('Todd Yancey')) {
          next_step = 'Awaiting reply';
          notes = 'Messaged via email and LinkedIn regarding MNDA and meeting. No reply yet.';
        }

        const info = db.prepare('INSERT INTO candidates (name, priority, status, nda_signed, next_step) VALUES (?, ?, ?, ?, ?)').run(
          name, priorityLabel, status, nda_signed, next_step
        );

        if (notes) {
          db.prepare('INSERT INTO meetings (candidate_id, type, notes) VALUES (?, ?, ?)').run(
            info.lastInsertRowid, 'Initial Outreach', notes
          );
        }
      }
    });
  });

  res.json({ success: true });
});

// Serve built assets
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
