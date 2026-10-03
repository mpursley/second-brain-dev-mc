/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Deck } from './components/Deck';
import { decks } from './decks';
import { ChevronRight } from 'lucide-react';

export default function App() {
  const [currentDeckName, setCurrentDeckName] = useState<keyof typeof decks | null>(null);
  const [showDeckMenu, setShowDeckMenu] = useState(false);

  if (!currentDeckName) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 shadow-xl shadow-indigo-500/20 font-bold text-2xl text-white font-mono">
              OW
            </div>
            <h1 className="text-4xl font-display font-bold text-white mb-4 tracking-tight">
              Open World Tech
            </h1>
            <p className="text-slate-400 font-mono text-sm uppercase tracking-widest">
              Pitch Deck Selection
            </p>
          </div>

          <div className="grid gap-4">
            {(Object.keys(decks) as Array<keyof typeof decks>).map((deckName) => (
              <button
                key={deckName}
                onClick={() => setCurrentDeckName(deckName)}
                className="group relative w-full p-6 bg-slate-900/50 hover:bg-slate-800 border border-white/10 hover:border-indigo-500/50 rounded-2xl transition-all duration-300 text-left cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
                      {deckName}
                    </h3>
                    <p className="text-slate-500 text-sm font-mono">
                      {decks[deckName].length} SLIDES • CONFIDENTIAL
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center text-slate-600 text-xs font-mono">
            © 2026 OPEN WORLD TECH INC. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    );
  }

  const slides = decks[currentDeckName];

  return (
    <>
      <div className="fixed top-4 left-4 z-[100] group flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setCurrentDeckName(null)}
          className="px-4 py-2 bg-slate-900/50 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-mono rounded-lg border border-white/10 backdrop-blur-sm transition-all cursor-pointer"
        >
          HOME
        </button>
      </div>

      <Deck slides={slides} key={currentDeckName} />
    </>
  );
}

