import { Slide } from '../components/Slide';
import { ArrowRight } from 'lucide-react';

export function VisionSlide() {
  return (
    <Slide 
      title="Own Your Future" 
      subtitle="The next generation of intelligence is sovereign, private, and powerful."
    >
      <div className="flex flex-col items-center justify-center mt-12 text-center">
        
        <div className="max-w-2xl mx-auto space-y-8 mb-16">
          <h3 className="text-3xl font-bold text-white">Roadmap</h3>
          
          <div className="relative border-l border-indigo-500/30 pl-8 text-left space-y-8">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900" />
              <h4 className="text-xl font-bold text-indigo-400">Q2 2026</h4>
              <p className="text-slate-300">Private Beta Launch (Assistant-PHD)</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900" />
              <h4 className="text-xl font-bold text-purple-400">Q3 2026</h4>
              <p className="text-slate-300">Token Generation Event ($PHD) & Creative Lab</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
              <h4 className="text-xl font-bold text-cyan-400">Q4 2026</h4>
              <p className="text-slate-300">Genius Suite Enterprise Rollout</p>
            </div>
          </div>
        </div>

        <a 
          href="https://openworldtech.io" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all hover:scale-105"
        >
          Join the Genesis Waitlist
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
        
        <p className="mt-8 text-slate-500 text-sm">
          © 2026 Open World Tech. All Rights Reserved.
        </p>

      </div>
    </Slide>
  );
}
