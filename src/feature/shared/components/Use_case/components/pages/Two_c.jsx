import React from 'react';
import Two_i_one from './Two_i_one';

const Two_c = ({image, head, content}) => {
  return (
    <div className="lg:w-1/3 mt-5 mx-2 p-2 flex flex-col justify-center items-center">
      <Two_i_one image={image} />
      <h1 className="py-2 font-bold text-xl">{head}</h1>
      <p className="mt-1 pb-3 sm:text-start text-center text-gray-500 text-base sm:text-lg font-medium">
        {content}
      </p>
    </div>
  );
};

export default Two_c;
