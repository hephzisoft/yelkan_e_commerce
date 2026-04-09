import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative bg-white editorial-border transition-all duration-500 hover:bg-gray-50 flex flex-col h-full cursor-pointer hover:-translate-y-2">
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden flex-shrink-0 border-b border-gray-200">
        <div className="aspect-w-4 aspect-h-3 w-full bg-gray-50 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-4 right-4 bg-brand-accent px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] font-bold text-gray-50 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {product.category}
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-xl font-serif italic text-gray-900 group-hover:text-brand-accent transition-colors line-clamp-1">{product.name}</h3>
        </Link>
        <p className="mt-3 text-xs uppercase tracking-[0.1em] text-gray-500 line-clamp-2 mb-6">{product.description}</p>
        
        <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-4">
          <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
            className="text-gray-600 hover:text-brand-accent transition-colors flex items-center justify-center cursor-pointer group/btn"
            aria-label="Add to cart"
          >
            <span className="uppercase tracking-[0.2em] text-[0.6rem] font-bold mr-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300">Add</span>
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
