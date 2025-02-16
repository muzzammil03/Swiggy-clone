import React from "react";
import { X } from "lucide-react";

function SignIn({ isOpen, setIsOpen }) {
  return (
    <div>
      {/* Black Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999999] flex justify-end
        transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      >
        {/* Sidebar Modal */}
        <div
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          className={`w-full sm:w-96 h-full bg-white p-6 relative transform
          transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <X size={24} />
          </button>

          {/* Login Form */}
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-sm text-gray-500 mb-4">
            or{" "}
            <span className="text-orange-500 cursor-pointer">
              create an account
            </span>
          </p>

          <input
            type="text"
            placeholder="Phone number"
            className="w-full p-3 border rounded-md mb-4"
          />

          <button className="w-full bg-orange-500 text-white py-3 rounded-md font-bold">
            LOGIN
          </button>

          <p className="text-xs text-gray-500 mt-2">
            By clicking on Login, I accept the{" "}
            <span className="text-blue-500">
              Terms & Conditions & Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
