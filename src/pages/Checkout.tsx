import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function Checkout() {
  const [step, setStep] = useState<1 | 2>(1);
  const navigate = useNavigate();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    // Simulate API call and redirect
    setTimeout(() => {
      navigate('/dashboard');
    }, 3000);
  };

  if (step === 2) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center border-b border-stone-800 pb-16">
        <CheckCircle2 className="w-24 h-24 text-orange-500 mx-auto mb-12" strokeWidth={1} />
        <h1 className="text-6xl font-black font-serif italic text-stone-100 mb-8 uppercase tracking-tighter">Order Initiated</h1>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500 mb-8">Authorization confirmed. ID: ORD-1029</p>
        <p className="text-stone-600 mb-12 text-xs uppercase tracking-[0.2em]">Rerouting to control center...</p>
        <div className="animate-pulse flex space-x-4 justify-center">
          <div className="h-1 w-12 bg-stone-700"></div>
          <div className="h-1 w-12 bg-stone-700 animation-delay-200"></div>
          <div className="h-1 w-12 bg-orange-500 animation-delay-400"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-serif italic text-stone-100 uppercase tracking-tighter mb-16 border-b border-stone-800 pb-8">Fulfillment Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-0 editorial-border bg-stone-900">
        {/* Checkout Form */}
        <div className="flex-grow border-b lg:border-b-0 lg:border-r border-stone-800">
          <form onSubmit={handlePlaceOrder} className="p-8 sm:p-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-8 border-b border-stone-800 pb-4">Logistics</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div>
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">First Name</label>
                <input required type="text" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" defaultValue="John" />
              </div>
              <div>
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">Last Name</label>
                <input required type="text" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" defaultValue="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">Email Identity</label>
                <input required type="email" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" defaultValue="john.doe@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">Routing Address</label>
                <input required type="text" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" defaultValue="123 Main St" />
              </div>
              <div>
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">Municipality</label>
                <input required type="text" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" defaultValue="New York" />
              </div>
              <div>
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">Postal Code</label>
                <input required type="text" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" defaultValue="10001" />
              </div>
            </div>

            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-8 border-b border-stone-800 pb-4">Authorization</h2>
            
            <div className="space-y-4 mb-12">
              <div className="flex items-center p-4 editorial-border bg-stone-950">
                <input id="credit-card" name="payment-method" type="radio" defaultChecked className="h-4 w-4 text-orange-500 focus:ring-orange-500 bg-stone-900 border-stone-700" />
                <label htmlFor="credit-card" className="ml-4 block text-xs font-bold uppercase tracking-[0.1em] text-stone-300">
                  Secure Data Transfer
                </label>
              </div>
              <div className="flex items-center p-4 editorial-border bg-stone-950">
                <input id="paypal" name="payment-method" type="radio" className="h-4 w-4 text-orange-500 focus:ring-orange-500 bg-stone-900 border-stone-700" />
                <label htmlFor="paypal" className="ml-4 block text-xs font-bold uppercase tracking-[0.1em] text-stone-300">
                  External Gateway
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="sm:col-span-2">
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">Sequence</label>
                <input required type="text" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" placeholder="0000 0000 0000 0000" />
              </div>
              <div>
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">Cycle</label>
                <input required type="text" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" placeholder="MM/YY" />
              </div>
              <div>
                <label className="block text-[0.6rem] font-bold uppercase tracking-[0.2em] text-stone-500 mb-2">Verification CVC</label>
                <input required type="text" className="w-full px-4 py-4 bg-stone-950 editorial-border text-stone-200 focus:border-orange-500 focus:outline-none transition-colors" placeholder="123" />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 flex-shrink-0 bg-stone-950">
          <div className="p-8 sticky top-24">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-8 border-b border-stone-800 pb-4">Manifest</h2>
            
            <div className="flex justify-between items-center mb-6 font-bold uppercase tracking-[0.1em] text-xs">
              <span className="text-stone-500">Inventory Units (2)</span>
              <span className="text-stone-100">$64.99</span>
            </div>
            
            <div className="text-stone-500 border-b border-stone-800 pb-8 mb-8 font-bold uppercase tracking-[0.1em] text-xs">
              <div className="flex justify-between">
                <span>Routing Fee</span>
                <span className="text-orange-500">Comped</span>
              </div>
            </div>

            <div className="flex justify-between text-2xl font-black text-stone-100 mb-12 font-serif italic">
              <span className="not-italic sans">Sum</span>
              <span>$64.99</span>
            </div>

            <button 
              onClick={handlePlaceOrder}
              className="w-full flex justify-center py-5 px-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-950 bg-stone-100 hover:bg-orange-500 transition-colors duration-500"
            >
              Finalize Sequence
            </button>

            <div className="mt-8 text-center text-xs font-bold uppercase tracking-[0.2em]">
              <Link to="/cart" className="text-stone-500 hover:text-orange-500 transition-colors">Abort & Return</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
