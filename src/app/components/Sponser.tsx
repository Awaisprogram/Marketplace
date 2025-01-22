import React from 'react';
import Image from 'next/image';
import a1 from '../images/a1.png'
import a2 from '../images/a2.png'
import a3 from '../images/a3.png'
import a4 from '../images/a4.png'
import a5 from '../images/a5.png'
import a6 from '../images/a6.png'

type Head = {
  heading?: string;
  para?: string
};

function Sponser({ heading,para }: Head) {
  return (
    <div className="py-24 bg-Bakground px-4">
      <h2 className="text-4xl mb-8 text-center font-bold">{heading}</h2>
      <h5 className='text-center text-md font-light text-black1'>{para}</h5>
      <div className="flex mt-10 justify-center gap-12 mt-8 flex-col lg:flex-row items-center">
        <div className="h-full">
          <Image 
            src={a1} 
            alt="Sponsor 1" 
            width={96} 
            height={96} 
            objectFit="cover"
          />
        </div>
        <div className=" h-full">
          <Image 
            src={a2} 
            alt="Sponsor 2" 
            width={96} 
            height={96} 
            objectFit="cover"
          />
        </div>
        <div className=" h-full">
          <Image 
            src={a4} 
            alt="Sponsor 3" 
            width={96} 
            height={96} 
            objectFit="cover"
          />
        </div>
        <div className=" h-full">
          <Image 
            src={a3}
            alt="Sponsor 4" 
            width={96} 
            height={96} 
            objectFit="cover"
          />
        </div>
        <div className=" h-full">
          <Image 
            src={a5} 
            alt="Sponsor 5" 
            width={96} 
            height={96} 
            objectFit="cover"
          />
        </div>
        <div className="h-full">
          <Image 
            src={a6}
            alt="Sponsor 6" 
            width={96} 
            height={96} 
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Sponser;
