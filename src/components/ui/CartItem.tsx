import { Trash2 } from 'lucide-react';
import { type CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const { product, quantity } = item;

  return (
    <div className="flex items-center p-8 bg-stone-900 border-b border-stone-800 last:border-0 hover:bg-stone-950 transition-colors duration-300">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-24 h-24 sm:w-32 sm:h-32 object-cover editorial-border grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0"
      />
      
      <div className="ml-8 flex-grow flex flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h3 className="text-xl font-serif italic text-stone-100 line-clamp-1">{product.name}</h3>
            <p className="text-stone-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">{product.category}</p>
          </div>
          <p className="text-xl font-black font-serif text-stone-100">${product.price.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex items-center editorial-border bg-stone-950 h-10 w-24 justify-between px-2">
            <button 
              onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
              className="text-stone-500 hover:text-orange-500 font-light text-lg transition-colors px-1"
            >
              -
            </button>
            <span className="text-stone-100 font-bold">{quantity}</span>
            <button 
              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
              className="text-stone-500 hover:text-orange-500 font-light text-lg transition-colors px-1"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={() => onRemove(product.id)}
            className="text-stone-600 hover:text-red-500 transition-colors p-2"
            aria-label="Remove item"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
