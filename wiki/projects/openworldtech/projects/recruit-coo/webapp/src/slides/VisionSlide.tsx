import { Slide } from '../components/Slide';
import { motion } from 'motion/react';
import { Brain, Cpu, Zap, Layers, Sparkles } from 'lucide-react';

export function VisionSlide() {
  return (
    <Slide
      title="The Vision"
      subtitle="Agentic AI Ecosystem & The Genius Stack"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* The Role */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col gap-6 group hover:border-indigo-500/30 transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
            <Brain size={32} />
          </div>
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-2 italic text-slate-400">The AI Architect</h3>
            <p className="text-slate-200 text-sm leading-relaxed italic">
              "Building the 'Genius Stack' I wish I had as an SRE. Working with foundation models and agentic wrappers."
            </p>
          </div>
        </motion.div>

        {/* Growth Strategy */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col gap-6 group hover:border-purple-500/30 transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
            <Zap size={32} />
          </div>
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-2 italic text-slate-400">The 'Magnet' Strategy</h3>
            <p className="text-slate-200 text-sm leading-relaxed italic">
              Consumer Creative tools (funnel) driving Enterprise SRE acquisition (moat). High-demand utility leads to core ecosystem growth.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col gap-6 group hover:border-cyan-500/30 transition-all"
        >
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
            <Layers size={32} />
          </div>
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight mb-2 italic text-slate-400">Agentic Wrappers</h3>
            <p className="text-slate-200 text-sm leading-relaxed italic">
              Not just calling APIs. Building autonomous workflows where a 3-person team performs like a 50-person engineering org.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Quote Block */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-[40px] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Sparkles size={120} className="text-indigo-400" />
        </div>
        <p className="text-2xl font-bold text-white italic text-center relative z-10">
          "We are building a company that uses its own product."
        </p>
      </motion.div>
    </Slide>
  );
}
