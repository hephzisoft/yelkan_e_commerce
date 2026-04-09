import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/YELKAN.png" alt="Yelkan Foods Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
            </Link>
            <div className="hidden md:ml-12 md:flex md:space-x-8">
              <Link to="/products" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Shop
              </Link>
              <Link to="/referrals" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Refer & Earn
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="text-gray-500 hover:text-green-600 transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-500 hover:text-green-600 relative transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-green-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-green-600 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">Shop</Link>
            <Link to="/referrals" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">Refer & Earn</Link>
            <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">Account</Link>
            <Link to="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">Cart ({cartCount})</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
