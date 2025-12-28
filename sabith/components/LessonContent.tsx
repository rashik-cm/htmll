
import React from 'react';
import { Lesson } from '../types';

interface LessonContentProps {
  lesson: Lesson;
  onComplete: () => void;
  isCompleted: boolean;
}

export const LessonContent: React.FC<LessonContentProps> = ({ lesson, onComplete, isCompleted }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{lesson.title}</h2>
        <p className="text-slate-600 leading-relaxed">
          {lesson.content}
        </p>
      </div>

      <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
        <h4 className="text-sm font-bold text-blue-900 mb-1 flex items-center gap-2">
          <i className="fa-solid fa-circle-info"></i>
          Your Task
        </h4>
        <p className="text-sm text-blue-800 leading-relaxed">
          Try to modify the code in the editor on the right. See how the preview changes in real-time. 
          When you're ready, click "Mark as Complete" to move to the next step.
        </p>
      </div>

      <div className="pt-6 border-t">
        <button
          onClick={onComplete}
          className={`w-full py-3 rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2 ${
            isCompleted 
              ? 'bg-emerald-100 text-emerald-700 cursor-default' 
              : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md active:scale-[0.98]'
          }`}
        >
          {isCompleted ? (
            <>
              <i className="fa-solid fa-check-double"></i>
              Completed
            </>
          ) : (
            <>
              Next Lesson
              <i className="fa-solid fa-arrow-right"></i>
            </>
          )}
        </button>
      </div>

      <div className="space-y-4">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Helpful Links</h4>
        <ul className="space-y-2">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="text-sm text-blue-600 hover:underline flex items-center gap-2">
              <i className="fa-solid fa-book-open"></i>
              MDN Web Docs: HTML
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/html/" target="_blank" className="text-sm text-blue-600 hover:underline flex items-center gap-2">
              <i className="fa-solid fa-graduation-cap"></i>
              W3Schools Reference
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
