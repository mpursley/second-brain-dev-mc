import { Slide } from '../components/Slide';

export function GoToMarketStrategySlide() {
    return (
        <Slide title="Go-To-Market Strategy" subtitle="How we reach our target market and drive growth">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full max-w-7xl mx-auto mt-4 h-full pb-2">

                <div className="space-y-5 flex flex-col">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex-1">
                        <h3 className="text-2xl font-bold border-b border-indigo-400 pb-2 mb-4 text-indigo-300">Target Market</h3>
                        <div className="mb-4">
                            <h4 className="text-lg font-bold text-indigo-400 mb-2">Primary (B2B): Enterprise & Mid-Market</h4>
                            <p className="text-base text-slate-300">Companies struggling with cloud scaling, Kubernetes complexity, observability, and infrastructure building.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-purple-400 mb-2">Secondary (B2C): D2C Consumers</h4>
                            <p className="text-base text-slate-300">Students, creators, and professionals seeking a privacy-first, sovereign AI ecosystem for personal productivity.</p>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex-1">
                        <h3 className="text-2xl font-bold border-b border-cyan-400 pb-2 mb-4 text-cyan-300">Marketing & Sales Channels</h3>
                        <ul className="space-y-3 text-base text-slate-300 list-disc pl-5 marker:text-cyan-500">
                            <li><strong className="text-white font-medium">Network / Referrals:</strong> Primary channel for initial engagements.</li>
                            <li><strong className="text-white font-medium">Content Marketing:</strong> Tech blogs, real-world case studies (SRE, Kubernetes).</li>
                            <li><strong className="text-white font-medium">Open Source & Community:</strong> CNCF projects, Unreal Engine communities.</li>
                            <li><strong className="text-white font-medium">Direct Outreach:</strong> Focused B2B LinkedIn targeting.</li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-5">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col">
                        <h3 className="text-2xl font-bold border-b border-purple-400 pb-2 mb-4 text-purple-300 shrink-0">Phased Rollout</h3>

                        <div className="space-y-6">
                            <div className="border-l-2 border-indigo-500 pl-4">
                                <h4 className="text-lg text-indigo-400 font-bold mb-1">Phase 1: High-Value Consulting</h4>
                                <p className="text-sm text-slate-400 mb-1">Months 1-6</p>
                                <p className="text-base text-slate-300">Secure anchor clients for recurring revenue. Soft launch of Assistant-PhD ecosystem. Launch B2B infrastructure automations.</p>
                            </div>

                            <div className="border-l-2 border-purple-500 pl-4">
                                <h4 className="text-lg text-purple-400 font-bold mb-1">Phase 2: Productization & Beta</h4>
                                <p className="text-sm text-slate-400 mb-1">Months 6-12</p>
                                <p className="text-base text-slate-300">Transition consulting frameworks to repeatable modules. Public beta for Assistant-PhD.com with 1k+ target users.</p>
                            </div>

                            <div className="border-l-2 border-cyan-500 pl-4">
                                <h4 className="text-lg text-cyan-400 font-bold mb-1">Phase 3: Scaling Ecosystem</h4>
                                <p className="text-sm text-slate-400 mb-1">Year 2+</p>
                                <p className="text-base text-slate-300">Scale scalable products/services to 50%+ of revenue. Strategic partnerships with key cloud and engine providers.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Slide>
    );
}
