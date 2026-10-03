import { Slide } from '../components/Slide';
import { motion } from 'motion/react';
import { Image, Video, Wand2, Music, PenTool, Palette } from 'lucide-react';

export function CreativeLabSlide() {
  return (
    <Slide
      title="Product: The Creative Suite"
      subtitle="Touch Up My Photo, Video, Music, Writing & Art"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

        {/* Photo Card */}
        <div className="p-5 rounded-2xl bg-cyan-900/20 border border-cyan-500/30 hover:bg-cyan-900/30 transition-all group flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
              <Image size={24} />
            </div>
            <a href="https://www.touchupmyphoto.com" target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg font-bold text-white hover:text-cyan-400 transition-colors break-words leading-tight">TouchUpMyPhoto.com</a>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mt-auto">
            Professional-grade photo restoration and enhancement.
            Remove objects, fix lighting, and upscale resolution.
          </p>
        </div>

        {/* Video Card */}
        <div className="p-5 rounded-2xl bg-purple-900/20 border border-purple-500/30 hover:bg-purple-900/30 transition-all group flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform shrink-0">
              <Video size={24} />
            </div>
            <a href="https://www.touchupmyvideo.com" target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg font-bold text-white hover:text-purple-400 transition-colors break-words leading-tight">TouchUpMyVideo.com</a>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mt-auto">
            Automated video editing, color grading, and noise reduction.
            Bring cinematic quality to everyday footage.
          </p>
        </div>

        {/* Music Card */}
        <div className="p-5 rounded-2xl bg-pink-900/20 border border-pink-500/30 hover:bg-pink-900/30 transition-all group flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400 group-hover:scale-110 transition-transform shrink-0">
              <Music size={24} />
            </div>
            <a href="https://www.touchupmymusic.com" target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg font-bold text-white hover:text-pink-400 transition-colors break-words leading-tight">TouchUpMyMusic.com</a>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mt-auto">
            AI-driven mastering, stem separation, and noise removal.
            Polish your tracks to studio quality instantly.
          </p>
        </div>

        {/* Writing Card */}
        <div className="p-5 rounded-2xl bg-orange-900/20 border border-orange-500/30 hover:bg-orange-900/30 transition-all group flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform shrink-0">
              <PenTool size={24} />
            </div>
            <a href="https://www.touchupmywriting.com" target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg font-bold text-white hover:text-orange-400 transition-colors break-words leading-tight">TouchUpMyWriting.com</a>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mt-auto">
            Professional grammar, style, and tone enhancement.
            Elevate your writing clarity instantly.
          </p>
        </div>

        {/* Art Card */}
        <div className="p-5 rounded-2xl bg-yellow-900/20 border border-yellow-500/30 hover:bg-yellow-900/30 transition-all group flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400 group-hover:scale-110 transition-transform shrink-0">
              <Palette size={24} />
            </div>
            <a href="https://www.touchupmyart.com" target="_blank" rel="noopener noreferrer" className="text-base lg:text-lg font-bold text-white hover:text-yellow-400 transition-colors break-words leading-tight">TouchUpMyArt.com</a>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mt-auto">
            AI-assisted digital art refinement and stylization.
            Perfect your sketches and designs.
          </p>
        </div>

        {/* Intelligent Assistance Card */}
        <div className="relative flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden group hover:border-white/20 transition-all text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-orange-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10 space-y-3 mt-auto mb-auto">
            <Wand2 size={28} className="mx-auto text-white/50 group-hover:text-white/80 transition-colors flex-shrink-0" />
            <h3 className="text-xl font-bold text-white leading-tight">Intelligent Assistance</h3>
            <p className="text-slate-300 text-sm">
              From <span className="text-cyan-400 font-bold">limitless creativity</span> to <span className="text-purple-400 font-bold">perfected polish</span>.
            </p>
          </div>
        </div>

      </div>
    </Slide>
  );
}
