import React from "react";
import Heading from "./Heading";
import Navigation from "./Navigation";
import Image from "next/image";
import u1 from "../images/u1.png";
import u2 from "../images/u2.png";
import u3 from "../images/u3.png";
import u4 from "../images/u4.png";
import u5 from "../images/u5.png";
import Members from "./Members";
import Trial from "./Trial";


function AllTeam() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <Heading
          subtitle="WHAT WE DO"
          title="Innovation tailored for you"
          className=""
        />
        <Navigation current="Team" />
      </div>



      <div className="flex justify-center items-center gap-3 flex-col lg:flex-row py-7 w-full overflow-hidden">
  <div className="flex-shrink-0">
    <Image src={u3} alt="" className="" />
  </div>
  <div className="flex flex-row lg:flex-col gap-3 justify-center">
    <Image src={u2} alt="" className="w-72 h-72 lg:w-60 lg:h-64 object-cover" />
    <Image src={u5} alt="" className="w-72 h-72 lg:w-60 lg:h-64 object-cover" />
  </div>
  <div className="flex flex-row lg:flex-col gap-3 justify-center">
    <Image src={u4} alt="" className="w-72 h-72 lg:w-60 lg:h-64 object-cover" />
    <Image src={u1} alt="" className="w-72 h-72 lg:w-60 lg:h-64 object-cover" />
  </div>
</div>



      {/* All team */}
      <Members />

      {/* Laasssst */}

      <Trial/>
    </>
  );
}

export default AllTeam;
