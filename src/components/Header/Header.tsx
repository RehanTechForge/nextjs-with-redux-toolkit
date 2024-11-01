"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useAppSelector } from "@/lib/hooks/hooks";
import Link from "next/link";

const Header = () => {
  const cartItems = useAppSelector((store) => store.cart.cartItem);
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href={"/"}>ShopEase</Link>
      </h1>
      <div className="flex items-center">
        <Link href={"/cart"}>
          <span className="relative">
            <ShoppingCart className="w-6 h-6" />
            {/* Badge for item count */}
            <span className="absolute top-[-.6rem] right-[-.4rem] bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
