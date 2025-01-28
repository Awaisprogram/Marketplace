import React from "react";
import Button from "./Button";
import { client } from "../../sanity/lib/client";


interface type {
  heading: string;
  discription: string;
  subtext:string;
  
  imgUrl: string;
}

async function getData(){
  const res = client.fetch(
    `*[_type == "hero"]{
    subtext,
    heading,
    description,
    "imgUrl": image.asset->url}`
  )
  return res
}


async function Hero() {

  const data:type[] = await getData()
 
  return (
    <>
      <section className="relative bg-[#23A6F0]  h-[716px] py-20 flex items-center justify-between px-8 lg:px-24">
        {/* Background Image */}
        {data.map((item, value)=>(
           <div key={value}>
           <div
             className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
             style={{ backgroundImage: `url(${item.imgUrl})` }}
           >
             {/* Image as background */}
           </div>
   
           <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
             {/* Small Heading */}
             <h3 className="text-white text-base mb-4 font-bold">{item.subtext}</h3>
   
             {/* Big Heading */}
             <h1 className="text-white lg:text-[58px] text-[40px]  font-black mb-4">{item.heading}</h1>
   
             {/* Paragraph */}
             <p className="text-white lg:text-xl md:text-lg sm:text-md font-light mb-6 leading-relaxed">
              {item.discription}
             </p>
   
             {/* Button */}
             <Button text="SHOP NOW"/>
            
           </div>
           </div>
        ))}
       
      </section>
    </>
  );
}

export default Hero;
