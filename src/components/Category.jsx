import React from 'react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import cat from '../data/cat';
import { useState } from 'react';

// import { useEffect,fetchCategory } from 'react';

const Category = () => {

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
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 `}
                        onClick={prevSlide}
                    >
                        <FaArrowLeft />
                    </div>
                    <div className={`cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 `}
                        onClick={nextSlide}
                    >
                        <FaArrowRight />
                    </div>

                </div>
            </div>


            <div className='flex overflow-hidden cursor-pointer'>
                {
                    cat.map((cat, index) => {
                        return (
                            <div className='w-[150px] shrink-0  '
                                key={index} style={{ transform: `translateX(-${slide * 100}%) `, transition: "transform 0.5s ease-in-out" }}>
                                <img src={cat.path} className=' w-[150px] shrink-0 duration-500' />
                            </div>)
                    })
                }
            </div>
            <hr className='my-6 border-[1px]' />



        </div>
    )
}




export default Category
