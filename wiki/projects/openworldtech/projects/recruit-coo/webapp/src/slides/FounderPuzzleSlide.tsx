import { Slide } from '../components/Slide';
import { motion } from 'motion/react';
import { User, Users, Network, ShieldCheck, Trophy } from 'lucide-react';

export function FounderPuzzleSlide() {
  const scenarios = [
    { 
      id: 1, 
      label: "Solo + AI Agents", 
      icon: <User size={24} />, 
      desc: "High effort, slow speed.", 
      color: "border-slate-500 text-slate-400" 
    },
    { 
      id: 2, 
      label: "Duo (CEO / COO)", 
      icon: <Users size={24} />, 
      desc: "Traditional, but high-stress for two.", 
      color: "border-amber-500/50 text-amber-400" 
    },
    { 
      id: 3, 
      label: "Duo + Heavy Advisory", 
      icon: <Network size={24} />, 
      desc: "Leverage network for the raise while we build.", 
      color: "border-indigo-500/50 text-indigo-400" 
    },
    { 
      id: 4, 
      label: "The Trio (CEO, COO, CPO/CTO)", 
      icon: <ShieldCheck size={24} />, 
      desc: "Scenario D Model. High stability for a $1M raise.", 
      color: "border-emerald-500 text-emerald-400 font-bold" 
    },
  ];

  return (
    <Slide
      title="Founder Options"
      subtitle="Architecting the Leadership Engine"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {scenarios.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-6 rounded-3xl bg-white/5 border ${s.color} flex flex-col gap-4 relative group hover:bg-white/10 transition-all`}
          >
            {s.id === 4 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Winning Play?
              </div>
            )}
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
              {s.icon}
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight italic leading-tight mb-2 text-slate-400">
                {s.label}
              </h3>
              <p className="text-xs text-slate-200 leading-relaxed italic font-medium">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
        <div className="space-y-6">
          <div className="bg-indigo-600/10 border-l-4 border-indigo-500 p-6 rounded-r-2xl">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-400 mb-2">The Ask</h4>
            <p className="text-xl font-bold text-white italic leading-relaxed">
              "I want to be on the technology/infra side. I need the partner who enjoys the daily ops: HR, legal, vendors, and the marketing engine."
            </p>
          </div>
        </div>

        <div className="bg-slate-900 border border-white/10 p-8 rounded-[40px] shadow-2xl">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Equity Philosophy</h4>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-4 border-indigo-500 flex items-center justify-center text-2xl font-black italic text-indigo-400">
              29%
            </div>
            <p className="text-slate-100 font-bold italic text-lg leading-tight">
              "I'd rather own a smaller piece of a giant pie than 100% of a grape."
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
