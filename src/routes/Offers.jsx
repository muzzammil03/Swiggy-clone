import React from "react";
import InfoCards from "../components/InfoCards";
import Footer from "../components/Footer";
import TopResturant from "../components/TopResturant";
import OnlineDelivery from "../components/OnlineDelivery";
import  FoodDescription  from "../components/FoodDescription";
const Offers = () => {
  return (
    <>
      {/* header */}
      <div className="relative max-w-6xl mx-auto h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-[30px]">
        {/* picture */}
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/Food_collectionbanner.png"
          alt="Food Offer Banner"
          className="w-full h-full object-contain"
        />
        <div className="absolute left-4 bottom-8 md:left-8 md:bottom-12 text-white pb-16">
          <div className="bg-opacity-40 p-2 md:p-4 rounded-md">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Order Online Delivery <br /> Restaurants Near Me
            </h1>
          </div>
        </div>
      </div>
      <TopResturant heading="Best Food Outlets Near Me"/>
      <OnlineDelivery heading="Popular Order Food Online restaurants near me"/>
      <FoodDescription/>
      <InfoCards />
      <Footer />
    </>
  );
};

export default Offers;
