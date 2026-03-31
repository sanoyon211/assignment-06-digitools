import { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-[#3218f2] to-[#8807ea] bg-clip-text text-transparent">
              Digitools
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(
              item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-700 hover:text-violet-600 transition-colors"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <div className="relative">
              <button className="p-2 rounded-xl text-gray-500 hover:text-violet-600 hover:bg-violet-50 transition-all">
                <CiShoppingCart className="text-3xl text-black" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-[11px] font-bold rounded-full size-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <button className="hidden md:block text-lg font-medium text-gray-800 hover:text-violet-600 px-3 py-2 rounded-lg transition-colors">
              Login
            </button>

            <button
              className="bg-gradient-to-r from-[#3218f2] to-[#8807ea]
  hover:from-[#4a2fff] hover:to-[#b20bff]
  text-white text-sm font-semibold px-5 py-2.5 rounded-xl
  transition-all duration-300 ease-in-out
  hover:shadow-sm hover:shadow-purple-400/20
  hover:scale-[1.01] active:scale-[0.97]"
            >
              Get Started
            </button>

            <button
              className="md:hidden text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-slide-in">
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(
              item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2.5 text-sm font-medium text-gray-500 hover:text-violet-600"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
            <button className="block py-2.5 text-sm font-medium text-gray-500">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
