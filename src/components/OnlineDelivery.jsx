
import React from 'react'
import Card from './Card';
import chains from '../data/restaurantChains';
const OnlineDelivery = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex my-5 items-center justify-between'>
                    <div className='text-[25px] font-bold'>Restaurans with online food delivery in Bhopal</div>
                </div>
           <div className={"fixed top-0 z-[1] bg-white w-full left-0"}>
        
           
            </div> 
                <div className='md:grid grid-cols-4 gap-3 cursor-pointer'>
                    {
                        chains.map(
                            (data, index) => {
                                return <Card{...data} />
                            }
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default OnlineDelivery
