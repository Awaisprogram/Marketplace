import React from 'react'

function Toggle() {
  return (
    <>
  <label className="relative inline-block h-7 w-[48px] cursor-pointer rounded-full bg-gray-900 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#1976D2]">
    <input type="checkbox" id="AcceptConditions" className="peer sr-only" />
    <span className="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-gray-300 ring-[5px] ring-inset ring-white transition-all peer-checked:start-7 bg-gray-900 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent" />
  </label>
</>

  )
}

export default Toggle
