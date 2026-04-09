import { Link } from 'react-router-dom';
import CartItem from '../components/ui/CartItem';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { items: cartItems, updateQuantity: handleUpdateQuantity, removeFromCart: handleRemove } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-serif italic text-gray-900 uppercase tracking-tighter mb-16 flex items-center border-b border-gray-200 pb-8">
        <ShoppingBag className="w-12 h-12 mr-6 text-brand-accent hidden md:block" /> Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white p-16 text-center editorial-border">
          <ShoppingBag className="mx-auto h-20 w-20 text-gray-200 mb-8" />
          <h2 className="text-3xl font-serif italic text-gray-900 mb-4">Cart Is Empty</h2>
          <p className="text-gray-500 mb-12 text-xs uppercase tracking-[0.2em] font-bold">Awaiting your selections.</p>
          <Link to="/products" className="inline-flex justify-center px-10 py-5 bg-gray-900 text-gray-50 font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-accent transition-colors duration-500">
            Commence Selection
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-0 editorial-border bg-white">
          {/* Cart Items */}
          <div className="flex-grow border-b lg:border-b-0 lg:border-r border-gray-200">
            {cartItems.map(item => (
              <CartItem 
                key={item.product.id} 
                item={item} 
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}
            <div className="p-8 border-t border-gray-200">
              <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-brand-accent text-xs font-bold uppercase tracking-[0.2em] transition-colors">
                <ArrowLeft className="w-4 h-4 mr-3" /> Return to Collection
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 flex-shrink-0 bg-gray-50">
            <div className="p-8 sticky top-24">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-8 border-b border-gray-200 pb-4">Order Summary</h2>
              
              <div className="space-y-6 text-gray-500 border-b border-gray-200 pb-8 mb-8 font-bold uppercase tracking-widest text-xs">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-gray-900">
                    {shipping === 0 ? <span className="text-brand-accent">Comped</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-black text-gray-900 mb-12 font-serif italic">
                <span className="not-italic sans">Sum</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="w-full flex justify-center py-5 px-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-50 bg-gray-900 hover:bg-brand-accent transition-colors duration-500">
                Proceed to Fulfillment
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
