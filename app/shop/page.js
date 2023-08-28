"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from "@/components/Navbar";
import Image from "next/image";
// import { loadStripe } from "@stripe/stripe-js";

// Use .env variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY
);

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Supabase
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (data) setProducts(data);
      if (error) console.error("Error fetching products:", error);
    };

    fetchProducts();
    console.log(products);
  }, []);

  const handlePurchase = async (product) => {
    // Use Stripe SDK to handle payment
    // const stripe = await loadStripe("YOUR_STRIPE_PUBLIC_KEY");
    // ... Implement Stripe checkout logic here
  };
  console.log(products);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-6 lg:p-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <Image
              src={product.img}
              width={500}
              height={500}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg md:text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600 text-sm md:text-base">
              ${product.price}
            </p>
            <button
              onClick={() => handlePurchase(product)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
