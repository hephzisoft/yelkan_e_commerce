import { Package } from 'lucide-react';
import type {  Order  } from '../../types';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="bg-stone-950 p-6 editorial-border hover:bg-stone-900 transition-colors duration-500 mb-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-stone-900 p-4 border border-stone-800 hidden sm:block text-stone-500">
            <Package className="w-8 h-8" strokeWidth={1} />
          </div>
          <div>
            <h4 className="font-bold text-stone-100 text-lg uppercase tracking-widest font-serif italic">Log #{order.id}</h4>
            <p className="text-stone-500 text-[0.6rem] uppercase tracking-[0.2em] mt-2 block">{order.date} • {order.items.length} units</p>
          </div>
        </div>
        
        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 border-t sm:border-t-0 border-stone-800 pt-4 sm:pt-0">
          <span className="font-serif italic font-black text-xl text-stone-100">${order.total.toFixed(2)}</span>
          <span className={`px-3 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] editorial-border bg-stone-900
            ${order.status === 'Delivered' ? 'text-green-500 border-green-500/20' : ''}
            ${order.status === 'Shipped' ? 'text-blue-500 border-blue-500/20' : ''}
            ${order.status === 'Processing' ? 'text-orange-500 border-orange-500/20' : ''}
            ${order.status === 'Pending' ? 'text-stone-400 border-stone-700' : ''}
          `}>
            {order.status}
          </span>
        </div>
      </div>
    </div>
  );
}
