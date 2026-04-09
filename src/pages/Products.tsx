import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {   fetchProducts   } from '../services/api';
import type {  Product  } from '../types';
import ProductGrid from '../components/ui/ProductGrid';
import ProductCard from '../components/ui/ProductCard';

const CATEGORIES = ['All', 'Poultry', 'Meat', 'Eggs'];

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const selectedCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleCategorySelect = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-black font-serif italic text-gray-900 uppercase tracking-tighter">Collection</h1>
          <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-gray-500">Premium Protein Provisions</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-0 editorial-border">
        {/* Sidebar / Filters */}
        <div className="w-full md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-200 bg-white">
          <div className="p-8 sticky top-24">
            <h3 className="text-[0.6rem] uppercase tracking-[0.3em] font-bold text-gray-600 mb-8 border-b border-gray-200 pb-4">Classification</h3>
            <ul className="space-y-0">
              {CATEGORIES.map(category => (
                <li key={category} className="border-b border-gray-200/50 last:border-0">
                  <button
                    onClick={() => handleCategorySelect(category)}
                    className={`block w-full text-left py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      selectedCategory.toLowerCase() === category.toLowerCase()
                        ? 'text-brand-accent pl-4 bg-gray-50/50'
                        : 'text-gray-500 hover:text-gray-700 hover:pl-2'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow p-0">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {[1, 2, 3, 4, 5, 6].map(n => (
                <div key={n} className="bg-white p-8 h-96 border-b border-r border-gray-200 flex flex-col justify-between animate-pulse">
                  <div className="bg-gray-50 h-48 w-full border border-gray-200 mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200/10 mix-blend-overlay"></div>
                  </div>
                  <div className="bg-gray-200 h-6 w-3/4 mb-3 rounded-none"></div>
                  <div className="bg-gray-200 h-4 w-1/2 mb-6 rounded-none"></div>
                  <div className="mt-auto flex justify-between items-center border-t border-gray-200 pt-4">
                    <div className="bg-gray-200 h-6 w-1/3 rounded-none"></div>
                    <div className="bg-gray-200 h-8 w-12 rounded-none"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-32 bg-white editorial-border border-0 border-l border-gray-200 h-full flex flex-col items-center justify-center">
                  <h3 className="text-2xl font-serif italic text-gray-900 mb-2">Inventory Depleted</h3>
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Refining search parameters recommended.</p>
                </div>
              ) : (
                <ProductGrid>
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </ProductGrid>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
