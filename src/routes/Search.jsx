import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import cat from '../data/cat'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Search = () => {
  const [slide, setSlide] = useState(12); // Keeps track of the current starting index
  let category = 20;

  const prevSlide = () => {
    if (slide === 0) return false  // if we are at the first slide, do nothing and return
    setSlide(slide - 3);

  }
  const nextSlide = () => {
    if (slide === category - 8) {
      // If at the last set of images, go back to the first set
      setSlide(0);
    } else {
      // Otherwise, move to the next set of images
      setSlide(slide + 3);
    }
  };
  return (
    <>
    {/* Search Bar */}
    <div className="mb-4 mt-12 flex justify-center items-center px-4 md:px-8 lg:mx-80">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="w-full border border-gray-400 rounded-md pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  
    {/* Popular Cuisines Header */}
    <div className="flex items-center justify-between my-3 px-4 md:px-8 lg:mx-80">
      <div className="text-lg md:text-2xl font-bold text-gray-600">Popular Cuisines</div>
      <div className="flex">
        <div
          className="cursor-pointer flex justify-center items-center w-8 h-8 bg-[#e2e2e7] rounded-full mx-2"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </div>
        <div
          className="cursor-pointer flex justify-center items-center w-8 h-8 bg-[#e2e2e7] rounded-full mx-2"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  
    {/* Categories Slider */}
    <div className="flex overflow-hidden mb-4 mt-12 justify-center items-center px-4 md:px-8 lg:mx-80">
      {cat.map((cat, index) => {
        return (
          <div
            className="w-16 sm:w-20 shrink-0 mx-1 sm:mx-2 "
            key={index}
            style={{
              transform: `translateX(-${slide * 30}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            <img
              src={cat.path}
              className="w-full h-full object-cover rounded-md cursor-pointer"
              alt={`Category ${index}`}
            />
          </div>
        );
      })}
    </div>
  </>
  

  )
}

export default Search
