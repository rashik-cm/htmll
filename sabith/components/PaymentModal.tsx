
import React from 'react';
import { SUBSCRIPTION_PRICE } from '../constants';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, onSubscribe }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="relative h-40 bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center text-white p-6">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
            <i className="fa-solid fa-crown text-3xl"></i>
          </div>
          <h2 className="text-xl font-bold">HTML Master Pro</h2>
          <p className="text-blue-100 text-sm opacity-90">Unlock your full potential</p>
        </div>

        <div className="p-8">
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
              </div>
              <span className="text-sm text-slate-600 font-medium">Unlock 20+ Advanced Lessons</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
              </div>
              <span className="text-sm text-slate-600 font-medium">Unlimited AI Tutor Debugging</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
              </div>
              <span className="text-sm text-slate-600 font-medium">Download Certificate on Completion</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-check text-[10px] text-emerald-600"></i>
              </div>
              <span className="text-sm text-slate-600 font-medium">Ad-free Experience</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 mb-6 flex items-center justify-between border border-slate-100">
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Plan</div>
              <div className="text-2xl font-black text-slate-800">{SUBSCRIPTION_PRICE}</div>
            </div>
            <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold">BEST VALUE</div>
          </div>

          <button
            onClick={onSubscribe}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Activate Subscription
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed px-4">
            By subscribing, you agree to our Terms & Privacy Policy. Cancel anytime. 
            Payment processed via secure gateway.
          </p>
        </div>
      </div>
    </div>
  );
};
