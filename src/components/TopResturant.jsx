import { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import chains from '../data/restaurantChains';
import Card from './Card';
const TopResturant = ({heading}) => {
  const [slides, setSlides] = useState(0); // Keeps track of the current starting index
  let category = 20;

  const backwardSlide = () => {
    if (slides === 0) return false  // if we are at the first slide, do nothing and return
    setSlides(slides - 3);

  }

  const forwardSlide = () => {
    if (slides === category - 8) {
      // If at the last set of images, go back to the first set
      setSlides(0);
    } else {
      // Otherwise, move to the next set of images
      setSlides(slides + 3);
    }
  };
  return (
    <div className='max-w-[1200px] mx-auto  '>
      <div className='flex my-3 items-center justify-between'>
        <div className='text-[25px] font-bold'>{heading}</div>
        <div className='flex'>
          <div className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 `} onClick={backwardSlide}>
            <FaArrowLeft />
          </div>
          <div className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 `} onClick={forwardSlide}
          >
            <FaArrowRight />
          </div>

        </div>
      </div>
      <div className='overflow-hidden  '>

        <div className='flex gap-7 shrink-0 cursor-pointer your-class' style={{ transform: `translateX(-${slides * 10}%) `, transition: "transform 0.5s ease-in-out", }} >
          {
            chains.map((chains, index) => {
              return <Card {...chains} key={index} />
            }
            )
          }
        </div>
      </div>
      <hr className='my-6 border-[1px]' />
    </div>
  )
}


export default TopResturant;
