import { Slide } from '../components/Slide';

export function PandLStatementSlide() {
    return (
        <Slide title="P&L Statement Forecast" subtitle="Pro forma projection for internal planning and investor context">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto mt-8 h-full overflow-y-auto pr-4">

                <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                        <h3 className="text-2xl font-bold border-b border-indigo-400 pb-2 mb-4 text-indigo-300">Year 1: Bootstrap Focus</h3>
                        <p className="text-base text-slate-400 mb-6 italic">Months 1-12</p>

                        <div className="space-y-4 text-base">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-300">Product/SaaS Revenue</span>
                                <span className="text-green-400 font-mono">$100,000</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-300">Consulting Services</span>
                                <span className="text-green-400 font-mono">$200,000</span>
                            </div>
                            <div className="flex justify-between font-bold pb-2 text-white">
                                <span>Total Gross Revenue</span>
                                <span className="text-green-400 font-mono">$300,000</span>
                            </div>

                            <div className="flex justify-between pt-2">
                                <span className="text-slate-400">Total COGS</span>
                                <span className="text-red-400 font-mono">$30,000</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-white/5">
                                <span className="text-slate-400">Total OpEx</span>
                                <span className="text-red-400 font-mono">$200,000</span>
                            </div>

                            <div className="flex justify-between pt-2 font-bold text-xl">
                                <span className="text-indigo-300">Net Income (EBITDA)</span>
                                <span className="text-indigo-400 font-mono">$70,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                        <h3 className="text-2xl font-bold border-b border-purple-400 pb-2 mb-4 text-purple-300">Year 2: Product Scaling</h3>
                        <p className="text-base text-slate-400 mb-6 italic">Months 13-24</p>

                        <div className="space-y-4 text-base">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-300">Product/SaaS Revenue</span>
                                <span className="text-green-400 font-mono">$150,000</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-slate-300">Consulting Services</span>
                                <span className="text-green-400 font-mono">$600,000</span>
                            </div>
                            <div className="flex justify-between font-bold pb-2 text-white">
                                <span>Total Gross Revenue</span>
                                <span className="text-green-400 font-mono">$750,000</span>
                            </div>

                            <div className="flex justify-between pt-2">
                                <span className="text-slate-400">Total COGS</span>
                                <span className="text-red-400 font-mono">$75,000</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-white/5">
                                <span className="text-slate-400">Total OpEx</span>
                                <span className="text-red-400 font-mono">$500,000</span>
                            </div>

                            <div className="flex justify-between pt-2 font-bold text-xl">
                                <span className="text-purple-300">Net Income (EBITDA)</span>
                                <span className="text-purple-400 font-mono">$175,000</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Slide>
    );
}
