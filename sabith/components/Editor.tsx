
import React, { useState, useEffect, useRef } from 'react';
import { getAIExplanation } from '../services/geminiService';

interface EditorProps {
  code: string;
  onChange: (val: string) => void;
  lessonTitle: string;
}

export const Editor: React.FC<EditorProps> = ({ code, onChange, lessonTitle }) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(`
          <html>
            <head>
              <style>
                body { font-family: sans-serif; padding: 20px; color: #334155; }
              </style>
            </head>
            <body>${code}</body>
          </html>
        `);
        doc.close();
      }
    }
  }, [code, activeTab]);

  const handleAskAI = async () => {
    setIsAiLoading(true);
    setAiResponse(null);
    const result = await getAIExplanation(code, lessonTitle);
    setAiResponse(result || null);
    setIsAiLoading(false);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="h-12 bg-slate-50 border-b flex items-center justify-between px-4 shrink-0">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-4 h-full text-xs font-bold transition-all border-b-2 ${
              activeTab === 'editor' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500'
            }`}
          >
            CODE EDITOR
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 h-full text-xs font-bold transition-all border-b-2 ${
              activeTab === 'preview' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500'
            }`}
          >
            LIVE PREVIEW
          </button>
        </div>
        
        <button
          onClick={handleAskAI}
          disabled={isAiLoading}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-sm active:scale-95"
        >
          {isAiLoading ? (
             <i className="fa-solid fa-spinner fa-spin"></i>
          ) : (
            <i className="fa-solid fa-wand-magic-sparkles"></i>
          )}
          Ask AI Tutor
        </button>
      </div>

      <div className="flex-1 relative flex overflow-hidden">
        {/* Main Workspace */}
        <div className={`flex-1 ${activeTab === 'editor' ? 'block' : 'hidden md:block'} relative`}>
          <textarea
            value={code}
            onChange={(e) => onChange(e.target.value)}
            spellCheck={false}
            className="w-full h-full p-6 code-font text-sm text-slate-700 focus:outline-none resize-none bg-slate-900 text-slate-300 selection:bg-blue-500/30"
            placeholder="Type your HTML here..."
          />
        </div>

        {/* Live Preview Iframe */}
        <div className={`flex-1 bg-white ${activeTab === 'preview' ? 'block' : 'hidden md:block'} border-l`}>
          <iframe
            ref={iframeRef}
            className="w-full h-full border-none"
            title="Preview"
          />
        </div>

        {/* AI Response Overlay */}
        {aiResponse && (
          <div className="absolute right-4 bottom-4 w-80 max-h-64 bg-indigo-50 border border-indigo-200 shadow-xl rounded-2xl p-4 overflow-y-auto animate-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-indigo-500 uppercase">AI Tutor Says:</span>
              <button onClick={() => setAiResponse(null)} className="text-slate-400 hover:text-slate-600">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <p className="text-xs text-indigo-900 leading-relaxed whitespace-pre-wrap italic">
              "{aiResponse}"
            </p>
          </div>
        )}
      </div>

      <div className="h-8 bg-slate-900 border-t border-slate-800 flex items-center px-4 justify-between shrink-0">
        <span className="text-[10px] text-slate-500 font-medium">index.html</span>
        <div className="flex gap-4">
          <span className="text-[10px] text-slate-500 font-medium">UTF-8</span>
          <span className="text-[10px] text-slate-500 font-medium">HTML5</span>
        </div>
      </div>
    </div>
  );
};
