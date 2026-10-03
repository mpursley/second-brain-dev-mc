import { Slide } from '../components/Slide';
import { Briefcase, Brain, Wand2, ArrowRight } from 'lucide-react';

export function ProductsSummarySlide() {
    return (
        <Slide
            title="The Product Ecosystem"
            subtitle="Three distinct pillars that bring open intelligence to every business and user."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-full pb-1">

                {/* Assistant, PhD */}
                <div className="flex flex-col p-3 rounded-2xl bg-indigo-900/20 border border-purple-500/30 hover:border-purple-500/60 transition-all group relative overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-2 shrink-0">
                        <Brain size={18} />
                    </div>
                    <div className="flex-grow flex flex-col space-y-1">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-0.5">Assistant, PhD</h3>
                            <div className="text-purple-400 text-[10px] font-mono mb-1 border-b border-white/10 pb-1">
                                B2C / CONSUMER
                            </div>
                        </div>
                        <p className="text-slate-300 text-sm leading-snug">
                            An Autonomous Intelligence Ecosystem treating personal workflows like a robust distributed system.
                        </p>

                        <div className="pt-1 flex flex-wrap gap-1 mt-auto">
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20">Core and PM</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20">Social & Collab</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20">Vitality & Wellness</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20">Expedition & Env</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20">Growth & Identity</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20">Entertainment</span>
                        </div>

                        <div className="mt-2 pt-2 border-t border-white/10 w-full">
                            <span className="text-[10px] font-mono text-purple-400 uppercase">Target: Mass Market</span>
                        </div>
                    </div>
                </div>

                {/* The Creative Suite */}
                <div className="flex flex-col p-3 rounded-2xl bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group relative">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2 shrink-0">
                        <Wand2 size={18} />
                    </div>
                    <div className="flex-grow flex flex-col space-y-1">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-0.5">The Creative Suite</h3>
                            <div className="text-cyan-400 text-[10px] font-mono mb-1 border-b border-white/10 pb-1">
                                B2C / PROSUMER
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-snug">
                            Seamlessly integrated tools for fast media touch-ups. High-demand, subscription-ready funnel bringing users into the ecosystem.
                        </p>
                        <div className="pt-1 flex flex-wrap gap-1 mt-auto">
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">Photo</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">Video</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">Music</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">Writing</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">Art</span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/10 w-full">
                            <span className="text-[10px] font-mono text-cyan-400 uppercase">Target: Creators</span>
                        </div>
                    </div>
                </div>

                {/* The Genius Suite */}
                <div className="flex flex-col p-3 rounded-2xl bg-slate-900/50 border border-indigo-500/20 hover:border-indigo-500/50 transition-all group relative">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2 shrink-0">
                        <Briefcase size={18} />
                    </div>
                    <div className="flex-grow flex flex-col space-y-1">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-0.5">The Genius Suite</h3>
                            <div className="text-indigo-400 text-[10px] font-mono mb-1 border-b border-white/10 pb-1">
                                B2B / ENTERPRISE
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-snug">
                            Autonomous Intelligence and real-world engineering rigor designed to build and scale businesses. Focus on SRE, DevOps, and SWE.
                        </p>
                        <div className="pt-1 flex flex-wrap gap-1 mt-auto">
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">Stack</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">SRE</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">DevOps</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">SWE</span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/10 w-full">
                            <span className="text-[10px] font-mono text-indigo-400 uppercase">Target: Enterprise</span>
                        </div>
                    </div>
                </div>

            </div>
        </Slide>
    );
}
