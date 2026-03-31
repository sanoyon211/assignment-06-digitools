import { useState } from 'react';

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-1">
            {/* Logo Image — uncomment করো যখন logo image যোগ করবে */}
            {/*
              <img src="/images/logo.png" alt="DigiTools Logo" className="h-8 w-auto" />
            */}
            <span className="text-2xl font-extrabold font-[family-name:var(--font-display)]">
              <span className="text-violet-600">Digi</span>
              <span className="text-gray-900">Tools</span>
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'].map(
              item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-500 hover:text-violet-600 transition-colors"
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
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 19a1 1 0 100 2 1 1 0 000-2zm-10 0a1 1 0 100 2 1 1 0 000-2z"
                  />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-violet-600 text-white text-[11px] font-bold rounded-full size-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <button className="hidden md:block text-sm font-medium text-gray-500 hover:text-violet-600 px-3 py-2 rounded-lg transition-colors">
              Login
            </button>

            <button className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-200">
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
