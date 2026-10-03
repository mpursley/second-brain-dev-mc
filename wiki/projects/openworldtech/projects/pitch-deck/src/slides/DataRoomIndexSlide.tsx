import { Slide } from '../components/Slide';

export function DataRoomIndexSlide1() {
    return (
        <Slide title="Data Room Index (1/2)" subtitle="Corporate Identity, Equity & Financials">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto mt-12">

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                    <h3 className="text-xl font-bold text-indigo-400 mb-4 border-b border-white/10 pb-2">1. Corporate Identity</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Certificate of Incorporation (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Bylaws (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Action by Sole Incorporator (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Initial Board Consent (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-yellow-400 shrink-0">⟳</span> Employer Identification Number (EIN)</li>
                    </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                    <h3 className="text-xl font-bold text-purple-400 mb-4 border-b border-white/10 pb-2">2. Capitalization & Equity</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Cap Table Master Document (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Founder Stock Purchase Agreement (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> 83(b) Election Receipts (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Equity Incentive Plan</li>
                    </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4 border-b border-white/10 pb-2">3. Financials</h3>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Pro Forma P&L (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> YTD Balance Sheet</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Cash Flow Statement</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Core Contracts</li>
                    </ul>
                </div>

            </div>
        </Slide>
    );
}

export function DataRoomIndexSlide2() {
    return (
        <Slide title="Data Room Index (2/2)" subtitle="IP, Team, Strategy & Deal Documents">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto mt-10">

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-blue-400 mb-4 border-b border-white/10 pb-2">4. IP & Technology</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Invention Assignment Agreements (CIIAA)</li>
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Early-Stage Domains (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Trademarks</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Software Architecture Overviews</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Open Source Licenses</li>
                    </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-pink-400 mb-4 border-b border-white/10 pb-2">5. Team & HR</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Founder Resumes/CVs</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Employee Offer Letters</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Consulting Agreements</li>
                    </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-orange-400 mb-4 border-b border-white/10 pb-2">6. Strategy & Sales</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Pitch Deck (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> GTM Strategy (Done)</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Sales Pipeline</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Customer Testimonials / Case Studies</li>
                    </ul>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-xl font-bold text-yellow-500 mb-4 border-b border-white/10 pb-2">7. Deal Documents</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> First Close Post-Money SAFE ($4M Cap)</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Second Close Post-Money SAFE ($8M Cap)</li>
                        <li className="flex items-start gap-2"><span className="text-slate-500 shrink-0">☐</span> Corporate Bank Account Wire Instructions</li>
                    </ul>
                </div>

            </div>
        </Slide>
    );
}
