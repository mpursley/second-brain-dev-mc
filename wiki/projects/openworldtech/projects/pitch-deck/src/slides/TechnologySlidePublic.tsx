import { Slide } from '../components/Slide';
import { ShieldCheck, Scale, Cpu, Lock } from 'lucide-react';

export function TechnologySlidePublic() {
  return (
    <Slide
      title="Competitive Advantage"
      subtitle="The Privacy Moat: Secure, Sovereign and Frontier-Ready"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

        {/* Left: Core Advantages */}
        <div className="space-y-8">

          <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Privacy Moat</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our absolute guarantee of <strong>Data Sovereignty</strong>: We never sell user data to train frontier models. This is the foundation that allows enterprises to safely adopt AI.
              </p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Scale size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">SRE-Inspired Operations</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Applying "Golden Signals" and SRE rigor to all <strong>Knowledge Worker</strong> workflows, providing unmatched visibility and reliability.
              </p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Cpu size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Platform Agnostic</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Frontier-ready intelligence without vendor lock-in. Connect to any model or run locally on your own infrastructure.
              </p>
            </div>
          </div>

        </div>

        {/* Right: The Privacy Guarantee */}
        <div className="relative rounded-3xl bg-indigo-900/20 border border-indigo-500/30 p-8 flex flex-col gap-6 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Lock size={120} className="text-indigo-500" />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4">The Sovereignty Guarantee</h3>
          <p className="text-xl text-indigo-200 leading-relaxed italic">
            "Enterprises cannot afford to train their competitors' models with their proprietary data."
          </p>
          
          <div className="space-y-6 mt-4">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
              <p className="text-slate-300">No data leakage to frontier model providers.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
              <p className="text-slate-300">Local-first execution for sensitive workflows.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
              <p className="text-slate-300">Encrypted context storage under user control.</p>
            </div>
          </div>
          
          <div className="mt-auto p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
            <p className="text-sm font-mono text-indigo-300 text-center">PRIVACY IS OUR PRODUCT, NOT A FEATURE</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
