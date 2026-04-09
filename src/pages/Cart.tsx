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
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-serif italic text-stone-100 uppercase tracking-tighter mb-16 flex items-center border-b border-stone-800 pb-8">
        <ShoppingBag className="w-12 h-12 mr-6 text-orange-500 hidden md:block" /> Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-stone-900 p-16 text-center editorial-border">
          <ShoppingBag className="mx-auto h-20 w-20 text-stone-800 mb-8" />
          <h2 className="text-3xl font-serif italic text-stone-100 mb-4">Cart Is Empty</h2>
          <p className="text-stone-500 mb-12 text-xs uppercase tracking-[0.2em] font-bold">Awaiting your selections.</p>
          <Link to="/products" className="inline-flex justify-center px-10 py-5 bg-stone-100 text-stone-950 font-bold uppercase tracking-[0.2em] text-sm hover:bg-orange-500 transition-colors duration-500">
            Commence Selection
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-0 editorial-border bg-stone-900">
          {/* Cart Items */}
          <div className="flex-grow border-b lg:border-b-0 lg:border-r border-stone-800">
            {cartItems.map(item => (
              <CartItem 
                key={item.product.id} 
                item={item} 
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemove}
              />
            ))}
            <div className="p-8 border-t border-stone-800">
              <Link to="/products" className="inline-flex items-center text-stone-400 hover:text-orange-500 text-xs font-bold uppercase tracking-[0.2em] transition-colors">
                <ArrowLeft className="w-4 h-4 mr-3" /> Return to Collection
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 flex-shrink-0 bg-stone-950">
            <div className="p-8 sticky top-24">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-8 border-b border-stone-800 pb-4">Order Summary</h2>
              
              <div className="space-y-6 text-stone-500 border-b border-stone-800 pb-8 mb-8 font-bold uppercase tracking-widest text-xs">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-stone-100">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-stone-100">
                    {shipping === 0 ? <span className="text-orange-500">Comped</span> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-black text-stone-100 mb-12 font-serif italic">
                <span className="not-italic sans">Sum</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="w-full flex justify-center py-5 px-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-950 bg-stone-100 hover:bg-orange-500 transition-colors duration-500">
                Proceed to Fulfillment
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
