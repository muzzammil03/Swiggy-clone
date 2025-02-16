import React, { useState } from "react";
import { RxCaretDown,RxCaretUp } from "react-icons/rx";

const FoodDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#434343eb]">
        Discover Delicious Food Delights Online Near You
      </h2>

      <p className={`text-[#535354eb] ${isExpanded ? "" : "line-clamp-3"}`}>
        Craving something delicious? Discover a world of culinary delights
        right at your fingertips with food delivery near me! Whether you're in
        the mood for a hearty burger, fresh sushi, or a comforting bowl of
        pasta, there's no shortage of options to satisfy your cravings. The
        convenience of online food delivery near me allows you to explore
        various restaurants and cuisines without leaving the comfort of your
        home.
      </p>

      <p className={`text-[#535354eb] mt-2 ${isExpanded ? "" : "hidden"}`}>
      Simply browse through local eateries, check out their menus, and find the perfect meal for any occasion. Whether you're planning a casual dinner with friends, a family feast, or a cozy night in, the choices are endless. With many restaurants offering exclusive deals and discounts, you can enjoy gourmet meals at great prices. Plus, you can read reviews to ensure you pick the best spot to suit your taste. Take the stress out of mealtime by leveraging the power of technology to enjoy a delightful dining experience delivered straight to your door. Don't wait any longer—start exploring and indulge in delicious food delights today!
      </p>

      <h2 className={`text-2xl mt-10 md:text-3xl font-bold mb-4 text-[#434343eb] ${isExpanded ? "" : "hidden"}`} >Convenience at Your Fingertips: Order Food Online Near You Now</h2>

      <p className={`text-[#535354eb] mt-2 ${isExpanded ? "" : "hidden"}`}>
      Experience the ultimate convenience with food ordering near me and indulge in your favourite meals without the hassle! With just a few clicks, you can order food online near me from a variety of restaurants, all offering speedy delivery right to your doorstep. Whether you’re at home, at work, or anywhere in between, satisfying your cravings has never been easier.
      </p>

      <button
        onClick={handleToggle}
        className="mt-4 text-[#fc6119] font-bold hover:text-orange-800 focus:outline-none flex "
      >
        
        {isExpanded ? (<> See Less <RxCaretUp className="mt-1 text-xl" /> </>) : (<>See More <RxCaretDown className="mt-1 text-xl" /> </>)} {" "}
      </button>
    </div>
  );
};

export default FoodDescription;
