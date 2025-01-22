import React from "react";

type HeadingProps = {
  title?: string;       
  subtitle?: string;  
  paragraph?: string;  
  className?:string 
};


const Heading = ({ title, subtitle, paragraph ,className}:HeadingProps) => {
  return (
    <div className="text-center pb-4 pt-20">
     
     {subtitle && (
        <h3 className={`text-base font-semibold  mb-2 text-${className}`}>{subtitle}</h3>
      )}
      <h1 className="text-3xl lg:text-4xl font-black mb-4 text-black1">{title}</h1>
      
      <p className="text-md text-para">{paragraph}</p>
    </div>
  );
};

export default Heading;
