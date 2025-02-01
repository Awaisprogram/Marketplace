// app/api/createOrder/route.js
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';



export async function POST(request:any) {
  try {
    const orderData = await request.json();
    const result = await client.create(orderData);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: "Method Not Allowed" },
      { status: 405 });
  }
}
