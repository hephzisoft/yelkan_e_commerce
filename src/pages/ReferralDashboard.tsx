import { useEffect, useState } from 'react';
import type {  User  } from '../types';
import {   fetchUserProfile   } from '../services/api';
import ReferralCard from '../components/ui/ReferralCard';
import {   Users, DollarSign, TrendingUp   } from 'lucide-react';

export default function ReferralDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile().then(userData => {
      setUser(userData);
      setLoading(false);
    });
  }, []);

  if (loading || !user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 flex justify-center border-b border-gray-200">
        <div className="animate-spin rounded-none h-12 w-12 border-2 border-gray-200 border-t-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16 border-b border-gray-200 pb-12">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-serif italic text-gray-900 uppercase tracking-tighter">Affiliate Network</h1>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Distribute your protocol. Earn capital.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16 editorial-border border-b-0 md:border-b">
        <div className="bg-white p-8 editorial-border border-l-0 border-t-0 border-r-0 border-b md:border-b-0 md:border-r border-gray-200 flex items-center">
          <div className="bg-gray-50 p-6 editorial-border text-gray-700 mr-6">
            <Users className="w-8 h-8" strokeWidth={1} />
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-gray-500">Active Nodes</p>
            <p className="text-3xl font-serif italic text-gray-900">{user.referralCount}</p>
          </div>
        </div>
        
        <div className="bg-white p-8 editorial-border border-l-0 border-t-0 border-r-0 border-b md:border-b-0 md:border-r border-gray-200 flex items-center">
          <div className="bg-gray-50 p-6 editorial-border text-gray-700 mr-6">
            <DollarSign className="w-8 h-8" strokeWidth={1} />
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-gray-500">Yield</p>
            <p className="text-3xl font-serif italic text-gray-900">${user.referralEarnings.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="bg-white p-8 editorial-border border-l-0 border-t-0 border-r-0 border-b-0 border-gray-200 flex items-center">
          <div className="bg-gray-50 p-6 editorial-border text-orange-500 mr-6">
            <TrendingUp className="w-8 h-8" strokeWidth={1} />
          </div>
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-gray-500">Pending Capital</p>
            <p className="text-3xl font-serif italic text-gray-900">$10.00</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 editorial-border bg-white">
        <div className="p-8 sm:p-12 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-8 border-b border-gray-200 pb-4">Transmission Protocol</h2>
          <ReferralCard user={user} />
        </div>
        
        <div className="p-8 sm:p-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-8 border-b border-gray-200 pb-4">Mechanism Sequence</h2>
          <ol className="space-y-8">
            <li className="flex group">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 editorial-border text-gray-600 font-bold mr-6 group-hover:text-orange-500 group-hover:border-orange-500 transition-colors">01</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-[0.1em]">Distribute Link</h3>
                <p className="text-xs uppercase tracking-[0.1em] text-gray-500 mt-2 leading-relaxed">Broadcast your unique identifier to the wider network connection.</p>
              </div>
            </li>
            <li className="flex group">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 editorial-border text-gray-600 font-bold mr-6 group-hover:text-orange-500 group-hover:border-orange-500 transition-colors">02</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-[0.1em]">Node Authentication</h3>
                <p className="text-xs uppercase tracking-[0.1em] text-gray-500 mt-2 leading-relaxed">Incoming connections from your link receive an automatic 10% tariff baseline deduction.</p>
              </div>
            </li>
            <li className="flex group">
              <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 editorial-border text-gray-600 font-bold mr-6 group-hover:text-orange-500 group-hover:border-orange-500 transition-colors">03</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-[0.1em]">Capital Extraction</h3>
                <p className="text-xs uppercase tracking-[0.1em] text-gray-500 mt-2 leading-relaxed">Acquire a flat $5 dividend immediately following successful authentication.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
