// components/ProductCard.jsx
"use client"; // This line ensures the component can be used with client-side interactivity

import React from "react";
import Image from "next/image";
import { Product } from "@/lib/types";
import { addToCart } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks/hooks";

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-xl font-bold text-green-600">
          ${product.price.toFixed(2)}
        </p>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
