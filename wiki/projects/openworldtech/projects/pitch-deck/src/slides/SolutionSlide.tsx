import { Slide } from '../components/Slide';
import { motion } from 'motion/react';
import { User, Brain, Wand2, Briefcase, Palette, ArrowRight } from 'lucide-react';

export function SolutionSlide() {
  return (
    <Slide
      title="The Solution"
      subtitle="Insights for for Your Life"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2 w-full max-w-6xl mx-auto pb-2">

        {/* B2C Column */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative flex flex-col p-4 rounded-2xl bg-gradient-to-b from-indigo-900/40 to-slate-900/80 border border-indigo-500/30 overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
            <User size={32} className="text-indigo-400" />
          </div>
          <a href="https://www.assistant-phd.com" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white mb-2 hover:text-indigo-400 transition-colors inline-block">Assistant, PHD</a>
          <p className="text-indigo-200 font-mono text-xs mb-2 tracking-wide">Insights for for Your Life</p>
          <p className="text-slate-400 text-sm italic mb-6 leading-relaxed">Treating personal habits and workflows like a robust distributed system.</p>

          <ul className="space-y-3 text-slate-300 flex-1 text-base">
            <li className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-indigo-400" />
                6 Pillars of Life Management
              </div>
              <ul className="pl-6 text-sm text-slate-400 space-y-1">
                <li>- Core and Project Management</li>
                <li>- Social & Collab</li>
                <li>- Vitality & Wellness</li>
                <li>- Expedition & Env</li>
                <li>- Growth & Identity</li>
                <li>- Entertainment</li>
              </ul>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-indigo-400" />
              Data Control & Independence
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-indigo-400" />
              Token-Based Economy
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center w-full">
            <span className="text-sm font-mono tracking-wider text-indigo-400">TARGET: MASS MARKET</span>
            <ArrowRight size={20} className="text-indigo-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Creative Column */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col p-4 rounded-3xl bg-cyan-900/20 border border-cyan-500/30 hover:bg-white/5 transition-all group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <Palette size={64} className="text-cyan-500" />
          </div>
          <p className="text-cyan-200 font-mono text-sm mb-1 tracking-wide">Media Touch-ups</p>
          <h3 className="text-2xl font-bold text-white mb-2">The Creative Suite</h3>
          <p className="text-slate-300 text-base leading-relaxed mb-4">Seamlessly integrated media tools for photo, video, and music.</p>

          <ul className="space-y-3 text-slate-300 flex-1 text-base">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-400" />
              TouchUpMyPhoto.com
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-400" />
              TouchUpMyVideo.com
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-400" />
              TouchUpMyMusic.com
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-400" />
              TouchUpMyWriting.com
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-400" />
              TouchUpMyArt.com
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center w-full">
            <span className="text-sm font-mono tracking-wider text-cyan-400">TARGET: CREATORS</span>
            <ArrowRight size={20} className="text-cyan-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* B2B Column */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex flex-col p-4 rounded-3xl bg-purple-900/20 border border-purple-500/30 hover:bg-white/5 transition-all group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
            <Briefcase size={64} className="text-purple-500" />
          </div>
          <p className="text-purple-200 font-mono text-sm mb-1 tracking-wide">B2B: Enterprise Intelligence</p>
          <h3 className="text-2xl font-bold text-white mb-2">The Genius Suite</h3>
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            Autonomous site reliability, devops and software engineering scaling business operations to frontier capabilities.
          </p>
          <ul className="space-y-3 text-slate-300 flex-1 text-base">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-purple-400" />
              <a href="https://genius-stack.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">http://genius-stack.com</a>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-purple-400" />
              <a href="https://genius-sre.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">http://genius-sre.com</a>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-purple-400" />
              <a href="https://genius-devops.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">http://genius-devops.com</a>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-purple-400" />
              <a href="https://genius-swe.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">http://genius-swe.com</a>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center w-full">
            <span className="text-sm font-mono tracking-wider text-purple-400">TARGET: ENTERPRISE</span>
            <ArrowRight size={20} className="text-purple-500 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

      </div>
    </Slide>
  );
}
