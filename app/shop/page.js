"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (data) setProducts(data);
      if (error) console.error("Error fetching products:", error);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-4 p-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <Image
              src={product.img}
              width={500}
              height={500}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Icon */}
      <div
        onClick={toggleCartModal}
        className="fixed bottom-4 right-4 cursor-pointer bg-gray-800 text-white p-4 rounded-full"
      >
        Cart ({cart.length})
      </div>

      {/* Cart Modal */}
      {isCartModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-8 rounded w-2/5 h-4/5 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4 mb-4"
              >
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt={item.name}
                  className="object-cover mr-4"
                />
                <div className="flex-1">
                  <div>{item.name}</div>
                  <div>${item.price}</div>
                </div>
              </div>
            ))}
            <div className="mt-4 text-right font-bold">
              Total: $
              {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCart([])}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Clear Cart
              </button>
              <button
                onClick={toggleCartModal}
                className="bg-gray-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
