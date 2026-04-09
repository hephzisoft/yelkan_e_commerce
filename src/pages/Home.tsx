import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {   fetchProducts   } from '../services/api';
import type {  Product  } from '../types';
import ProductGrid from '../components/ui/ProductGrid';
import ProductCard from '../components/ui/ProductCard';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(products => setFeaturedProducts(products.slice(0, 4)));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 border-b border-gray-200">
        <div className="absolute top-0 left-0 w-full overflow-hidden border-b border-gray-200 py-3 bg-white z-10">
          <div className="whitespace-nowrap animate-marquee flex gap-8 items-center text-orange-500 font-bold uppercase tracking-[0.3em] text-sm">
            <span>Sourced Directly From Farmers</span> <span>•</span>
            <span>100% Premium Protein</span> <span>•</span>
            <span>High Quality Meats & Poultry</span> <span>•</span>
            <span>Sourced Directly From Farmers</span> <span>•</span>
            <span>100% Premium Protein</span> <span>•</span>
            <span>High Quality Meats & Poultry</span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col z-20">
              <div className="clip-reveal">
                <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-black text-gray-900 uppercase tracking-tighter mb-8">
                  Premium<br />
                  <span className="text-gray-500 italic font-serif font-normal">Quality</span><br />
                  Proteins.
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-12 animate-fade-in-up border-l-4 border-orange-500 pl-6">
                Experience the finest selection of hand-picked, farm-fresh proteins sourced directly from local farmers. Uncompromising quality for businesses and homes.
              </p>
              <div className="flex animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Link to="/products" className="px-10 py-5 bg-gray-900 text-gray-50 font-bold uppercase tracking-[0.2em] text-sm hover:bg-orange-500 transition-colors duration-500 flex items-center justify-center">
                  Explore Collection <ArrowRight className="ml-4 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative mt-16 lg:mt-0 clip-reveal z-10" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-[3/4] w-full editorial-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <img 
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bd6300?q=80&w=800&auto=format&fit=crop"
                  alt="Assortment of fresh premium proteins"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="flex flex-col p-10 md:p-12 editorial-border border-b md:border-b md:border-r border-gray-200 bg-white hover:bg-gray-200 transition-colors duration-500">
              <Leaf className="h-10 w-10 text-orange-500 mb-8" strokeWidth={1} />
              <h3 className="text-2xl font-serif italic mb-4 text-gray-900">100% Organic</h3>
              <p className="text-gray-600 leading-relaxed">Naturally grown without harmful chemical intervention, maintaining the true essence of the land.</p>
            </div>
            <div className="flex flex-col p-10 md:p-12 editorial-border border-t-0 md:border-t border-b md:border-b md:border-r border-gray-200 bg-white hover:bg-gray-200 transition-colors duration-500">
              <ShieldCheck className="h-10 w-10 text-orange-500 mb-8" strokeWidth={1} />
              <h3 className="text-2xl font-serif italic mb-4 text-gray-900">Absolute Quality</h3>
              <p className="text-gray-600 leading-relaxed">Meticulous manual selection ensures only the pinnacle of the harvest reaches your kitchen.</p>
            </div>
            <div className="flex flex-col p-10 md:p-12 editorial-border border-t-0 md:border-t border-gray-200 bg-white hover:bg-gray-200 transition-colors duration-500">
              <Truck className="h-10 w-10 text-orange-500 mb-8" strokeWidth={1} />
              <h3 className="text-2xl font-serif italic mb-4 text-gray-900">Swift Logistics</h3>
              <p className="text-gray-600 leading-relaxed">Modern, reliable dispatch direct from our local facilities directly to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16 border-b border-gray-200 pb-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900">Featured Curations</h2>
            <Link to="/products" className="text-gray-600 hover:text-orange-500 uppercase tracking-[0.2em] text-xs font-bold transition-colors flex items-center mb-2">
              View Collection <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <ProductGrid>
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>
      </section>
    </div>
  );
}
