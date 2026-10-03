import { Slide } from '../components/Slide';
import { motion } from 'motion/react';
import { Users, CheckCircle, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';

export function IntroSlide() {
  return (
    <Slide
      title="Founder's Interview"
      subtitle="OpenWorldTech Intro Calls: Strategic Alignment & Mutual Fit"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-indigo-500/10 border border-indigo-500/20 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4 flex items-center gap-3">
              <MessageSquare size={28} />
              The "Technical Truth"
            </h3>
            <p className="text-slate-300 text-lg italic leading-relaxed">
              "I’m an Infra/SRE guy by trade. I’ve built the technical engine, but I’m jumping into the deep end on the 'Startup/CEO' mechanics."
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-slate-400 mb-4 uppercase italic">The Goal</h3>
            <ul className="space-y-4">
              {[
                "Assess mutual chemistry",
                "Strategic fit for the mission",
                "Define COO vs. Advisor path"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                  <CheckCircle size={20} className="text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col justify-center gap-6"
        >
          <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-slate-900/50">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Document Check</h4>
            <div className="space-y-4">
              <a 
                href="http://localhost:5002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-indigo-500/50 transition-all group/link"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-100 uppercase tracking-widest text-xs">Pitch Deck</span>
                  <ExternalLink size={12} className="text-slate-500 group-hover/link:text-indigo-400 transition-colors" />
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md font-bold uppercase tracking-tighter">Open Link</span>
              </a>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                <span className="font-bold text-slate-100 uppercase tracking-widest text-xs">Cap Table</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-md font-bold uppercase tracking-tighter">Ready</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-3xl shadow-xl shadow-indigo-500/20">
            <p className="text-white font-bold text-xl mb-4 italic">
              "I'm looking for a partner who thrives in the company operations side, so I can focus on the systems, products, tools, and user satisfaction."
            </p>
            <div className="flex items-center gap-2 text-indigo-100 text-sm font-black uppercase tracking-widest">
              <span>Next: The Vision</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
