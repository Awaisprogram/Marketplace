import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(request: any) {
  try {
    // Parse the JSON body
    const orderData = await request.json();

    // Validate the parsed data
    if (!orderData || Object.keys(orderData).length === 0) {
      return NextResponse.json(
        { error: "Invalid or empty request body" },
        { status: 400 }
      );
    }

    console.log('Order Data:', orderData);

    // Create the document in Sanity
    const result = await client.create(orderData);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    let errorMessage = "Something went wrong";

    if (typeof error === "string") {
      errorMessage = error; 
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('Error creating order:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}