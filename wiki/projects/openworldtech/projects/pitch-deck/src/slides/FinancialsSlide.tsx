import { Slide } from '../components/Slide';

export function FinancialsSlide() {
  return (
    <Slide
      title="Financial Projections"
      subtitle="3-5 Year multi-channel revenue goals."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

        {/* Year 1 */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all">
          <h3 className="text-2xl font-bold text-white mb-6">Year 1: Bootstrap Phase</h3>
          <div className="space-y-6">
            <div>
              <div className="text-base text-slate-400 mb-1">Total Revenue</div>
              <div className="text-4xl font-bold text-white">$300,000</div>
              <p className="text-sm text-slate-500 mt-2">Consulting ($200k) + Product ($100k)</p>
            </div>
            <div>
              <div className="text-base text-slate-400 mb-1">Net Income (EBITDA)</div>
              <div className="text-4xl font-bold text-green-400">$70,000</div>
              <p className="text-sm text-slate-500 mt-2">Reinvested into R&D</p>
            </div>
          </div>
        </div>

        {/* Year 2 */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-purple-500/50 transition-all">
          <h3 className="text-2xl font-bold text-white mb-6">Year 2: Product Scaling</h3>
          <div className="space-y-6">
            <div>
              <div className="text-base text-slate-400 mb-1">Total Revenue</div>
              <div className="text-4xl font-bold text-white">$750,000</div>
              <p className="text-sm text-slate-500 mt-2">Consulting ($600k) + Product ($150k)</p>
            </div>
            <div>
              <div className="text-base text-slate-400 mb-1">Net Income (EBITDA)</div>
              <div className="text-4xl font-bold text-green-400">$175,000</div>
              <p className="text-sm text-slate-500 mt-2">Team Scaling & Infrastructure</p>
            </div>
          </div>
        </div>

      </div>
    </Slide>
  );
}
