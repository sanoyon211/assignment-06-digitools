import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';


import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Ready from './components/Ready';
import Stats from './components/Stats';
import Steps from './components/Steps';
import MainSection from './components/MainSection';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/products.json');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  const handleAddToCart = product => {
    setCartItems(prev => {
      const exists = prev.some(item => item.id === product.id);

      if (exists) {
        return prev;
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemove = productId => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />
      <MainSection 
        products={products}
        loading={loading}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
      <Steps />
      <Pricing />
      <Ready />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
