
import React, { useState, useEffect, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { LessonContent } from './components/LessonContent';
import { Editor } from './components/Editor';
import { PaymentModal } from './components/PaymentModal';
import { HTML_MODULES, APP_NAME } from './constants';
import { Lesson, UserState } from './types';

const App: React.FC = () => {
  const [userState, setUserState] = useState<UserState>(() => {
    const saved = localStorage.getItem('html_master_user');
    return saved ? JSON.parse(saved) : {
      completedLessons: [],
      isSubscribed: false,
      currentLessonId: HTML_MODULES[0].lessons[0].id
    };
  });

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [activeCode, setActiveCode] = useState('');
  
  const currentLesson = useMemo(() => {
    for (const mod of HTML_MODULES) {
      const lesson = mod.lessons.find(l => l.id === userState.currentLessonId);
      if (lesson) return lesson;
    }
    return HTML_MODULES[0].lessons[0];
  }, [userState.currentLessonId]);

  useEffect(() => {
    localStorage.setItem('html_master_user', JSON.stringify(userState));
  }, [userState]);

  useEffect(() => {
    setActiveCode(currentLesson.initialCode);
  }, [currentLesson]);

  const handleLessonSelect = (lesson: Lesson) => {
    if (lesson.isPremium && !userState.isSubscribed) {
      setIsPaymentModalOpen(true);
      return;
    }
    setUserState(prev => ({ ...prev, currentLessonId: lesson.id }));
  };

  const handleComplete = () => {
    setUserState(prev => ({
      ...prev,
      completedLessons: Array.from(new Set([...prev.completedLessons, currentLesson.id]))
    }));
    
    // Auto-advance to next lesson if available
    let nextFound = false;
    for (const mod of HTML_MODULES) {
      const idx = mod.lessons.findIndex(l => l.id === currentLesson.id);
      if (idx !== -1 && idx < mod.lessons.length - 1) {
        const next = mod.lessons[idx + 1];
        if (!next.isPremium || userState.isSubscribed) {
          handleLessonSelect(next);
          nextFound = true;
          break;
        }
      }
    }
    if (!nextFound) alert("Module completed! Great job!");
  };

  const handleSubscribe = () => {
    setUserState(prev => ({ ...prev, isSubscribed: true }));
    setIsPaymentModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar 
        modules={HTML_MODULES} 
        userState={userState} 
        onSelectLesson={handleLessonSelect} 
      />
      
      <main className="flex-1 flex flex-col h-full relative">
        <header className="h-16 border-b bg-white flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-code text-blue-600 text-xl"></i>
            <h1 className="font-bold text-lg text-slate-800">{APP_NAME}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {!userState.isSubscribed && (
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className="bg-amber-100 text-amber-700 hover:bg-amber-200 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <i className="fa-solid fa-crown"></i>
                Upgrade to Pro
              </button>
            )}
            <div className="flex flex-col items-end">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Progress</span>
              <div className="w-32 h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${(userState.completedLessons.length / HTML_MODULES.flatMap(m => m.lessons).length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div className="w-1/3 border-r bg-white overflow-y-auto p-6 scroll-smooth">
            <LessonContent 
              lesson={currentLesson} 
              onComplete={handleComplete} 
              isCompleted={userState.completedLessons.includes(currentLesson.id)}
            />
          </div>
          
          <div className="flex-1 bg-slate-100 p-4 overflow-hidden flex flex-col gap-4">
            <Editor 
              code={activeCode} 
              onChange={setActiveCode} 
              lessonTitle={currentLesson.title}
            />
          </div>
        </div>
      </main>

      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
        onSubscribe={handleSubscribe}
      />
    </div>
  );
};

export default App;
