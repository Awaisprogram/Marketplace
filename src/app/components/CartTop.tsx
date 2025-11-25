"use client";

import { useState } from "react";
import { FaStar} from 'react-icons/fa';
import { client } from "@/sanity/lib/client";
import Quick from '@/app/components/Quick';




async function getProductById(productId: string) {
  const res = await client.fetch(
    `*[_type == "product" && _id == "${productId}"]{
      _id,
      name,
      price,
      "image": image.asset->url,
      description,
      currency
    }`
  );
  return res[0];  
}

function CartTop() {
  const [activeTab, setActiveTab] = useState('description');
  const reviews = [
    { id: 1, name: "John Doe", rating: 5, comment: "Excellent product! Highly recommended.", date: "2024-11-20" },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Good quality, fast shipping.", date: "2024-11-18" },
    { id: 3, name: "Mike Johnson", rating: 5, comment: "Love it! Worth every penny.", date: "2024-11-15" },
    { id: 4, name: "Sarah Williams", rating: 3, comment: "Decent product but could be better.", date: "2024-11-10" }
  ];

  // Mock specifications
  const specifications = {
    "Brand": "Premium Brand",
    "Material": "High-quality fabric",
    "Weight": "500g",
    "Dimensions": "30 x 20 x 10 cm",
    "Country of Origin": "USA",
    "Warranty": "1 Year"
  };

  return (
    <>
      <div className="bg-white">
       <div className="container mx-auto px-5">
         {/* Tab Navigation */}
         <nav className="flex items-center gap-5 cursor-pointer pt-10 justify-center">
           <button 
             onClick={() => setActiveTab('description')}
             className={`pb-4 px-6 font-semibold transition-all ${
               activeTab === 'description' 
                 ? 'text-Color border-b-2 border-Color' 
                 : 'text-gray-600 hover:text-gray-900'
             }`}>
             Description
           </button>
           <button 
             onClick={() => setActiveTab('specifications')}
             className={`pb-4 px-6 font-semibold transition-all ${
               activeTab === 'specifications' 
                 ? 'text-Color border-b-2 border-Color' 
                 : 'text-gray-600 hover:text-gray-900'
             }`}>
             Additional Information
           </button>
           <button 
             onClick={() => setActiveTab('reviews')}
             className={`pb-4 px-6 font-semibold transition-all ${
               activeTab === 'reviews' 
                 ? 'text-Color border-b-2 border-Color' 
                 : 'text-gray-600 hover:text-gray-900'
             }`}>
             Review <span className="text-gray-900">({reviews.length})</span>
           </button>
         </nav>

         {/* Tab Content */}
         <div className="py-12 max-w-5xl mx-auto">
           {activeTab === 'description' && (
            <Quick />
           )}

           {activeTab === 'specifications' && (
             <div className="py-24 px-4">
               <h3 className="text-3xl font-bold mb-6">Technical Specifications</h3>
               <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                 <table className="w-full">
                   <tbody>
                     {Object.entries(specifications).map(([key, value], idx) => (
                       <tr key={idx} className={`${idx !== 0 ? 'border-t border-gray-300' : ''}`}>
                         <td className="py-4 font-semibold text-gray-800 w-1/3 text-lg">{key}</td>
                         <td className="py-4 text-gray-600 text-lg">{value}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </div>
           )}

           {activeTab === 'reviews' && (
             <div>
               <h3 className="text-3xl font-bold mb-6">Customer Reviews</h3>
               
               {/* Overall Rating */}
               <div className="bg-gray-50 rounded-lg py-24 px-4 mb-8 border border-gray-200">
                 <div className="flex items-center gap-6">
                   <div className="text-6xl font-bold text-gray-900">4.0</div>
                   <div>
                     <div className="flex mb-2">
                       {[...Array(5)].map((_, i) => (
                         <FaStar key={i} className={`w-6 h-6 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} />
                       ))}
                     </div>
                     <p className="text-gray-600 text-lg">Based on {reviews.length} reviews</p>
                   </div>
                 </div>
               </div>

               {/* Individual Reviews */}
               <div className="space-y-6">
                 {reviews.map((review) => (
                   <div key={review.id} className="border-b border-gray-200 pb-6">
                     <div className="flex items-center justify-between mb-3">
                       <div className="font-semibold text-gray-900 text-lg">{review.name}</div>
                       <div className="text-sm text-gray-500">{review.date}</div>
                     </div>
                     <div className="flex mb-3">
                       {[...Array(5)].map((_, i) => (
                         <FaStar key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                       ))}
                     </div>
                     <p className="text-gray-700 text-base leading-relaxed">{review.comment}</p>
                   </div>
                 ))}
               </div>
             </div>
           )}
         </div>
       </div>
     </div>

    </>
  );
}

export default CartTop;
