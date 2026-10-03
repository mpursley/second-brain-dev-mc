import { Slide } from '../components/Slide';
import { motion } from 'motion/react';
import { Target, BarChart3, TrendingUp, Search, ExternalLink } from 'lucide-react';

export function FundraisingCalibrationSlide() {
  return (
    <Slide
      title="Fundraising Calibration"
      subtitle="Defining Minimum Viable Proof for a $1M Raise"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-slate-400 mb-6 flex items-center gap-3">
              <Target size={24} className="text-indigo-400" />
              Strategic Questions
            </h3>
            <div className="space-y-6">
              {[
                { q: "What is the 'Minimum Viable Proof' we need to show?", a: "Demo vs. Waitlist vs. Blueprint" },
                { q: "Social Proof vs. Early ARR?", a: "Weighted impact for AI plays today" },
                { q: "How do we frame traction?", a: "Exceeding market benchmarks" }
              ].map((item, i) => (
                <div key={i} className="space-y-2 border-l-2 border-indigo-500/30 pl-4">
                  <p className="text-sm font-bold text-slate-100 italic leading-relaxed">"{item.q}"</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-indigo-500/10 border border-indigo-500/20 p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
              <BarChart3 size={24} />
              Market Comparables
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-white/10">
                <div>
                  <p className="font-black text-white italic tracking-tight">Vectal.ai</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Exit Strategy</p>
                </div>
                <div className="text-right">
                  <p className="text-indigo-400 font-black italic">$1.8M EXIT</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-white/10">
                <div>
                  <p className="font-black text-white italic tracking-tight">Cal AI</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Growth Benchmark</p>
                </div>
                <div className="text-right">
                  <p className="text-indigo-400 font-black italic">$50M EXIT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-dashed border-slate-700 p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4">
            <TrendingUp size={48} className="text-slate-600" />
            <p className="text-slate-200 font-bold italic leading-relaxed text-lg">
              "How do we frame our traction to match or exceed these benchmarks?"
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
