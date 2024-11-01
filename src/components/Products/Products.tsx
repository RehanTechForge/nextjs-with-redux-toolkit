// components/Products.jsx
"use client"; // This line ensures the component can be used with client-side interactivity
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useAppSelector } from "@/lib/hooks/hooks";

const Products = () => {
  const products = useAppSelector((store) => store.products);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
