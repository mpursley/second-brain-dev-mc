import { Slide } from '../components/Slide';

export function MarketSlide() {
  return (
    <Slide
      title="Market Size / Opportunity"
      subtitle="Capturing the intersection of Personal AI, Enterprise DevOps, and Creator Tools."
    >
      <div className="flex flex-col md:flex-row items-center justify-center mt-2 gap-8 w-full max-w-6xl mx-auto">

        {/* Left Side: Nested Circles Graphic */}
        <div className="relative w-full md:w-1/2 aspect-square max-w-[400px] flex items-center justify-center -ml-8 shrink-0">

          {/* TAM Circle (Outer) */}
          <div className="absolute inset-0 bg-slate-800/40 border-2 border-slate-700/50 rounded-full flex flex-col items-center justify-start pt-[12%]">
            <span className="text-slate-500 font-mono text-xs tracking-widest font-bold">TAM</span>
            <span className="text-white font-bold text-xl md:text-2xl mt-1">~$850B+</span>
          </div>

          {/* SAM Circle (Middle) */}
          <div className="absolute w-[70%] h-[70%] top-[30%] bg-indigo-900/60 border-2 border-indigo-500/50 rounded-full flex flex-col items-center justify-start pt-[12%] shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            <span className="text-indigo-400 font-mono text-xs tracking-widest font-bold">SAM</span>
            <span className="text-white font-bold text-xl md:text-2xl mt-1">~$210B+</span>
          </div>

          {/* SOM Circle (Inner) */}
          <div className="absolute w-[45%] h-[45%] top-[55%] bg-cyan-900/80 border-2 border-cyan-400/80 rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            <span className="text-cyan-300 font-mono text-xs md:text-sm tracking-widest font-bold -mt-4">SOM</span>
            <span className="text-white font-black text-xl md:text-2xl mt-1">~$16B+</span>
          </div>

        </div>

        {/* Right Side: Legend / Metrics Details */}
        <div className="w-full md:w-1/2 flex flex-col space-y-3 lg:pr-8">

          {/* TAM Legend Item */}
          <div className="p-3 lg:p-4 rounded-2xl bg-slate-800/20 border-l-4 border-slate-600">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xl font-bold text-white">Global Cloud & AI</h3>
              <span className="text-slate-500 font-mono text-sm font-bold tracking-widest">TAM</span>
            </div>
            <div className="text-slate-400 text-sm mb-1 uppercase tracking-wide font-semibold">Cloud Computing, AI SaaS, Personal Productivity</div>
            <p className="text-slate-500 text-base leading-relaxed">
              The aggregate addressable cloud and enterprise software services market.
            </p>
          </div>

          {/* SAM Legend Item */}
          <div className="p-3 lg:p-4 rounded-2xl bg-indigo-900/10 border-l-4 border-indigo-500/60">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xl font-bold text-indigo-300">Prosumers & Creators</h3>
              <span className="text-indigo-500 font-mono text-sm font-bold tracking-widest">SAM</span>
            </div>
            <div className="text-indigo-200/50 text-sm mb-1 uppercase tracking-wide font-semibold">Fractional Observability & Local AI</div>
            <p className="text-indigo-300/80 text-base leading-relaxed">
              The exploding Creator Economy utilizing highly-independent workflow systems.
            </p>
          </div>

          {/* SOM Legend Item */}
          <div className="p-3 lg:p-4 rounded-2xl bg-cyan-900/10 border-l-4 border-cyan-400/80">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-xl font-bold text-cyan-300">Enterprise SRE & DevOps</h3>
              <span className="text-cyan-500 font-mono text-sm font-bold tracking-widest">SOM</span>
            </div>
            <div className="text-cyan-200/50 text-sm mb-1 uppercase tracking-wide font-semibold">DevOps tools & Automation pipelines</div>
            <p className="text-cyan-300/80 text-base leading-relaxed">
              The rapidly growing DevOps and Software Asset Management sectors.
            </p>
          </div>

        </div>
      </div>
    </Slide>
  );
}
