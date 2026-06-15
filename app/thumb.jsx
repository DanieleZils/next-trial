'use client';

import React from 'react';
import Image from 'next/image';

const Thumb = ({ selected, imgSrc, index, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={`View slide ${index + 1}`}
      className={`flex-none relative mx-1 focus:outline-none transition-all duration-300 ${
        selected ? 'opacity-100' : 'opacity-40 hover:opacity-70'
      }`}
    >
      <div
        className={`relative h-16 w-16 md:h-20 md:w-20 overflow-hidden transition-all duration-300 ${
          selected ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
        }`}
      >
        <Image
          src={imgSrc}
          alt={`Thumbnail ${index + 1}`}
          fill
          className="object-cover object-center"
          sizes="80px"
        />
      </div>
    </button>
  );
};

export default Thumb;
