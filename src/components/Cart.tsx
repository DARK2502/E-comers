import React from 'react';
import { Product } from '../types';

interface CartProps {
  items: Product[];
}

const Cart: React.FC<CartProps> = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed bottom-0 right-0 bg-white p-4 shadow-lg rounded-tl-lg">
      <h2 className="text-lg font-semibold mb-2">Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="mb-1">
                {item.name} - S/ {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Total: S/ {total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;