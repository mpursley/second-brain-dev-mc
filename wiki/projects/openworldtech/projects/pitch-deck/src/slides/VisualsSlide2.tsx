import { useState } from 'react';
import { Slide } from '../components/Slide';
import { motion, AnimatePresence } from 'motion/react';

export function VisualsSlide2() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const screenshots = [
        { src: "/resources/app_screenshots/Assistant-PhD-Connections.png", alt: "Assistant PhD Connections" },
        { src: "/resources/app_screenshots/TouchUpMyPhoto-LoginScreen.png", alt: "TouchUpMyPhoto Login Screen" },
    ];

    return (
        <>
            <Slide
                title="Early-Stage Launch Pages & Visuals (2/2)"
                subtitle="A glimpse into the user experience."
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pb-12 overflow-y-auto max-h-[60vh] pr-2 items-center justify-center">
                    {screenshots.map((shot, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedImage(shot.src)}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 cursor-pointer hover:border-indigo-500/50 transition-all"
                        >
                            <div className="aspect-video bg-slate-800 relative">
                                <img
                                    src={shot.src}
                                    alt={shot.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://placehold.co/1200x800/1e293b/cbd5e1?text=${encodeURIComponent(shot.alt)}`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 bg-black/60 text-white px-4 py-2 rounded-lg backdrop-blur-sm transition-opacity duration-300 text-sm font-medium">
                                        Click to enlarge
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-slate-900 border-t border-white/5">
                                <p className="text-sm text-slate-400 font-mono text-center">{shot.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Slide>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-[95vw] max-h-[95vh] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20"
                        >
                            <img
                                src={selectedImage}
                                alt="Enlarged view"
                                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                                className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain cursor-zoom-out"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
