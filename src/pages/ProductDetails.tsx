import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import type { Product } from '../types';
import { Star, Truck, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchProductById(id).then(data => {
        setProduct(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/products" className="mt-4 inline-block text-green-600 hover:text-green-700">Return to products</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link to="/products" className="inline-flex items-center text-stone-400 hover:text-orange-500 mb-12 transition-colors uppercase tracking-[0.2em] text-[0.6rem] font-bold">
        <ArrowLeft className="w-4 h-4 mr-3" /> Return to Collection
      </Link>

      <div className="editorial-border bg-stone-900 flex flex-col md:flex-row relative">
        {/* Image Section */}
        <div className="md:w-1/2 md:border-r border-stone-800 bg-stone-950 flex items-center justify-center p-8 lg:p-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto object-cover editorial-border z-20 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-stone-900">
          <div className="mb-6 text-[0.6rem] font-bold text-orange-500 uppercase tracking-[0.3em]">
            {product.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-serif italic text-stone-100 mb-6 leading-[0.9]">{product.name}</h1>
          
          <div className="flex items-center mb-8 border-y border-stone-800 py-4">
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-stone-700'}`} />
              ))}
            </div>
            <span className="ml-4 text-stone-400 text-xs uppercase tracking-[0.1em] font-bold">{product.rating} Evaluation</span>
          </div>

          <p className="text-stone-400 text-sm uppercase tracking-[0.05em] mb-12 leading-loose">
            {product.description}
          </p>

          <div className="flex items-center text-stone-500 mb-12 text-xs uppercase tracking-[0.1em] font-bold">
            <Truck className="w-5 h-5 mr-4 text-orange-500" />
            <span>Eligible for priority logistics</span>
          </div>

          <div className="mt-auto border-t border-stone-800 pt-8">
            <div className="text-5xl md:text-6xl font-black text-stone-100 mb-10 font-serif">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-0 editorial-border p-2 bg-stone-950">
              <div className="flex items-center justify-between px-6 bg-stone-900 w-full sm:w-40 h-16 editorial-border border-r-0 border-transparent">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-stone-500 hover:text-orange-500 text-2xl font-light"
                >
                  -
                </button>
                <span className="font-bold text-lg text-stone-100">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-stone-500 hover:text-orange-500 text-2xl font-light"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-stone-100 hover:bg-orange-500 text-stone-950 h-16 font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center transition-all duration-500 cursor-pointer editorial-border border-l-0 border-transparent"
              >
                Assemble Order <ArrowRight className="ml-4 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
