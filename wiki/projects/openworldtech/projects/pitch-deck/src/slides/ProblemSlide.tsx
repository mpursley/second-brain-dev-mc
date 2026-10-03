import { ShieldAlert, Layers, BrainCircuit } from 'lucide-react';
import { Slide } from '../components/Slide';

export function ProblemSlide() {
  return (
    <Slide
      title="The Problem"
      subtitle="The Status Quo: Current AI systems are powerful but siloed and lack context."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="flex flex-col gap-4 p-8 rounded-3xl bg-slate-900/50 border border-red-500/20 hover:border-red-500/50 transition-all group">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
            <ShieldAlert size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white">The Core Problem</h3>
          <p className="text-slate-400 leading-relaxed">
            AI lacks the context and connections needed to fully utilize intelligence.
            It remains disconnected from maximizing results for businesses and users.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-3xl bg-slate-900/50 border border-orange-500/20 hover:border-orange-500/50 transition-all group">
          <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
            <Layers size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white">Who is experiencing this?</h3>
          <p className="text-slate-400 leading-relaxed">
            Enterprises: Struggling with cloud complexity and fragmented observability.<br />
            Individuals: Looking for personal productivity based on their data, context, and connections.
          </p>
        </div>

        <div className="flex flex-col gap-4 p-8 rounded-3xl bg-slate-900/50 border border-yellow-500/20 hover:border-yellow-500/50 transition-all group">
          <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
            <BrainCircuit size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white">Why is it painful?</h3>
          <p className="text-slate-400 leading-relaxed">
            Demand for powerful, comprehensive performance management tools without vendor lock-in, while maintaining data privacy.
          </p>
        </div>
      </div>
    </Slide>
  );
}
