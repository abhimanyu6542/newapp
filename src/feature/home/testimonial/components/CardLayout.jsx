import React from 'react';
// icons --
import { GiRoundStar } from 'react-icons/gi';


function CardLayout({ name, post, image, rating, description }) {
    const ratingArray = [];
    let count = rating;
    let emptyStar = 5 - rating;
    while (count != 0) {
        ratingArray.push(1);
        count -= 1;
    }
    while (emptyStar != 0) {
        ratingArray.push(0);
        emptyStar -= 1;
    }


    return (
        <>
            <div className='w-[380px] mb-24 lg:mb-0 '>

                <div>
                    {/* -- rating section -- */}
                    <div className='mb-5 lg:mb-10 flex items-center'>
                        {
                            ratingArray.map((data, id) => (
                                <div key={id} >
                                    {
                                        (data === 1)
                                            ? <GiRoundStar className='mr-2 text-3xl text-[#ff971d] ' />
                                            : <GiRoundStar className='mr-2 text-3xl text-[#25373f33] ' />
                                    }
                                </div>
                            ))
                        }

                    </div>

                    {/* -- info -- */}
                    <div>
                        <p className='mb-5 lg:mb-10 text-lg text-gray4 font-semibold'>{description} </p>
                        <div className='flex items-center'>
                            <img src={image} alt="person image" className='h-16 w-16 mr-4 bg-gray4 border-0 rounded-full' />
                            <div>
                                <h2 className='text-lg text-black font-semibold'>{name} </h2>
                                <p className='text-md text-gray-500'>{post} </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CardLayout;