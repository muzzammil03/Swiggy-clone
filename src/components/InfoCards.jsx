import { useState } from "react";
import { restaurants, dishes } from "../data/populardishes.js";
import { RxCaretDown ,RxCaretUp } from "react-icons/rx";

const InfoCards = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };
  const restaurantsItems = showAll ? restaurants : restaurants.slice(0, 11);
  const dishesItems = showAll ? dishes : dishes.slice(0, 11);
  return (
    <div>
      <div className="w-full">
        <div className="relative">
          <img
            src="/images/long.png" 
            alt="Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="px-6 sm:px-12 md:px-24 lg:px-48 py-20">
        <h2 className="text-[25px] font-bold mb-6 text-[#02060ceb]">
          Restaurant Chains Near Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {restaurantsItems.map((res) => (
            <button
              key={res.id}
              className="bg-white text-[#02060cbf] font-semibold border mb-4 border-gray-200 px-8 py-4 rounded-xl"
            >
              {res.name}
            </button>
          ))}
          <button
            onClick={toggleShowMore}
            className="bg-white text-[#fc6119] font-bold border mb-4 border-gray-200 px-8 py-4 rounded-xl flex items-start justify-center"
          >
            {showAll ? (<> Show Less <RxCaretUp className="mt-1 text-xl" /> </>) : (<>Show More <RxCaretDown className="mt-1 text-xl" /> </>)} {" "}
          </button>
        </div>
      </div>
      <div className="px-6 sm:px-12 md:px-24 lg:px-48">
        <h2 className="text-[25px] font-bold mb-6 text-[#02060ceb]">
          Dishes Near Me
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {dishesItems.map((dish) => (
            <button
              className="bg-white text-[#02060cbf] font-semibold mb-4 border border-gray-200 px-8 py-4 rounded-xl "
              key={dish.id}
            >
              {dish.name}
            </button>
          ))}
          <button
            onClick={toggleShowMore}
            className="bg-white text-[#fc6119] font-bold border mb-4 border-gray-200 px-8 py-4 rounded-xl flex items-start justify-center"
          >
            {showAll ? (<> Show Less <RxCaretUp className="mt-1 text-xl" /> </>) : (<>Show More <RxCaretDown className="mt-1 text-xl" /> </>)} {" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
