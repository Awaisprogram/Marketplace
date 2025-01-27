import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

interface type {
  _id: number;
  name: string;
  subtext: string;
  price: number;
  image: string;
}

async function getData() {
  const res = client.fetch(
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

async function All() {
  const data: type[] = await getData();

  return (
    <div className="max-w-screen-xl mx-auto p-4">
     
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <div
            key={product._id}
            className="p-4 rounded-lg hover:text-color transition duration-300 ease-in"
          >
            <Link href={`/add/${product._id}`}>
              <div className="flex justify-center mb-4 text-center group cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  unoptimized
                  className="rounded-lg h-96 object-cover cursor-pointer"
                />
              </div>
            </Link>

            <h3 className="text-xl font-semibold text-center">{product.name}</h3>
            <p className="text-center text-gray-700 mt-2">{product.subtext}</p>
            <p className="text-center text-gray-700 mt-2">Price: ${product.price}</p>

            {/* "View Details" Button */}
            <div className="flex justify-center mt-4">
              <Link href={`/add/${product._id}`}>
                <button className="bg-Color text-white py-2 px-6 rounded-xl hover:bg-blue-500  transition duration-200 ease-in">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;
