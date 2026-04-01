import { toast } from 'react-toastify';


const CartSection = ({ cartItems, onRemove, onCheckout }) => {
  // calculate total price
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  // remove one item in card section
  const handleRemove = item => {
    onRemove(item.id);
    toast.error(` ${item.name} removed from cart`, { autoClose: 2000 });
  };

  // checkout button clicked function
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warn('Your cart is empty!', { autoClose: 2000 });
      return;
    }

    onCheckout(); // calling handleCheckout from App.jsx;
    toast.success(' Checkout successful! Thank you for your purchase.', {
      autoClose: 3000,
    });
  };

  // Empty card massage
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-7xl mb-6 animate-float">🛒</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">
          Your cart is empty
        </h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Browse our premium tools and add them to your cart to get started.
        </p>
      </div>
    );
  }

  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4  flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
            Your Cart
          </h3>
          <span className="text-sm text-gray-400">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="px-6 py-4 flex items-center gap-4 bg-gray-100 rounded-2xl mx-5 mb-3 transition-colors animate-slide-in"
            >
            
              <div className="p-3 rounded-4xl border border-gray-200 bg-white flex items-center justify-center text-3xl shrink-0">
                <div>{item.icon}</div>
              </div>

          
              <div className="grow">
                <p className="font-semibold text-gray-900 text-sm md:text-lg">
                  {item.name}
                </p>
                <p className="text-violet-600 font-bold text-sm md:text-base">
                  ${item.price}
                </p>
              </div>

              
              <button
                onClick={() => handleRemove(item)}
                className="text-rose-500 hover:text-rose-600 text-sm md:text-lg font-semibold px-3 py-1.5 rounded-lg hover:bg-rose-50 transition-all border-0 bg-transparent cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        
        <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-500 text-sm md:text-lg">Total:</span>
            <span className="text-3xl font-extrabold text-gray-900 font-[family-name:var(--font-display)]">
              ${total}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-4 bg-gradient-to-r from-[#3218f2] to-[#8807ea] hover:from-[#4a2fff] hover:to-[#b20bff] text-white text-sm font-semibold  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-[0.97] rounded-3xl "
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
