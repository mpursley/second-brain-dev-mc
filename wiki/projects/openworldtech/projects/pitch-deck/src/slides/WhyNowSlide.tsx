import { Slide } from '../components/Slide';
import { TrendingUp, Zap, Lock } from 'lucide-react';

export function WhyNowSlide() {
  return (
    <Slide
      title="Why Now?"
      subtitle="The convergence of three massive shifts creates the perfect storm."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-8 rounded-3xl bg-slate-900/50 border border-indigo-500/20 hover:border-indigo-500/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Accessible Frontier Intelligence</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            A step-function increase in AI and LLM power is now universally accessible, whether scaling through independent cloud APIs or running directly on private consumer hardware.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Agentic Workflow</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            We are moving from "Chatbots" to "Agents". The technology has matured to allow multi-step, autonomous execution of complex tasks.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
            <Lock size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">Privacy Awakening</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Trust in big tech is at an all-time low. Users and enterprises are demanding "Sovereign AI" that doesn't train on their data or leak IP.
          </p>
        </div>
      </div>
    </Slide>
  );
}
