import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SlideProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Slide({ children, title, subtitle, className = '' }: SlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`w-full h-full flex flex-col p-8 md:p-16 max-w-7xl mx-auto ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-8 md:mb-12">
          {title && (
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 mb-4 uppercase italic tracking-tighter">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl italic">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {children}
      </div>
    </motion.div>
  );
}
