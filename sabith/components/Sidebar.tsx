
import React from 'react';
import { Module, UserState, Lesson } from '../types';

interface SidebarProps {
  modules: Module[];
  userState: UserState;
  onSelectLesson: (lesson: Lesson) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ modules, userState, onSelectLesson }) => {
  return (
    <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col h-full">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-terminal text-white"></i>
          </div>
          <div>
            <div className="text-white font-bold text-sm">HTML MASTER</div>
            <div className="text-[10px] text-slate-500 tracking-widest uppercase">Curriculum</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        {modules.map((module) => (
          <div key={module.id} className="mb-6 px-4">
            <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">
              {module.title}
            </h3>
            <ul className="space-y-1">
              {module.lessons.map((lesson) => {
                const isActive = userState.currentLessonId === lesson.id;
                const isCompleted = userState.completedLessons.includes(lesson.id);
                const isLocked = lesson.isPremium && !userState.isSubscribed;

                return (
                  <li key={lesson.id}>
                    <button
                      onClick={() => onSelectLesson(lesson)}
                      className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all flex items-center gap-3 group ${
                        isActive 
                          ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
                          : 'hover:bg-slate-800 text-slate-400'
                      }`}
                    >
                      <div className="relative">
                        {isCompleted ? (
                          <i className="fa-solid fa-circle-check text-emerald-500"></i>
                        ) : isLocked ? (
                          <i className="fa-solid fa-lock text-slate-600"></i>
                        ) : (
                          <i className={`fa-solid fa-circle text-[8px] ${isActive ? 'text-blue-500' : 'text-slate-700'}`}></i>
                        )}
                      </div>
                      <span className={`flex-1 truncate ${isActive ? 'font-medium' : ''}`}>
                        {lesson.title}
                      </span>
                      {lesson.isPremium && !userState.isSubscribed && (
                        <span className="text-[9px] bg-amber-500/20 text-amber-500 px-1.5 py-0.5 rounded uppercase font-bold">Pro</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400">Monthly Pass</span>
            <span className="text-xs font-bold text-emerald-400">Active</span>
          </div>
          <div className="text-[10px] text-slate-500 leading-relaxed">
            {userState.isSubscribed 
              ? "You have full access to all premium lessons and AI help." 
              : "Upgrade for just ₹2 to unlock everything."}
          </div>
        </div>
      </div>
    </aside>
  );
};
