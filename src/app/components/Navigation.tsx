import React from 'react'
import Link from 'next/link'

interface type{
  current:string
}

function Navigation({current}:type) {
  return (
    <div>
      <div className="flex gap-2">
          <Link
            href="/"
            className="cursor-pointer hover:text-Color transtion ease duration-500"
          >
            Home /
          </Link>
          <span> {current} </span>
        </div>
    </div>
  )
}

export default Navigation
