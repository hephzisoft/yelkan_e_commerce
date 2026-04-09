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
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-main"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <Link to="/products" className="mt-4 inline-block text-brand-main hover:text-brand-main-light">Return to products</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-brand-accent mb-12 transition-colors uppercase tracking-[0.2em] text-[0.6rem] font-bold">
        <ArrowLeft className="w-4 h-4 mr-3" /> Return to Collection
      </Link>

      <div className="editorial-border bg-white flex flex-col md:flex-row relative">
        {/* Image Section */}
        <div className="md:w-1/2 md:border-r border-gray-200 bg-gray-50 flex items-center justify-center p-8 lg:p-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-auto object-cover editorial-border z-20 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 lg:p-16 flex flex-col justify-center bg-white">
          <div className="mb-6 text-[0.6rem] font-bold text-brand-accent uppercase tracking-[0.3em]">
            {product.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-serif italic text-gray-900 mb-6 leading-[0.9]">{product.name}</h1>
          
          <div className="flex items-center mb-8 border-y border-gray-200 py-4">
            <div className="flex text-brand-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-700'}`} />
              ))}
            </div>
            <span className="ml-4 text-gray-600 text-xs uppercase tracking-[0.1em] font-bold">{product.rating} Evaluation</span>
          </div>

          <p className="text-gray-600 text-sm uppercase tracking-[0.05em] mb-12 leading-loose">
            {product.description}
          </p>

          <div className="flex items-center text-gray-500 mb-12 text-xs uppercase tracking-[0.1em] font-bold">
            <Truck className="w-5 h-5 mr-4 text-brand-accent" />
            <span>Eligible for priority logistics</span>
          </div>

          <div className="mt-auto border-t border-gray-200 pt-8">
            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-10 font-serif">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-0 editorial-border p-2 bg-gray-50">
              <div className="flex items-center justify-between px-6 bg-white w-full sm:w-40 h-16 editorial-border border-r-0 border-transparent">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-500 hover:text-brand-accent text-2xl font-light"
                >
                  -
                </button>
                <span className="font-bold text-lg text-gray-900">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-500 hover:text-brand-accent text-2xl font-light"
                >
                  +
                </button>
              </div>
              
              <button 
                onClick={() => addToCart(product, quantity)}
                className="flex-1 bg-gray-900 hover:bg-brand-accent text-gray-50 h-16 font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center transition-all duration-500 cursor-pointer editorial-border border-l-0 border-transparent"
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
