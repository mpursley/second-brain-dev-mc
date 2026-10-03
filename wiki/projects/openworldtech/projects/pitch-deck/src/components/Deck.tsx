import { useState, useEffect } from 'react';
import React from 'react';
import { AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Printer, X } from 'lucide-react';

interface DeckProps {
  slides: React.ComponentType[];
}

export function Deck({ slides }: DeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrintView, setIsPrintView] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    const root = document.documentElement as HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void>;
    };
    const doc = document as Document & {
      webkitFullscreenElement?: Element;
      webkitExitFullscreen?: () => Promise<void>;
    };

    if (!doc.fullscreenElement && !doc.webkitFullscreenElement) {
      if (root.requestFullscreen) {
        root.requestFullscreen();
      } else if (root.webkitRequestFullscreen) {
        root.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isPrintView) return;

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isPrintView]);

  const CurrentSlideComponent = slides[currentSlide];

  if (isPrintView) {
    return (
      <div className="bg-slate-950 min-h-screen text-white">
        <style>{`
          @media print {
            @page { size: landscape; margin: 0; }
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none !important; }
            .print-slide { break-after: always; height: 100vh; width: 100vw; overflow: hidden; }
          }
        `}</style>

        <div className="fixed top-4 right-4 z-[100] flex gap-4 no-print">
          <button
            onClick={() => {
              window.focus();
              window.print();
            }}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium shadow-lg transition-colors cursor-pointer"
          >
            <Printer size={20} />
            Print / Save PDF
          </button>
          <button
            onClick={() => setIsPrintView(false)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium shadow-lg transition-colors cursor-pointer"
          >
            <X size={20} />
            Close
          </button>
        </div>

        <div className="print:block">
          {slides.map((SlideComponent, index) => (
            <div key={index} className="print-slide w-full h-screen relative overflow-hidden border-b border-slate-800 print:border-0">
              {/* Background for each slide in print mode to ensure consistency */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
              </div>

              <div className="relative z-10 h-full">
                <SlideComponent />
              </div>

              {/* Slide Number for Print */}
              <div className="absolute bottom-4 right-6 text-slate-500 text-xs font-mono print:block hidden">
                {index + 1} / {slides.length}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-cyan-900/10 rounded-full blur-[80px]" />
      </div>

      {/* Header / Progress */}
      <div className="relative z-30 w-full p-6 flex justify-between items-center border-b border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white font-mono">
            OW
          </div>
          <span className="font-display font-bold tracking-wide text-slate-200">Open World Tech Inc. - CONFIDENTIAL - DRAFT</span>
        </div>
        <div className={`relative flex items-center transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 hover:opacity-100'}`}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <span className="font-mono text-xs text-slate-500 group-hover:text-indigo-400 transition-colors">
              SLIDE {currentSlide + 1} / {slides.length}
            </span>
            <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 transition-all duration-300 ease-out group-hover:bg-indigo-400"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </button>

          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-4 w-64 max-h-[60vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-xl shadow-2xl z-50 p-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPrintView(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg text-xs font-mono transition-colors text-indigo-300 hover:bg-indigo-500/20 hover:text-white border border-indigo-500/30 mb-2 flex items-center gap-2 cursor-pointer relative z-50"
              >
                <Printer size={14} />
                PRINT / SAVE PDF
              </button>

              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-xs font-mono transition-colors ${currentSlide === index
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'
                    }`}
                >
                  <span className="opacity-50 mr-2">{String(index + 1).padStart(2, '0')}</span>
                  {slide.name.replace(/Slide$/, '').replace(/([A-Z])/g, ' $1').trim()}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <CurrentSlideComponent key={currentSlide} />
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="relative z-20 p-6 flex justify-between items-center border-t border-white/5 bg-slate-950/50 backdrop-blur-sm">
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 rounded-full flex items-center justify-center transition-all ${currentSlide === 0
                ? 'bg-slate-900 text-slate-700 cursor-not-allowed'
                : 'bg-slate-800 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20'
              }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 rounded-full flex items-center justify-center transition-all ${currentSlide === slides.length - 1
                ? 'bg-slate-900 text-slate-700 cursor-not-allowed'
                : 'bg-slate-800 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20'
              }`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
