import { Slide } from '../components/Slide';
import { Rocket, Users, Globe } from 'lucide-react';

export function GoToMarketSlidePublic() {
  return (
    <Slide
      title="The Target Market"
      subtitle="Bringing SRE-level rigor to all Enterprise Knowledge Workers."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center w-full">
          <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
            <Users size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Mass Market</h3>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">•</span>
              Individual productivity & data sovereignty.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">•</span>
              Personal AI assistant with local-first context.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">•</span>
              Creators & media professionals.
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center w-full">
          <div className="mb-6 p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
            <Rocket size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Enterprise SRE/DevOps</h3>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              Initial entry through specialized tech teams.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              Autonomous site reliability & engineering scaling.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              High-value, high-trust entry points.
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center w-full">
          <div className="mb-6 p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
            <Globe size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Knowledge Workers</h3>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-bold">•</span>
              Expanding SRE rigor to ALL business operations.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-bold">•</span>
              Unified intelligence across fragmented tools.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-bold">•</span>
              The "Operating System" for modern work.
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
