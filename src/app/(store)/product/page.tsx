import { client } from "@/sanity/lib/client";
import Heading from "@/app/components/Heading";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: number;
  name: string;
  subtext: string;
  price: number;
  image: string;
}

async function getData() {
  const res = await client.fetch<Product[]>(
    `*[_type == "product"]{
      _id,
      name,
      subtext,
      price,
      "image": image.asset->url
    }`
  );
  return res;
}

async function Page() {
  const data: Product[] = await getData();
  console.log(data)

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Heading title="Featured Products" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow-lg hover:text-color transition duration-300 ease-in"
          >
            <Link href={`/add/${product._id}`}>
              <div className="flex justify-center mb-4 text-center group cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-lg h-96 object-cover"
                  unoptimized={true}
                />
              </div>
            </Link>
            <h3 className="text-xl font-semibold text-center">
              {product.name}
            </h3>
            <p className="text-center text-gray-700 mt-2">
              {product.subtext}
            </p>
            <p className="text-center text-gray-700 mt-2">
              Price: ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
