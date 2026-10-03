import { Slide } from '../components/Slide';
import { Brain, Activity, Compass, Users, Zap, BookOpen } from 'lucide-react';

export function AssistantPHDSlide() {
  return (
    <Slide
      title="Product: Assistant, PHD"
      subtitle="Autonomous Intelligence Ecosystem: 6 Pillars of Life Management"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">

        {/* Left: Core Value Props */}
        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-indigo-900/20 border border-indigo-500/30">
            <p className="text-slate-300 text-xl leading-relaxed">
              An ecosystem of "Life Managers" that treat your life like a high-performance system.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
              <Zap className="text-indigo-400" size={24} />
              <span className="text-slate-300 text-base font-medium">Core and Project Management</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
              <Activity className="text-green-400" size={24} />
              <span className="text-slate-300 text-base font-medium">Vitality & Wellness</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
              <Brain className="text-purple-400" size={24} />
              <span className="text-slate-300 text-base font-medium">Growth & Identity</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
              <Users className="text-pink-400" size={24} />
              <span className="text-slate-300 text-base font-medium">Social & Collab</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
              <Compass className="text-cyan-400" size={24} />
              <span className="text-slate-300 text-base font-medium">Expedition & Env</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5">
              <BookOpen className="text-yellow-400" size={24} />
              <span className="text-slate-300 text-base font-medium">Entertainment & Culture</span>
            </div>
          </div>
        </div>

        {/* Right: Feature Showcase */}
        <div className="relative h-full min-h-[300px] rounded-3xl bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
          <div className="text-center p-8 w-full max-w-lg">
            <h3 className="text-3xl font-bold text-white mb-6">Token-Based Economy</h3>
            <div className="flex flex-col gap-4 text-left">
              <div className="bg-indigo-900/40 p-6 rounded-2xl border border-indigo-500/30 transform hover:-translate-y-1 transition-transform">
                <h4 className="text-2xl font-bold text-white mb-2">A2A</h4>
                <p className="text-slate-300 text-lg leading-relaxed">Agent-to-Agent connections, collaborations and transactions.</p>
              </div>
              <div className="bg-indigo-900/40 p-6 rounded-2xl border border-indigo-500/30 transform hover:-translate-y-1 transition-transform">
                <h4 className="text-2xl font-bold text-white mb-2">A2H</h4>
                <p className="text-slate-300 text-lg leading-relaxed">Agent-to-Human connections, workflows and transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
