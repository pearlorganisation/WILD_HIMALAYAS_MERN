import React, { useState } from "react";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  // State to manage the items in the cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "iMac", quantity: 1, price: 2000 },
    { id: 2, name: "iPhone", quantity: 1, price: 1000 },
  ]);

  // Function to handle increment
  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to handle decrement
  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to handle item removal
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total items, total cost, and GST

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalCost = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const gst = totalCost * 0.18; // 18% GST
  const totalWithGst = totalCost + gst;

  return (
    <>
      {cartItems.length >= 1 ? (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Shopping Cart
            </h2>

            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          <img
                            className="h-20 w-20 dark:hidden"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                            alt={item.name}
                          />

                          <img
                            className="hidden h-20 w-20 dark:block"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                            alt={item.name}
                          />
                        </a>

                        <div className="md:order-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.name}
                          </h4>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            ${item.price}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Quantity: {item.quantity}
                          </p>
                        </div>

                        <label
                          htmlFor={`counter-input-${item.id}`}
                          className="sr-only"
                        >
                          Choose quantity:
                        </label>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => decrementQuantity(item.id)}
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              id={`counter-input-${item.id}`}
                              value={item.quantity}
                              readOnly
                              className="mx-2 w-8 text-center border-none bg-transparent"
                            />
                            <button
                              type="button"
                              onClick={() => incrementQuantity(item.id)}
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="mt-4 md:mt-0 md:order-4 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping Button */}
              </div>

              <div className="lg:w-1/3 xl:w-1/4">
                <div className="mt-6 space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Order Summary
                  </h3>

                  <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                    <p>Total Items:</p>
                    <p>{totalItems}</p>
                  </div>

                  <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                    <p>Total Cost:</p>
                    <p>${totalCost.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                    <p>GST (18%):</p>
                    <p>${gst.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between text-sm font-medium text-gray-900 dark:text-white">
                    <p>Total (Including GST):</p>
                    <p>${totalWithGst.toFixed(2)}</p>
                  </div>

                  <div className="mt-4 text-center">
                    <a
                      href="#"
                      className="inline-block rounded-md  px-6 py-2 text-sm font-medium text-white bg-black shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2"
                    >
                      Continue Shopping
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
