import { useState } from 'react';
import { toast } from 'react-toastify';
import { HiCheck } from 'react-icons/hi';

// store teg class name
const tagClass = {
  popular: 'tag-popular',
  new: 'tag-new',
  'best-seller': 'tag-best-seller',
};

// showing this type of text in the side of price
const periodLabel = {
  monthly: '/mo',
  yearly: '/yr',
  'one-time': ' one-time',
};

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  
  const [added, setAdded] = useState(false);

  // check product 
  const isInCart = cartItems.some(item => item.id === product.id);


  const handleBuyNow = () => {
    if (isInCart) {
      toast.info(`${product.name} is already in your cart!`, {
        autoClose: 1500,
      });
      return;
    }

    onAddToCart(product); 
    setAdded(true); 
    toast.success(` ${product.name} added to cart!`, { autoClose: 1500 });

    
    setTimeout(() => setAdded(false), 1500);

  };

  return (
    <div className="relative flex flex-col gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-violet-200 hover:shadow-xl hover:shadow-violet-50 hover:-translate-y-1 transition-all duration-300">
      
      <div className="absolute top-4 right-4">
        <span
          className={`${tagClass[product.tagType] || 'tag-popular'} text-base font-semibold px-3 py-1 rounded-full`}
        >
          {product.tag}
        </span>
      </div>

      
      <div className="size-14 rounded-2xl bg-violet-50 flex items-center justify-center text-4xl shrink-0">
        {product.icon}
      </div>

      
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 font-[family-name:var(--font-display)]">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          {product.description}
        </p>
      </div>

      
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-gray-900 font-[family-name:var(--font-display)]">
          ${product.price}
        </span>
        <span className="text-gray-400 text-sm md:text-base">
          {periodLabel[product.period]}
        </span>
      </div>

      
      <ul className="flex flex-col gap-2 grow">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm md:text-base text-gray-600">
            <HiCheck className="w-5 h-5 mt-0.5 shrink-0 text-[#4f39f6]" />
            {feature}
          </li>
        ))}
      </ul>

      
      <button
        onClick={handleBuyNow}
        className={`w-full py-3 rounded-3xl font-semibold text-sm md:text-base transition-all duration-200 cursor-pointer border-0
          ${
            isInCart
              ? 'bg-emerald-50 text-emerald-600'
              : added
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-[#3218f2] to-[#8807ea] hover:from-[#4a2fff] hover:to-[#b20bff] text-white text-sm md:text-base font-semibold  transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-[0.97]'
          }`}
      >
        {isInCart ? '✓ Added to Cart' : added ? '✓ Added!' : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;
