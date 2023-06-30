import React from 'react'

const Sixth = () => {
  return (
    <div className="m-5 bg-green-500 text-white rounded-xl">
        <div className="p-5 flex flex-col sm:flex-row">
          <div className='flex flex-col'>
            <h1 className="pt-7 px-5 lg:px-2 text-3xl lg:text-[2rem] font-bold text-center font-rubik">Start, build, and grow your online business today!</h1>
            <p className="py-3 px-5 text-base lg:text-xl font-semibold text-center font-rubik">Increase revenue by expanding your reach with the right tools.</p>
          </div>
          <div className='p-2 flex justify-center items-center lg:-mt-5'>
            <button
              className="py-3 px-6 lg:mt-6 mt-4 w-11/12 sm:w-56 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold rounded-lg"
              type="button"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
  )
}

export default Sixth