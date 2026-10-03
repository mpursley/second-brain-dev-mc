import { Slide } from '../components/Slide';
import { ArrowRight } from 'lucide-react';

export function AskSlidePublic() {
  return (
    <Slide
      title="The Ask"
      subtitle="Accelerating the sovereign intelligence revolution."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-5xl font-black text-white">$5M</span>
              <ArrowRight className="text-slate-500 shrink-0" size={32} />
              <span className="text-5xl font-black text-white">$10M</span>
            </div>
            <p className="text-xl text-indigo-400 mb-4">Seed Round Financing</p>
            <div className="space-y-1 text-slate-300 text-lg font-medium">
              <p>• First Tranche: $5M (at $40M Cap)</p>
              <p>• Second Tranche: $5M ($10M Total at $80M Cap)</p>
            </div>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed">
            Raising $10M in Seed funding in two $5M tranches via standard YC Post-Money SAFEs to scale the multi-token backend, expand the Intelligence Engine UI/UX team, and dominate the <strong>Knowledge Worker</strong> automation market.
          </p>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Use of Funds:</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-indigo-500 h-full w-[40%]" />
                </div>
                <span className="text-sm font-mono text-slate-400 min-w-32 whitespace-nowrap">40% Eng & R&D</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-blue-500 h-full w-[30%]" />
                </div>
                <span className="text-sm font-mono text-slate-400 min-w-32 whitespace-nowrap">30% Infrastructure</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-purple-500 h-full w-[20%]" />
                </div>
                <span className="text-sm font-mono text-slate-400 min-w-32 whitespace-nowrap">20% GTM & Sales</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-cyan-500 h-full w-[10%]" />
                </div>
                <span className="text-sm font-mono text-slate-400 min-w-32 whitespace-nowrap">10% Ops & Legal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white/5 border border-white/10 text-center space-y-8">
          <div className="w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Tiered SAFEs Structure</h3>
            <div className="text-left space-y-4 bg-slate-900/50 p-6 rounded-xl border border-white/5 w-full">
              <div className="flex justify-between items-center gap-4">
                <span className="text-slate-300 font-medium text-lg">First Tranche ($5M)</span>
                <span className="text-indigo-400 font-mono font-bold text-lg">$40M Post-Money Cap</span>
              </div>
              <div className="w-full border-t border-white/10"></div>
              <div className="flex justify-between items-center gap-4">
                <span className="text-slate-300 font-medium text-lg">Second Tranche ($5M)</span>
                <span className="text-purple-400 font-mono font-bold text-lg">$80M Post-Money Cap</span>
              </div>
            </div>
          </div>

          <a
            href="mailto:investors@openworldtech.io"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all hover:scale-105"
          >
            Contact Founders
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </Slide>
  );
}
