import React from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import Heading from "./Heading";

interface type {
  title: string;
  description: string;
  date: string;
  imgUrl: string;
  comments: number;
}

async function getData() {
  const res = client.fetch(
    `*[_type == "post"]{
      title,
      description,
      date,
      comments,
      "imgUrl": image.asset->url
    }`
  );
  return res;
}

async function PostCard() {
  const data: type[] = await getData();

  return (
    <>
      {/* Section Heading */}
      <div className="flex justify-center mb-8">
        <Heading
          title="Featured Posts"
          paragraph="Problems trying to resolve the conflict between"
          subtitle="Practice Advice"
          className="text-primary"
        />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1050px] mx-auto p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-transform hover:bg-gray-100 ease-in duration-300"
          >
            {/* Post Image */}
            <Image
              className="w-full object-cover"
              src={item.imgUrl}
              alt="blog"
              width={500}
              height={300}
              priority
            />

            {/* Post Content */}
            <div className="p-6">
              <div className="flex gap-4 text-sm mb-3 text-primary">
                <span className="cursor-pointer hover:text-secondary">Google</span>
                <span className="cursor-pointer hover:text-secondary">Trending</span>
                <span className="cursor-pointer hover:text-secondary">News</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
              <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
                <span>{item.date}</span>
                <span>{item.comments} Comments</span>
              </div>
              <a
                className="inline-flex items-center text-primary font-medium hover:underline"
                href="#"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PostCard;
