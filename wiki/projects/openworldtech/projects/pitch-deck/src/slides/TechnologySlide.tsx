import { Slide } from '../components/Slide';
import { ShieldCheck, Scale, Cpu, Database } from 'lucide-react';

export function TechnologySlide() {
  return (
    <Slide
      title="Competitive Advantage"
      subtitle="Privacy Architecture: Private, Local and Frontier-Ready"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">

        {/* Left: Core Advantages */}
        <div className="space-y-8">

          <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Private Intelligence</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Data is encrypted client-side and in-transit. Analysis happens on secured data or locally on your device.
              </p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <Scale size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">SRE-Inspired Dashboard</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Applying "Golden Signals" (Latency, Traffic, Errors, Saturation) to all KPIs (key performance indicators).
              </p>
            </div>
          </div>

          <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Cpu size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">BYOAI (Bring Your Own AI)</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Platform agnostic. Connect Gemini, Groq, or run private local models.
              </p>
            </div>
          </div>

        </div>

        {/* Right: Competitors */}
        <div className="relative rounded-3xl bg-slate-900 border border-white/10 p-8 flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-white mb-6">The Competition</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-800 border border-white/5">
              <h4 className="text-lg font-bold text-slate-300">Tech Monopolies (Google, Meta)</h4>
              <p className="text-base text-slate-400 mt-1">General-purpose AI, but privacy concerns.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-white/5">
              <h4 className="text-lg font-bold text-slate-300">Enterprise Observability (Datadog, New Relic)</h4>
              <p className="text-base text-slate-400 mt-1">Powerful but corporate-focused.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800 border border-white/5">
              <h4 className="text-lg font-bold text-slate-300">Personal AI Agents</h4>
              <p className="text-base text-slate-400 mt-1">OpenClaw, Vectal.ai, CrewAI - often lack the holistic ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
