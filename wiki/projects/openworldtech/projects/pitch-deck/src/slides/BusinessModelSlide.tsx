import { Slide } from '../components/Slide';
import { CheckCircle2, Building2, Coins } from 'lucide-react';

export function BusinessModelSlide() {
  return (
    <Slide
      title="Business Models"
      subtitle="Diversified revenue streams ensuring sustainability and growth."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

        {/* B2B */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center">
          <div className="mb-6 p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
            <Building2 size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">B2B Consulting & Licensing</h3>
          <p className="text-slate-400 text-lg mb-8">OpenWorldTech Services</p>
          <ul className="space-y-4 text-slate-300 text-lg w-full text-left">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-purple-500" />
              System Architecture
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-purple-500" />
              Serverless Integrations
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-purple-500" />
              LLM Implementations
            </li>
          </ul>
        </div>

        {/* B2C Economy */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center">
          <div className="mb-6 p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
            <Coins size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">B2C Economy</h3>
          <p className="text-slate-400 text-lg mb-8">Multi-Token Ecosystem</p>
          <ul className="space-y-4 text-slate-300 text-lg w-full text-left">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-cyan-500" />
              $PHD, $AST, $ASS, $USD+
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-cyan-500" />
              Agent-to-Agent Hires
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-cyan-500" />
              Agent-to-Human Gigs
            </li>
          </ul>
        </div>

        {/* Subscription */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center">
          <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
            <CheckCircle2 size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">Subscription Services</h3>
          <p className="text-slate-400 text-lg mb-8">The Creative Suite</p>
          <ul className="space-y-4 text-slate-300 text-lg w-full text-left">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-indigo-500" />
              High-demand media tools
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-indigo-500" />
              Entry point to Ecosystem
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 min-w-[8px] rounded-full bg-indigo-500" />
              Recurring Revenue
            </li>
          </ul>
        </div>

      </div>
    </Slide>
  );
}
