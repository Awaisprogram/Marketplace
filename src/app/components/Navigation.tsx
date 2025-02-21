import React from 'react'
import Link from 'next/link'

interface type{
  current:string
  previous:string
  href:string
}

function Navigation({current,previous,href}:type) {
  return (
    <div>
      <div className="flex gap-2">
          <Link
            href={href}
            className="cursor-pointer hover:text-Color transtion ease duration-500"
          >
            {previous}/
          </Link>
          <span> {current} </span>
        </div>
    </div>
  )
}

export default Navigation
