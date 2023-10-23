"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

// import './styles.css';

interface Props {
  params: {
    id: number | string;
  };
}

const HotelInfo: React.FC<Props> = ({ params }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`/hotels/${params.id}`],
    enabled: !!params.id,
  });

  if (isLoading) return "Loading...";
  if (error) return `Unexpected error: ${error?.message}`;
  const [firstImage, ...rest] = data?.images;

  /**
   * Featured Images, not all of them
   */
  const displayImages: string[] = rest.slice(0, 4);

  return (
    <main className="mx-72 my-10 relative">
      <h2 className="my-3 text-bold">{data?.name}</h2>
      <div className="flex justify-between mb-4">
        <div className="flex">
          <div className="rating-container mr-4 underline decoration-2">
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            <span>{data?.rating}</span>
          </div>
          <div className="reviews-container underline decoration-2 mr-4">
            <span>203 reviews</span>
          </div>
          <div className="location-container underline decoration-2 mr-4">
            <span>{data?.location}</span>
          </div>
        </div>
        <div className="flex">
            <div className="share-container mr-4 underline decoration-2">
              <FontAwesomeIcon icon={faArrowUpFromBracket} className="mr-2" />
              <span>Share</span>
            </div>
            <div className="share-container mr-4 underline decoration-2">
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              <span>Save</span>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <Image
          src={firstImage}
          width={150}
          height={50}
          className="w-auto h-full relative aspect-square"
          alt="Babes..."
          priority
        />
        <div className="grid grid-cols-2 gap-1 relative">
          {displayImages.map((image, index) => (
            <Image
              key={index}
              alt="Image Item"
              src={image}
              width={50}
              height={50}
              className="h-72 w-80 mx-0 my-0 relative aspect-square"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HotelInfo;
