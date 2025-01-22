import React from 'react'
import Image from 'next/image'
import none from '../images/none.png'
import Button from './Button'
import AboutCenter from './About-center'
import { client } from '../../sanity/lib/client'

interface type {
  heading: string;
  description: string;
  subtext:string;
  price:number;
  bottom:string;
  imgUrl: string;
}

async function getData(){
  const res = client.fetch(
    `*[_type == "about"]{
    subtext,
    heading,
    description,
    bottom,
    price,
    "imgUrl": image.asset->url}`
  )
  return res
}

 async function AboutTop() {
  const data:type[] = await getData()

  return (
    <>
      <section className="text-gray-600 body-font">
      {data.map((item, index) => (
  <div key={index} className="container mx-auto max-w-[1050px] flex px-5 py-24 md:flex-row flex-col items-center">
  
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <h3 className="text-black1 text-base mb-4 font-bold">{item.subtext}</h3>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-black text-gray-900">
      {item.heading}
        
      </h1>
      <p className="text-black1 lg:text-xl md:text-lg sm:text-md font-light mb-6 leading-relaxed">
           {item.description}
            <br className="block lg:hidden" />
            {item.bottom}
            
            
          </p>
      <Button text="Get Qoute Now"/>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={none}
      />
    </div>
    </div>
  
  ))}
</section>

<AboutCenter/>
    </>
  )
}

export default AboutTop
