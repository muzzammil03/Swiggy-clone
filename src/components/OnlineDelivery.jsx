import { useState } from "react";
import Card from "./Card";
import chains from "../data/restaurantChains";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
const OnlineDelivery = ({ heading }) => {
  const [showAll, setShowAll] = useState(false);
  const chainsItems = showAll ? chains : chains.slice(0, 11);

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex my-5 items-center justify-between">
          <div className="text-[25px] font-bold">{heading}</div>
        </div>
        <div className={"fixed top-0 z-[1] bg-white w-full left-0"}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 cursor-pointer mb-6 px-2 sm:px-4 md:px-6">
          {chainsItems.map((data, index) => {
            return <Card {...data} />;
          })}
        </div>
        <div className="grid place-items-center">
          <button
            onClick={toggleShowMore}
            className="bg-white text-[#fc6119] font-bold border mb-4 border-gray-200 px-28 py-4 rounded-xl flex items-start justify-center "
          >
            {showAll ? (
              <>
                {" "}
                Show Less <RxCaretUp className="mt-1 text-xl" />{" "}
              </>
            ) : (
              <>
                Show More <RxCaretDown className="mt-1 text-xl" />{" "}
              </>
            )}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineDelivery;
