'use client';

import React, { useState } from 'react';

const Colors = () => {
  const colors = [
    { name: 'White', class: 'bg-white' },
    { name: 'Blue', class: 'bg-blue-700' },
    { name: 'Green', class: 'bg-green-700' },
    { name: 'Orange', class: 'bg-orange-500' }
  ];

  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="flex gap-1 mt-4 items-center">

      {colors.map((color, idx) => (
        <button
          key={idx}
          onClick={() => setSelectedColor(idx)}
          className={`border-2 ${
            selectedColor === idx
              ? 'border-blue-500 ring-4 ring-blue-100'
              : 'border-gray-300'
          } ${color.class} rounded-full w-8 h-8 focus:outline-none ml-2 transition-all duration-200 hover:scale-110`}
          title={color.name}
        />
      ))}

    </div>
  );
};

export default Colors;
