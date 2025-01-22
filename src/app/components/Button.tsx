import React from 'react'

interface type{
  text:string
}

function Button({text}:type) {
  return (
    <div>
       {/* Button */}
       <button className="bg-[#2DC071] text-white  text-center h-[62px] w-[221px] py-2 px-6 rounded font-semibold hover:bg-Color transition ease duration-500 lg:mx-0 mx-auto">
            {text}
          </button>
    </div>
  )
}

export default Button
