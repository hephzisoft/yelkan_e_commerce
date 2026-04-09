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
    <div className="bg-stone-900 editorial-border p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Gift className="w-48 h-48 text-stone-100" />
      </div>

      <div className="relative z-10">
        <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-stone-400 flex items-center gap-4 mb-2">
          <Gift className="h-4 w-4 text-orange-500" />
          Metrics Feed
        </h3>
        <p className="text-[0.6rem] uppercase tracking-[0.1em] text-stone-600 max-w-sm leading-relaxed mb-8">Distribute identification link. Secure fixed 5.00 dividend per successful connection.</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-stone-950 p-6 editorial-border">
            <div className="flex items-center text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">
              <Users className="w-4 h-4 mr-3" /> Connection Count
            </div>
            <span className="text-3xl font-serif italic text-stone-100">{user.referralCount}</span>
          </div>
          <div className="bg-stone-950 p-6 editorial-border">
            <div className="flex items-center text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-4">
              <Gift className="w-4 h-4 mr-3" /> Accumulated
            </div>
            <span className="text-3xl font-serif italic text-orange-500">${user.referralEarnings.toFixed(2)}</span>
          </div>
        </div>

        <div className="bg-stone-950 p-4 editorial-border flex items-center justify-between">
          <span className="text-xs font-bold font-mono tracking-widest text-stone-500 px-4 truncate select-all">{referralLink}</span>
          <button 
            onClick={copyToClipboard}
            className="bg-stone-100 hover:bg-orange-500 flex-shrink-0 text-stone-950 p-3 editorial-border transition-colors flex items-center justify-center"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
