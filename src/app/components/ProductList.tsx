// src/components/ProductList.tsx (Client Component)

'use client';

import { useShoppingCart } from "use-shopping-cart";

interface Product {
  sku: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const { addItem } = useShoppingCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Listing</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.sku}
            className="border border-gray-300 rounded-lg p-6 text-center shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
            <img
              src={product.image}
              alt={product.description}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={() =>
                addItem({
                  sku: product.sku,
                  name: product.name,
                  price: product.price,
                  currency: product.currency,
                  image: product.image,
                }, { count: 1 })
              }
              aria-label={`Add ${product.name} to your cart`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
