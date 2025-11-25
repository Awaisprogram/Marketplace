import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci";
import Link from "next/link";

type Props = {  
  className:string 
};

const Topbar = ({className}:Props) => {
  return (
    <div className={`bg-black1 text-white  h-[58px] text-[14px] flex justify-between hidden items-center lg:block bg-${className}`}>
      <div className="flex justify-between items-center px-2 w-full h-full">
        {/* Left Section: Contact */}
        <div className="flex items-center space-x-4 w-[416px] h-full">
          <div className="flex items-center space-x-1">
            <CiPhone className="text-xl" />
            <span className="font-bold">(255) 555-0118</span>
          </div>
          <div className="flex items-center space-x-1">
            <CiMail className="text-xl" />
            <span className="font-bold">michelle.rivera@example.com</span>
          </div>
        </div>

        {/* Center Section: Promo */}
        <div className="flex justify-center items-center text-center w-[366px] h-full">
          <span className="font-bold">
            Follow Us and get a chance to win 80% off
          </span>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center gap-3 w-[233px] h-full">
          <span className="font-bold">Follow Us </span> 
          <span>:</span>
          <Link href="#" className="
          hover:text-blue-500 text-white transition ease duration-500">
            <FaFacebook 
            size={18}/>
          </Link>
          <Link href="#" className="hover:text-pink-500 text-white transition ease duration-500">
            <FaInstagram 
            size={18}/>
          </Link>
          <Link href="#" className="hover:text-red-500 text-white transition ease duration-500">
            <FaYoutube 
            size={18}/>
          </Link>
          <Link href="#" className="text-white hover:text-blue-400 transition ease duration-500">
            <FaTwitter 
            size={18}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
