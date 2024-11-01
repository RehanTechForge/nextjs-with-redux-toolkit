"use client";
import { updateCartQuantity } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import Image from "next/image";
import React from "react";

const CartPage = () => {
  const products = useAppSelector((store) => store.cart.cartItem);
  const dispatch = useAppDispatch();

  const totalItems = products.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
      {products.length > 0 ? (
        <>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b py-6 last:border-b-0"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={80}
                  width={80}
                  className="w-20 h-20 rounded-md mr-6 object-cover"
                />
                <div className="flex-grow">
                  <h2 className="font-semibold text-gray-700">{item.name}</h2>
                  <p className="text-gray-500">${item.price} each</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      dispatch(
                        updateCartQuantity({
                          id: item.id,
                          newQuantity: item.quantity - 1,
                        })
                      )
                    }
                    className="px-2 py-1 text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="px-4 text-gray-700 font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateCartQuantity({
                          id: item.id,
                          newQuantity: item.quantity + 1,
                        })
                      )
                    }
                    className="px-2 py-1 text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                </div>
                <p className="w-20 text-right font-semibold text-gray-700">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between text-gray-600 mb-3">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg text-gray-800 mb-4">
              <span>Total Price</span>
              <span>${totalPrice}</span>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">
              Cash on Delivery
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-7xl text-black text-center font-bold">
          Cart Empty
        </h1>
      )}
    </div>
  );
};

export default CartPage;
