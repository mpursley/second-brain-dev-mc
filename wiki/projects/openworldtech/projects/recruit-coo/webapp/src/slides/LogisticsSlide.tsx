import { Slide } from '../components/Slide';
import { motion } from 'motion/react';
import { ClipboardList, Clock, Mail, Layout, Users } from 'lucide-react';

export function LogisticsSlide() {
  return (
    <Slide
      title="Logistics & Next Steps"
      subtitle="Defining the Path Forward"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-3 italic uppercase">
              <Users size={24} className="text-indigo-400" />
              COO vs. Advisor
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed font-medium">
              If the full-time equity-only sprint isn’t the right fit today, let’s discuss the <span className="text-white font-black underline decoration-indigo-500 underline-offset-4">Advisory Board</span> role.
            </p>
            <div className="bg-indigo-500/10 border border-indigo-500/20 p-4 rounded-2xl">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-200 font-bold italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                  Low-friction commitment (2-4 hours/mo)
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-200 font-bold italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                  Focused on high-level intros & strategy
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-3 italic uppercase">
              <ClipboardList size={24} className="text-cyan-400" />
              The Next Action
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900 rounded-2xl border border-white/10 group hover:border-cyan-500/50 transition-all cursor-pointer">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Scenario A</p>
                <p className="text-white font-bold italic text-lg tracking-tight">Move to 'Product Deep Dive'</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-2xl border border-white/10 group hover:border-indigo-500/50 transition-all cursor-pointer">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Scenario B</p>
                <p className="text-white font-bold italic text-lg tracking-tight">Formalize Advisory Setup</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 rounded-[40px] flex flex-col items-center justify-center text-center gap-4 shadow-xl shadow-indigo-500/10">
            <Mail size={32} className="text-indigo-400" />
            <p className="text-white font-black italic text-xl leading-tight">
              "I’ll let you sit with the Data Room. Let’s sync via email on the winning play."
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
