import React from 'react'

const Cart = () => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden">
    <div className="mt-2 bg-white shadow-md rounded-lg p-6 max-w-md w-full text-center">
      <div className="mb-4">
        <img
          src="https://cdn.dineorder.com/public/asset/img/cook.png" // Replace with the appropriate image URL
          alt="Empty cart illustration"
          className="mx-auto w-full max-w-xs h-auto object-contain"
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h1>
      <p className="text-gray-600 mb-4">
        You can go to the home page to view more restaurants.
      </p>
      <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
        See Restaurants Near You
      </button>
    </div>
  </div>
  


  )
}

export default Cart