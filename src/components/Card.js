import React from 'react';

import LazyImage from './LazyImage';

function Card({ image, children }) {
  return (
    <div className="Card text-center">
      <LazyImage src={image} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {children}
      </div>
    </div>
  );
}

export default Card;
