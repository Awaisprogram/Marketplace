import { client } from "../../sanity/lib/client";
import ShopTop from "../components/ShopTop";

interface Product {
  _id: number;
  name: string;
  subtext: string;
  price: number;
  image: string;
  category: string;
}

async function getData(): Promise<Product[]> {
  const res = await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      subtext,
      price,
      "image": image.asset->url,
      "category": category
    }`
  );
  return res;
}

export default async function ShopPage() {
  const products = await getData();
  return <ShopTop products={products} />;
}