import { motion } from 'motion/react';
import { Slide } from '../components/Slide';

export function IntroSlide() {
  return (
    <Slide className="flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-6xl mx-auto w-full h-full flex flex-col"
      >
        <div className="shrink-0 mb-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
            OpenWorldTech Inc.
          </h1>
        </div>

        <div className="flex-1 w-full relative rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-6 min-h-[50px]">
          <img
            src="/resources/app_screenshots/owt_main_page.png"
            alt="OpenWorldTech Main Page"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            style={{ objectPosition: "center calc(50% - 50px)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 to-transparent pointer-events-none" />
        </div>

        <div className="shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left mt-auto">
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all flex flex-col">
            <h3 className="text-xl font-bold text-blue-400 mb-1">OpenWorldTech Inc.</h3>
            <p className="text-sm text-slate-400 mb-3 italic">Technical integration, solutions and support.</p>
            <div className="flex flex-col space-y-1 mt-auto">
              <a href="https://openworldtech.io" className="text-sm text-slate-300 hover:text-blue-300 hover:underline">http://openworldtech.io</a>
              <a href="https://openworldgame.io" className="text-sm text-slate-300 hover:text-blue-300 hover:underline">http://openworldgame.io</a>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all flex flex-col">
            <h3 className="text-xl font-bold text-purple-400 mb-1">The Genius Suite</h3>
            <p className="text-sm text-slate-400 mb-3 italic">Autonomous Intelligence & Real-World Engineering.</p>
            <div className="flex flex-col space-y-1 mt-auto">
              <a href="https://genius-sre.com" className="text-sm text-slate-300 hover:text-purple-300 hover:underline">http://genius-sre.com</a>
              <a href="https://genius-devops.com" className="text-sm text-slate-300 hover:text-purple-300 hover:underline">http://genius-devops.com</a>
              <a href="https://genius-swe.com" className="text-sm text-slate-300 hover:text-purple-300 hover:underline">http://genius-swe.com</a>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 transition-all flex flex-col">
            <h3 className="text-xl font-bold text-indigo-400 mb-1">Assistant, PhD</h3>
            <p className="text-sm text-slate-400 mb-3 italic">What will you build/learn/navigate/design with your Assistant, PhD?</p>
            <div className="flex flex-col space-y-1 mt-auto">
              <a href="https://assistant-phd.com" className="text-sm text-slate-300 hover:text-indigo-300 hover:underline">http://assistant-phd.com</a>
            </div>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 transition-all flex flex-col">
            <h3 className="text-xl font-bold text-cyan-400 mb-1">The Creative Suite</h3>
            <p className="text-sm text-slate-400 mb-3 italic">From limitless creativity to perfected polish.</p>
            <div className="flex flex-col space-y-1 mt-auto">
              <a href="https://touchupmyphoto.com" className="text-base lg:text-sm text-slate-300 hover:text-cyan-300 hover:underline break-all">http://touchupmyphoto.com</a>
              <a href="https://touchupmyvideo.com" className="text-base lg:text-sm text-slate-300 hover:text-cyan-300 hover:underline break-all">http://touchupmyvideo.com</a>
              <a href="https://touchupmymusic.com" className="text-base lg:text-sm text-slate-300 hover:text-cyan-300 hover:underline break-all">http://touchupmymusic.com</a>
              <a href="https://touchupmywriting.com" className="text-base lg:text-sm text-slate-300 hover:text-cyan-300 hover:underline break-all">http://touchupmywriting.com</a>
              <a href="https://touchupmyart.com" className="text-base lg:text-sm text-slate-300 hover:text-cyan-300 hover:underline break-all">http://touchupmyart.com</a>
            </div>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
}
