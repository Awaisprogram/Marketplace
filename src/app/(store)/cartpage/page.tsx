'use client'

import dynamic from "next/dynamic";

const CartPage = dynamic(() => import("@/app/components/Cart"), { ssr: false });

export default function Page() {
  return <CartPage />;
}
