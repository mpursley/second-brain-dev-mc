import React, { ReactNode } from 'react';
import { Printer } from 'lucide-react';

interface LetterheadProps {
  children: ReactNode;
}

export function Letterhead({ children }: LetterheadProps) {
  return (
    <div className="bg-slate-100 min-h-screen py-8 print:py-0 print:bg-white text-slate-900 font-sans font-light">
      <style>{`
        @media print {
          @page { margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background-color: white; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Action Bar */}
      <div className="max-w-[8.5in] mx-auto mb-6 flex justify-end no-print px-4">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium shadow-sm transition-colors cursor-pointer"
        >
          <Printer size={20} />
          Print / Save PDF
        </button>
      </div>

      {/* Document Base */}
      <div className="max-w-[8.5in] w-full min-h-[11in] mx-auto bg-white shadow-xl print:shadow-none print:w-full print:max-w-none relative flex flex-col px-[0.75in] py-[0.5in] overflow-hidden">
        


        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
        
        {/* Letterhead Header */}
        <header className="relative z-10 flex items-start justify-between mb-8 border-b border-indigo-100 pb-6">
          <div className="flex items-center gap-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white font-mono text-2xl shadow-lg ring-4 ring-indigo-50 print:ring-0">
              OW
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-display font-bold text-slate-900 tracking-tight mb-1">Open World Tech <span className="text-indigo-600">Inc.</span></h1>
              <span className="text-xs font-mono text-indigo-500 tracking-wider font-semibold">AI PRODUCTIVITY & INSIGHTS FOR LIFE</span>
            </div>
          </div>
          
          <div className="text-right text-sm text-slate-500 font-sans space-y-1">
            <p className="font-semibold text-slate-800">390 NE 191st St, STE 91863</p>
            <p className="font-semibold text-slate-800">Miami FL, 33179</p>
            <p className="text-indigo-600 mt-2"><a href="mailto:contact@openworldtech.io" className="hover:underline">contact@openworldtech.io</a></p>
            <p className="font-mono text-xs text-slate-400 font-medium whitespace-nowrap"><a href="http://openworldtech.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">http://openworldtech.io/</a></p>
          </div>
        </header>

        {/* Dynamic Content */}
        <main className="relative z-10 flex-1 text-[13px] leading-snug text-slate-800">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10 mt-8 print:mt-4 pt-4 border-t border-indigo-100 text-center text-[10px] text-slate-400 font-mono tracking-widest">
          <p>CONFIDENTIAL AND PROPRIETARY INFORMATION OF OPEN WORLD TECH INC.</p>
        </footer>
      </div>
    </div>
  );
}
