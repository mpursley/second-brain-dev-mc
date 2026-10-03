import { Slide } from '../components/Slide';
import { Server, Terminal, Code2 } from 'lucide-react';

export function GeniusSuiteSlide() {
  return (
    <Slide
      title="Product: The Genius Suite"
      subtitle="Autonomous Intelligence & Real-World Engineering Rigor"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

        {/* SRE Card */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 hover:border-indigo-500/60 transition-all group relative overflow-hidden flex flex-col items-center text-center">
          <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
            <Server size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Genius-SRE</h3>
          <a href="https://genius-sre.com" target="_blank" rel="noopener noreferrer" className="block text-indigo-400 font-mono text-base mb-8 hover:text-indigo-300 hover:underline transition-colors w-max">http://genius-sre.com</a>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              Automated Incident Response
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500" />
              Root Cause Analysis
            </li>
          </ul>
        </div>

        {/* DevOps Card */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-purple-500/30 hover:border-purple-500/60 transition-all group relative overflow-hidden flex flex-col items-center text-center">
          <div className="mb-6 p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
            <Terminal size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Genius-DevOps</h3>
          <a href="https://genius-devops.com" target="_blank" rel="noopener noreferrer" className="block text-purple-400 font-mono text-base mb-8 hover:text-purple-300 hover:underline transition-colors w-max">http://genius-devops.com</a>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              Pipeline Optimization
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              IaC Generation (Terraform)
            </li>
          </ul>
        </div>

        {/* SWE Card */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/30 hover:border-cyan-500/60 transition-all group relative overflow-hidden flex flex-col items-center text-center">
          <div className="mb-6 p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
            <Code2 size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Genius-SWE</h3>
          <a href="https://genius-swe.com" target="_blank" rel="noopener noreferrer" className="block text-cyan-400 font-mono text-base mb-8 hover:text-cyan-300 hover:underline transition-colors w-max">http://genius-swe.com</a>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-500" />
              Code Review & Refactoring
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-500" />
              Test Case Generation
            </li>
          </ul>
        </div>

      </div>


    </Slide>
  );
}
