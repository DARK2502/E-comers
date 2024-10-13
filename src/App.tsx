import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Product } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header cartItemCount={cartItems.length} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductList addToCart={addToCart} />
      </main>
      <Cart items={cartItems} />
      <Footer />
    </div>
  );
}

export default App;