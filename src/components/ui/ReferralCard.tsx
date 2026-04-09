import {   Copy, Gift, Users   } from 'lucide-react';
import type {  User  } from '../../types';

interface ReferralCardProps {
  user: User;
}

export default function ReferralCard({ user }: ReferralCardProps) {
  const referralLink = `https://yelkanfoods.com/ref=${user.referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  
  };

  return (
    <div className="bg-white editorial-border p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Gift className="w-48 h-48 text-gray-900" />
      </div>

      <div className="relative z-10">
        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-600 flex items-center gap-4 mb-2">
          <Gift className="h-4 w-4 text-brand-accent" />
          Your Progress
        </h3>
        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-gray-600 max-w-sm leading-relaxed mb-8">Share your unique link. Earn $5 for every successful referral.</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 p-6 editorial-border">
            <div className="flex items-center text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              <Users className="w-4 h-4 mr-3" /> Referrals
            </div>
            <span className="text-3xl font-serif italic text-gray-900">{user.referralCount}</span>
          </div>
          <div className="bg-gray-50 p-6 editorial-border">
            <div className="flex items-center text-[0.6rem] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
              <Gift className="w-4 h-4 mr-3" /> Earned
            </div>
            <span className="text-3xl font-serif italic text-brand-accent">${user.referralEarnings.toFixed(2)}</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 editorial-border flex items-center justify-between">
          <span className="text-xs font-bold font-mono tracking-widest text-gray-500 px-4 truncate select-all">{referralLink}</span>
          <button 
            onClick={copyToClipboard}
            className="bg-gray-900 hover:bg-brand-accent flex-shrink-0 text-gray-50 p-3 editorial-border transition-colors flex items-center justify-center"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
