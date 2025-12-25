import React from 'react';
import { Play, Pause, Send, RotateCcw, XCircle } from 'lucide-react';

const ControlPanel = () => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-6 mb-4 bg-white rounded-xl shadow-sm border border-gray-100 w-full max-w-3xl mx-auto">
      
      <button className="flex flex-col items-center gap-1 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg transition-all active:scale-95">
        <Play size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wide">Start</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg transition-all active:scale-95">
        <Pause size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wide">Pause</span>
      </button>

      <div className="h-8 w-[1px] bg-gray-200"></div>

      <button className="flex flex-col items-center gap-1 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all active:scale-95">
        <Send size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wide">Enter</span>
      </button>

      <button className="flex flex-col items-center gap-1 text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all active:scale-95">
        <RotateCcw size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wide">Retake</span>
      </button>

      <div className="h-8 w-[1px] bg-gray-200"></div>

      <button className="flex flex-col items-center gap-1 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-all active:scale-95">
        <XCircle size={22} />
        <span className="text-[10px] font-bold uppercase tracking-wide">Close</span>
      </button>

    </div>
  );
};

export default ControlPanel;