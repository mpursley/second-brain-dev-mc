import { useState, useEffect } from 'react';
import { Slide } from '../components/Slide';
import { Maximize2, X } from 'lucide-react';

function ScreenshotView({ shot }: { shot: { src: string, alt: string } }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);

  return (
    <>
      {isFullscreen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm cursor-pointer p-8"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
          >
            <X size={24} />
          </button>
          <img
            src={shot.src}
            alt={shot.alt}
            className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-xl font-semibold text-white bg-black/50 inline-block px-6 py-2 rounded-full backdrop-blur-md border border-white/10">
              {shot.alt}
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center mt-2 w-full h-[55vh]">
        <div
          className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 cursor-pointer w-full max-w-7xl h-full flex flex-col hover:border-indigo-500/50 transition-colors"
          onClick={() => setIsFullscreen(true)}
        >
          <div className="p-4 bg-slate-900 border-b border-white/5 shrink-0">
            <p className="text-lg font-semibold text-slate-300 text-center">{shot.alt}</p>
          </div>
          <div className="flex-1 bg-slate-800 relative p-6">
            <img
              src={shot.src}
              alt={shot.alt}
              className="absolute inset-4 w-[calc(100%-12px)] h-[calc(100%-12px)] object-contain group-hover:scale-[1.02] transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = `https://placehold.co/1200x800/1e293b/cbd5e1?text=${encodeURIComponent(shot.alt)}`;
              }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100 text-white flex flex-col items-center gap-3">
                <div className="p-4 bg-black/50 rounded-full backdrop-blur-sm">
                  <Maximize2 size={32} />
                </div>
                <span className="font-semibold text-base tracking-widest uppercase shadow-black drop-shadow-md">View Full Screen</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function VisualsSlide1() {
  return (
    <Slide title="Early-Stage Launch Pages (1/5)" subtitle="OpenWorldTech">
      <ScreenshotView shot={{ src: "/resources/app_screenshots/OpenWorldTech-FrontPage.png", alt: "OpenWorldTech Front Page" }} />
    </Slide>
  );
}

export function VisualsSlide2() {
  return (
    <Slide title="Early-Stage Launch Pages (2/5)" subtitle="The Genius Suite">
      <ScreenshotView shot={{ src: "/resources/app_screenshots/Genius-Stack.png", alt: "Genius Stack" }} />
    </Slide>
  );
}

export function VisualsSlide3() {
  return (
    <Slide title="Early-Stage Launch Pages (3/5)" subtitle="Assistant, PhD">
      <ScreenshotView shot={{ src: "/resources/app_screenshots/Assistant-PhD-LandingPage.png", alt: "Assistant PhD Landing Page" }} />
    </Slide>
  );
}

export function VisualsSlide4() {
  return (
    <Slide title="Early-Stage Launch Pages (4/5)" subtitle="Assistant, PhD">
      <ScreenshotView shot={{ src: "/resources/app_screenshots/Assistant-PhD-Projects.png", alt: "Assistant PhD Projects" }} />
    </Slide>
  );
}

export function VisualsSlide5() {
  return (
    <Slide title="Early-Stage Launch Pages (5/5)" subtitle="The Creative Suite">
      <ScreenshotView shot={{ src: "/resources/app_screenshots/TouchUpMyPhoto-LoginScreen.png", alt: "TouchUpMyPhoto Login Screen" }} />
    </Slide>
  );
}
