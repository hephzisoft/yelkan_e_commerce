import { Package } from 'lucide-react';
import type {  Order  } from '../../types';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="bg-gray-50 p-6 editorial-border hover:bg-white transition-colors duration-500 mb-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-white p-4 border border-gray-200 hidden sm:block text-gray-500">
            <Package className="w-8 h-8" strokeWidth={1} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg uppercase tracking-widest font-serif italic">Log #{order.id}</h4>
            <p className="text-gray-500 text-[0.6rem] uppercase tracking-[0.2em] mt-2 block">{order.date} • {order.items.length} units</p>
          </div>
        </div>
        
        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 border-t sm:border-t-0 border-gray-200 pt-4 sm:pt-0">
          <span className="font-serif italic font-black text-xl text-gray-900">${order.total.toFixed(2)}</span>
          <span className={`px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] editorial-border bg-white
            ${order.status === 'Delivered' ? 'text-green-500 border-green-500/20' : ''}
            ${order.status === 'Shipped' ? 'text-blue-500 border-blue-500/20' : ''}
            ${order.status === 'Processing' ? 'text-orange-500 border-orange-500/20' : ''}
            ${order.status === 'Pending' ? 'text-gray-600 border-gray-700' : ''}
          `}>
            {order.status}
          </span>
        </div>
      </div>
    </div>
  );
}
