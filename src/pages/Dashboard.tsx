import { useEffect, useState } from 'react';
import type {  User, Order  } from '../types';
import {   fetchUserOrders, fetchUserProfile   } from '../services/api';
import OrderCard from '../components/ui/OrderCard';
import {   LogOut, User as UserIcon, Settings, Heart   } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchUserProfile(), fetchUserOrders()]).then(([userData, ordersData]) => {
      setUser(userData);
      setOrders(ordersData);
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
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-serif italic text-gray-900 uppercase tracking-tighter mb-16 border-b border-gray-200 pb-8">Control Center</h1>

      <div className="flex flex-col lg:flex-row gap-0 editorial-border bg-white">
        {/* Sidebar */}
        <div className="w-full lg:w-72 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="p-8 sticky top-24">
            <div className="flex flex-col items-center border-b border-gray-200 pb-8 mb-8">
              <div className="w-24 h-24 bg-gray-50 editorial-border flex items-center justify-center text-gray-500 mb-6">
                <UserIcon className="w-8 h-8" strokeWidth={1} />
              </div>
              <h2 className="text-xl font-serif italic text-gray-900">{user.name}</h2>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] font-bold text-gray-500 mt-2">{user.email}</p>
            </div>
            
            <nav className="space-y-0 text-xs font-bold uppercase tracking-[0.2em]">
              <a href="#" className="flex items-center px-4 py-4 bg-gray-50 text-orange-500 editorial-border border-b-0 transition-colors">
                <Package className="w-4 h-4 mr-4" /> Operations
              </a>
              <a href="#" className="flex items-center px-4 py-4 text-gray-500 hover:text-gray-700 hover:bg-gray-200 editorial-border border-b-0 transition-colors">
                <Heart className="w-4 h-4 mr-4" /> Saved Index
              </a>
              <a href="#" className="flex items-center px-4 py-4 text-gray-500 hover:text-gray-700 hover:bg-gray-200 editorial-border transition-colors">
                <Settings className="w-4 h-4 mr-4" /> Parameters
              </a>
              <a href="#" className="flex items-center px-4 py-4 text-red-500/70 hover:text-red-500 hover:bg-gray-200 editorial-border border-t-0 transition-colors mt-8">
                <LogOut className="w-4 h-4 mr-4" /> Disconnect
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-8 sm:p-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-8 border-b border-gray-200 pb-4">Logistics Archive</h2>
          
          {orders.length === 0 ? (
            <div className="text-center py-24 editorial-border bg-gray-50 flex flex-col items-center">
              <h3 className="text-2xl font-serif italic text-gray-900 mb-4">No Historical Data</h3>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Operation logs are empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Temporary inline Package component since it was missed in imports
function Package(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}
