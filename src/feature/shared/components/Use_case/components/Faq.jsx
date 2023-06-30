import React from 'react';
import { data } from './pages/data';
import AccordionLayout from './pages/AccordionLayout';


function Faq() {

    return (
        <>
            <div className='w-full px-5 md:px-10 py-10 md:py-20 flex flex-col justify-center items-center '>

                <h1 className='mb-5 text-2xl lg:text-4xl text-black text-center font-bold'>Frequently Asked Questions</h1>
                <div className='w-full md:w-[80vw] lg:w-[60vw] '>
                    {
                        data.map((data, id) => (
                            <div key={id}>
                                <AccordionLayout question={data.question} answer={data.answer} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Faq;