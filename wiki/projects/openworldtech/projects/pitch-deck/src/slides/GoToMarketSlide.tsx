import { Slide } from '../components/Slide';
import { Rocket, Users, Globe } from 'lucide-react';

export function GoToMarketSlide() {
  return (
    <Slide
      title="Go-To-Market Strategy"
      subtitle="A bottom-up approach fueled by community and enterprise trust."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center w-full">
          <div className="mb-6 p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
            <Users size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">B2C Acquisition</h3>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">•</span>
              Utility Magnets: Touch Up My Photo/Video.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">•</span>
              Simple top-of-funnel entry points.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-500 font-bold">•</span>
              Discovery of Assistant-PHD utility.
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-purple-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center w-full">
          <div className="mb-6 p-4 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
            <Rocket size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">Community Engagement</h3>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              Foster trust with "Big Tech Skeptics".
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              Monthly AMAs & Beta "Labs".
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold">•</span>
              "Genesis Waitlist" utilization.
            </li>
          </ul>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all group relative overflow-hidden flex flex-col items-center text-center w-full">
          <div className="mb-6 p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
            <Globe size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-6">B2B Expansion</h3>
          <ul className="space-y-4 text-slate-400 text-lg w-full text-left">
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-bold">•</span>
              Upsell AI integration to enterprise contacts.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-bold">•</span>
              Red-teaming services.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-500 font-bold">•</span>
              Leveraging Genius Suite & OpenWorldTech.io.
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  );
}
