import { demoData } from '../../db';
import { client } from '@/sanity/lib/client';

async function uploadImageToSanity(imageUrl: string) {
  const res = await fetch(imageUrl);
  const blob = await res.blob(); 

  const imageAsset = await client.assets.upload('image', blob, {
    filename: 'image.jpg', 
  });

  return imageAsset._id; 
}

function Fetch() {
  async function insertData() {
    try {
      const result = await Promise.all(
        demoData.map(async (item: any) => {
          const imageAssetId = await uploadImageToSanity(item.image);

          return client.create({
            _type: 'product',
            name: item.name,
            subname: item.subname,
            discount: item.discount,
            price: item.price,
            description: item.description,
            image: {
              _type: 'image',
              asset: {
                _ref: imageAssetId, 
                _type: 'reference',
              },
            },
          });
        })
      );
      console.log(`Data inserted: `, result);
    } catch (error: any) {
      console.error(`Data is not inserted: `, error.message);
    }
  }
  // insertData();

  return (
    <>
      {/* Your JSX here */}
    </>
  );
}

export default Fetch;
