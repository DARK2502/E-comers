import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fashion Click</h1>
        <div className="flex items-center">
          <ShoppingCart className="mr-2" />
          <span>{cartItemCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;