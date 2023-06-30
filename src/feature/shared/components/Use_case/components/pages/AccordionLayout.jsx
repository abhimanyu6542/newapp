import React, { useState } from 'react';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';


function AccordionLayout({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const handleAnswers = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <>
            <div onClick={() => handleAnswers()} className='p-2 md:p-5 mb-5 bg-white border-0 rounded-lg cursor-pointer'>

                <div >
                    {
                        showAnswer
                            ? <div className='w-full text-black flex items-center justify-between'>
                                <h1 className='text-sm md:text-lg lg:text-xl text-blue2 font-semibold'>{question} </h1>
                                <IoMdArrowDropdown className='text-xl md:text-3xl' />
                            </div>
                            : <div className='w-full text-black flex items-center justify-between'>
                                <h1 className='text-sm md:text-lg lg:text-xl font-semibold'>{question} </h1>
                                <IoMdArrowDropright className='text-xl md:text-3xl' />
                            </div>
                    }
                </div>

                {
                    showAnswer
                        ? <p className='mt-4 text-sm md:text-md text-gray font-base'>{answer} </p>
                        : null
                }

            </div>
        </>
    )
}

export default AccordionLayout;