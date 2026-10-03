import { Slide } from '../components/Slide';
import { Flag } from 'lucide-react';

export function TractionSlide() {
  return (
    <Slide
      title="Traction & Milestones"
      subtitle="Executing on our vision with velocity."
    >
      <div className="relative mt-12 border-l-2 border-slate-800 ml-4 md:ml-12 space-y-12">

        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-slate-950" />
          <h3 className="text-2xl font-bold text-white mb-2">Infrastructure Preparedness</h3>
          <ul className="space-y-2 text-slate-400 text-lg">
            <li>• Established core domains for entire strategy</li>
            <li>• OpenWorldTech.io, Assistant-PhD.com, Creative Suite</li>
          </ul>
        </div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 animate-pulse" />
          <h3 className="text-2xl font-bold text-indigo-400 mb-2">Product Architecture</h3>
          <ul className="space-y-2 text-slate-300 text-lg">
            <li>• Designed "Possibility Engine" UI</li>
            <li>• Extensive 6 pillars blueprint</li>
          </ul>
        </div>

        <div className="relative pl-8 md:pl-12 opacity-60">
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-700 border-4 border-slate-950" />
          <h3 className="text-2xl font-bold text-white mb-2">Strategic Concepting</h3>
          <ul className="space-y-2 text-slate-400 text-lg">
            <li>• Defined B2B to B2C pipeline</li>
            <li>• Foundational transition from cloud consultancy to AI suites</li>
          </ul>
        </div>

      </div>
    </Slide>
  );
}
