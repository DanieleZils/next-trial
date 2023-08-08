'use client';

import React from 'react';
import Image from 'next/image';

const Thumb = ({ selected, imgSrc, index, onClick }) => {
  return (
    <div
      className={`flex-none relative mx-1 ${selected ? 'opacity-100' : 'opacity-20'}`}
    >
      <button
        onClick={onClick}
        className="w-18 md:w-full h-32 focus:outline-none"
        type="button"
      >
        {/* <div className="absolute top-0 left-0 p-1 text-xs text-white bg-black bg-opacity-60">
          <span>{index + 1}</span>
        </div> */}
        <Image
          src={imgSrc}
          alt={`Thumbnail ${index + 1}`}
          className='rounded object-cover object-center h-20 w-20 md:h-30 md:w-30 xl:h-full xl:w-full py-2'
          width={200}
          height={200}
        />
        <div className="absolute top-5 md:top-1 right-1 rounded-full bg-white bg-opacity-70 sm:w-4 sm:h-4 md:w-6 md:h-6 w-2 h-2 flex items-center justify-center text-black text-sm md:text-base">
          <span>{index + 1}</span>
        </div>
      </button>
    </div>
  );
};

export default Thumb;
