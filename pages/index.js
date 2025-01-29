import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

const Header = () => (
  <header className="bg-white shadow-sm">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="/" className="font-bold text-xl">
        Print Shop
      </a>
      
      <div className="flex items-center space-x-4">
        <a href="/products" className="text-gray-600 hover:text-gray-900">
          Products
        </a>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div>
    </nav>
  </header>
);

const FeaturedProducts = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {[1, 2, 3].map((item) => (
      <div key={item} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        <div className="bg-gray-200 h-48 flex items-center justify-center">
          <span className="text-gray-500">Product Image</span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2">Featured Product {item}</h3>
          <p className="text-gray-600 mb-4">Description of the product goes here</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Print Shop</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our unique collection of custom-designed t-shirts and mugs.
            Each piece is printed with care when you order.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <FeaturedProducts />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">© 2024 Print Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;