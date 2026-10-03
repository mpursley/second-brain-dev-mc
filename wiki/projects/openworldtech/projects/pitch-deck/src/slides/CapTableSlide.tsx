import { Slide } from '../components/Slide';

export function CapTableSlide() {
    return (
        <Slide title="Capitalization Table" subtitle="Pro Forma Modeling: $1M Pre-Seed Raise">
            <div className="space-y-4 text-left w-full max-w-7xl mx-auto mt-4 h-full flex flex-col justify-start">
                <p className="text-slate-300 text-lg">
                    $1M via standard YC Post-Money SAFEs in two tiers. 18.75% Founder & Pool Dilution.
                </p>

                <div className="w-full rounded-xl border border-white/10 mt-2">
                    <table className="min-w-full text-left bg-slate-900/50 backdrop-blur">
                        <thead className="bg-slate-800/50 border-b border-white/10">
                            <tr>
                                <th className="px-5 py-4 font-semibold text-white">Stockholder</th>
                                <th className="px-5 py-4 font-semibold text-white text-right">Shares (Est. Post-Conversion)</th>
                                <th className="px-5 py-4 font-semibold text-white text-right">% Fully Diluted</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-5 py-4 font-medium text-slate-200 text-base">Matt Pursley (Founder)</td>
                                <td className="px-5 py-4 text-slate-300 text-right text-base">8,000,000</td>
                                <td className="px-5 py-4 text-slate-300 text-right text-base">65.00%</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-5 py-4 font-medium text-slate-200 text-base">Equity Incentive Plan</td>
                                <td className="px-5 py-4 text-slate-300 text-right text-base">2,000,000</td>
                                <td className="px-5 py-4 text-slate-300 text-right text-base">16.25%</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-5 py-4 font-medium text-slate-200 text-base">Tier 1 Investors ($500k at $4M Cap)</td>
                                <td className="px-5 py-4 text-slate-300 text-right text-base">1,538,461</td>
                                <td className="px-5 py-4 text-slate-300 text-right text-base">12.50%</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-5 py-4 font-medium text-slate-200 text-base">Tier 2 Investors ($500k at $8M Cap)</td>
                                <td className="px-5 py-4 text-slate-300 text-right text-base">769,231</td>
                                <td className="px-5 py-4 text-slate-300 text-right text-base">6.25%</td>
                            </tr>
                            <tr className="bg-white/5 font-semibold">
                                <td className="px-5 py-4 text-indigo-300 text-lg">Total Pro Forma Shares</td>
                                <td className="px-5 py-4 text-indigo-300 text-right text-lg">12,307,692</td>
                                <td className="px-5 py-4 text-indigo-300 text-right text-lg">100.00%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-slate-400 text-sm italic">
                    Note: Exact share counts will vary based on the actual price per share established in the subsequent priced round, but the ownership percentages dictated by the Post-Money SAFE caps remain fixed.
                </p>
            </div>
        </Slide>
    );
}
