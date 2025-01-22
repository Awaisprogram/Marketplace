"use client";

import Link from "next/link";

function CartTop() {
  return (
    <>
      <div>
        <nav className="flex items-center gap-5 cursor-pointer mt-10 justify-center">
          <Link href="">Description</Link>
          <Link href="">Additional Information</Link>
          <Link href="">
            Review <span className="text-dark">0</span>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default CartTop;
