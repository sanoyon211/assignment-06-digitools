import { useState } from 'react';
import ProductCard from './ProductCard';
import CartSection from './CartSection';

const MainSection = ({
  products,
  loading,
  cartItems,
  onAddToCart,
  onRemove,
  onCheckout,
}) => {
  // show active tab
  const [activeTab, setActiveTab] = useState('products');

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
            Premium Digital Tools
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Products and Cart toggle button */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-8 py-2.5 rounded-full font-semibold text-lg transition-all duration-200 border-0 cursor-pointer
                ${activeTab === 'products' ? 'bg-gradient-to-r from-[#3218f2] to-[#8807ea] text-white shadow-lg shadow-violet-200' : 'bg-transparent text-gray-500 hover:text-violet-600'}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('cart')}
              className={`flex items-center gap-2 px-8 py-2.5 rounded-full font-semibold text-lg transition-all duration-200 border-0 cursor-pointer
                ${activeTab === 'cart' ? 'bg-gradient-to-r from-[#3218f2] to-[#8807ea] text-white shadow-lg shadow-violet-200' : 'bg-transparent text-gray-500 hover:text-violet-600'}`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
        </div>

        {/* if product tab is active */}
        {activeTab === 'products' ? (
          loading ? (
            // spinner
            <div className="flex justify-center py-20">
              <div className="size-10 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            // product grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                />
              ))}
            </div>
          )
        ) : (
          // if card tab is active then show cardSection
          <CartSection
            cartItems={cartItems}
            onRemove={onRemove}
            onCheckout={onCheckout}
          />
        )}
      </div>
    </section>
  );
};

export default MainSection;
