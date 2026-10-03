import { useState, useEffect } from 'react';
import { 
  Layout, 
  ExternalLink, 
  Play, 
  Square, 
  RefreshCw, 
  FileText, 
  Github, 
  Globe, 
  Terminal,
  Search,
  CheckCircle2,
  XCircle,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Site {
  name: string;
  domain: string;
  url: string;
  localPort: number | null;
  cloudRun: string | null;
  gitUrl: string | null;
  gitBranch: string;
  exists: boolean;
  status: 'RUNNING' | 'STOPPED';
}

const SiteCard = ({ site, onAction }: { site: Site, onAction: (domain: string, action: string) => void }) => {
  const isRunning = site.status === 'RUNNING';
  const [showEnvs, setShowEnvs] = useState(false);

  const envs = [
    { label: 'Local', url: `http://localhost:${site.localPort}`, color: 'text-emerald-400' },
  ];

  return (
    <motion.div 
      layout
      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-all group relative"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-black text-white italic uppercase tracking-tighter skew-x-[-3deg]">
            {site.name}
          </h3>
          <p className="text-xs text-white/40 font-mono mt-1">{site.domain}</p>
        </div>
        <div className={cn(
          "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 border",
          isRunning ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-white/5 text-white/20 border-white/10"
        )}>
          <div className={cn("w-1.5 h-1.5 rounded-full", isRunning ? "bg-emerald-400 animate-pulse" : "bg-white/20")} />
          {site.status}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white/50">
            <Terminal className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Port: {site.localPort || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <Github className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-widest truncate max-w-[120px]">{site.gitBranch}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white/50">
            <Globe className="w-3.5 h-3.5" />
            <span className="text-[10px] font-bold uppercase tracking-widest">CloudRun: {site.cloudRun || 'None'}</span>
          </div>
          <div className="flex items-center gap-2 text-white/50">
            {site.exists ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60" />
            ) : (
              <XCircle className="w-3.5 h-3.5 text-rose-500/60" />
            )}
            <span className="text-[10px] font-bold uppercase tracking-widest">{site.exists ? 'Local Found' : 'Not Found'}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-white/10 relative">
        {isRunning ? (
          <>
            <div className="flex-1 relative">
              <button 
                onClick={() => setShowEnvs(!showEnvs)}
                className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg text-[10px] font-black uppercase transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open App <ChevronDown className={cn("w-3 h-3 transition-transform", showEnvs && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {showEnvs && (
                  <>
                    <div 
                      className="fixed inset-0 z-[60]" 
                      onClick={() => setShowEnvs(false)} 
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-0 right-0 mb-2 bg-[#0f0f11] border border-white/20 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[70]"
                    >
                      {envs.map((env) => (
                        <a
                          key={env.label}
                          href={env.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setShowEnvs(false)}
                          className="flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/10 last:border-0 group/env"
                        >
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover/env:text-white">{env.label}</span>
                          <span className={cn("text-[8px] font-mono opacity-40 group-hover/env:opacity-100", env.color)}>{env.url.replace('https://', '').replace('http://', '')}</span>
                        </a>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            <button 
              onClick={() => onAction(site.domain, 'stop')}
              className="px-3 py-2 bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white rounded-lg transition-all"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
            </button>
          </>
        ) : (
          <button 
            onClick={() => onAction(site.domain, 'start')}
            disabled={!site.exists}
            className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/20 text-white py-2 rounded-lg text-[10px] font-black uppercase transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Start Service
          </button>
        )}
        <button 
          onClick={() => onAction(site.domain, 'logs')}
          className="px-3 py-2 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white rounded-lg transition-all"
          title="View Logs"
        >
          <FileText className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [logsModal, setLogsModal] = useState<{domain: string, content: string} | null>(null);

  const fetchData = async () => {
    setRefreshing(true);
    try {
      const res = await fetch('/api/sites');
      const data = await res.json();
      setSites(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // Auto refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const handleAction = async (domain: string, action: string) => {
    try {
      const res = await fetch(`/api/sites/${domain}/action`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action })
      });
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Unknown error');
      }

      if (action === 'logs') {
        setLogsModal({ domain, content: data.output });
      } else {
        fetchData();
      }
    } catch (e) {
      alert(`Error performing ${action}: ${e}`);
    }
  };

  const filtered = sites.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.domain.toLowerCase().includes(search.toLowerCase())
  );

  const runningApps = filtered.filter(s => s.status === 'RUNNING');
  const offlineApps = filtered.filter(s => s.status !== 'RUNNING');

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-indigo-500/30">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl font-black text-white tracking-tighter italic uppercase skew-x-[-5deg]">
                OWT <span className="text-indigo-400">Private APPs</span>
              </h1>
            </div>
            <p className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] ml-1">Project Management Command</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="text"
                placeholder="Search ecosystem..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-xs text-white focus:outline-none focus:border-indigo-500/50 transition-all w-64"
              />
            </div>
            <button 
              onClick={fetchData}
              className={cn(
                "p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all",
                refreshing && "animate-spin text-indigo-400 border-indigo-500/30"
              )}
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4 opacity-20">
            <RefreshCw className="w-12 h-12 animate-spin" />
            <span className="text-sm font-black italic uppercase tracking-widest">Scanning Network...</span>
          </div>
        ) : (
          <div className="space-y-12">
            {runningApps.length > 0 && (
              <div>
                <h2 className="text-xl font-black text-white italic uppercase tracking-widest mb-6 border-l-4 border-emerald-500 pl-4">Active Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {runningApps.map(site => (
                      <SiteCard key={site.domain} site={site} onAction={handleAction} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
            
            {(offlineApps.length > 0 || runningApps.length === 0) && (
              <div>
                <h2 className="text-xl font-black text-white/40 italic uppercase tracking-widest mb-6 border-l-4 border-white/10 pl-4">{search ? "Search Results" : "Available Services"}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {offlineApps.map(site => (
                      <SiteCard key={site.domain} site={site} onAction={handleAction} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        )}

        <footer className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
          <div>&copy; 2026 OpenWorldTech Operations</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Infrastructure</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </footer>
      </div>

      {/* Logs Modal */}
      <AnimatePresence>
        {logsModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setLogsModal(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f0f11] border border-white/20 rounded-2xl w-full max-w-4xl max-h-[80vh] flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-sm font-black text-white italic uppercase tracking-widest">
                    Logs: {logsModal.domain}
                  </h3>
                </div>
                <button 
                  onClick={() => setLogsModal(null)}
                  className="p-1 text-white/40 hover:text-white transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 overflow-y-auto bg-black flex-1">
                <pre className="text-[11px] font-mono text-emerald-400 whitespace-pre-wrap leading-relaxed">
                  {logsModal.content || 'No logs available.'}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/[0.03] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/[0.03] blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
