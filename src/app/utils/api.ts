import { client } from "../../sanity/lib/client"; // Adjust import based on your Sanity client setup

export async function getProductById(productId: string) {
  const res = await client.fetch(
    `*[_type == "product" && _id == $productId]{
      _id,
      name,
      price,
      "image": image.asset->url,
      description,
      currency
    }`,
    { productId }
  );
  return res[0]; // Return the first product if found
}
