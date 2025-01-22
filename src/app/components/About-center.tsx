import React from 'react'
import Image from 'next/image'
import vdo from '../images/vdo.png'
import { VscTriangleRight } from "react-icons/vsc";
import Team from './Team';


function AboutCenter() {
  return (
    <>
      <div className="flex justify-center items-center gap-16  px-5 py-24 container flex-col lg:flex-row mx-auto max-w-[1050px]">
        <div className="leading-relaxed ">
          <h5 className='text-sm text-red-400 py-6 lg:text-start text-center'>Problems trying</h5>
          <h1 className='font-bold text-3xl lg:text-start text-center'>Me minim Molie non desert Alamo est sit cliquesy dolor do met sent</h1>
        </div>
        <p className='text-lg '>Problems trying to resolve the conflict between two major realms of Classical physics:Newtonaian mechanics.</p>
      </div>

      {/* Stats */}
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mx-auto max-w-[1050px]">
    <div className="flex items-center flex-col lg:flex-row -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-black sm:text-4xl text-3xl text-gray-900">
          15k
        </h2>
        <p className="leading-relaxed text-sm">Happy Customers</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-black sm:text-4xl text-3xl text-gray-900">
          150k
        </h2>
        <p className="leading-relaxed text-sm">Monthly Visitors</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-black sm:text-4xl text-3xl text-gray-900">
          15
        </h2>
        <p className="leading-relaxed text-sm">Countries Worlwide</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-black sm:text-4xl text-3xl text-gray-900">
          100+
        </h2>
        <p className="leading-relaxed text-sm">Top Partners</p>
      </div>
    </div>
  </div>
</section>
<div className=' py-12 px-4 container mx-auto max-w-[1050px]'>
<div className='relative '>
<Image src={vdo} alt='' 
className='rounded-xl'/>
<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs p-4 text-center rounded-full bg-Color '>
<VscTriangleRight
size={24}
className=''/>

</div>
</div>

</div>
<Team/>

    </>
  )
}

export default AboutCenter
