import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-stone-800">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="mb-8 md:mb-0">
            <Link to="/">
              <img src="/YELKAN.png" alt="Yelkan Foods Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="mt-8 text-stone-500 text-xs uppercase tracking-[0.1em] leading-relaxed">
              Bringing authentic and organic food products directly to your doorstep. Uncompromising quality.
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-stone-500 hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[0.6rem] font-bold">Facebook</a>
              <a href="#" className="text-stone-500 hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[0.6rem] font-bold">Twitter</a>
              <a href="#" className="text-stone-500 hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[0.6rem] font-bold">Instagram</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-stone-100 mb-6">Shop</h3>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-[0.1em] text-stone-500">
              <li><Link to="/products" className="hover:text-orange-500 transition-colors">All Products</Link></li>
              <li><Link to="/products?category=flour" className="hover:text-orange-500 transition-colors">Flour & Grains</Link></li>
              <li><Link to="/products?category=oils" className="hover:text-orange-500 transition-colors">Oils</Link></li>
              <li><Link to="/products?category=seafood" className="hover:text-orange-500 transition-colors">Seafood</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-stone-100 mb-6">Account</h3>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-[0.1em] text-stone-500">
              <li><Link to="/dashboard" className="hover:text-orange-500 transition-colors">My Profile</Link></li>
              <li><Link to="/dashboard" className="hover:text-orange-500 transition-colors">Orders</Link></li>
              <li><Link to="/referrals" className="hover:text-orange-500 transition-colors">Refer & Earn</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-stone-100 mb-6">Contact Us</h3>
            <ul className="space-y-4 text-xs font-semibold uppercase tracking-[0.1em] text-stone-500">
              <li className="flex items-center"><Mail className="h-4 w-4 mr-3 text-stone-600" /> support@yelkanfoods.com</li>
              <li>123 Market Street, Food City, FC 90210</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Yelkan Foods. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
