import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
interface Props {
  id: number | string;
  price: number;
  rating: number;
  location: string;
  availableStartDate: Date;
  availableEndDate: Date;
  name: string;
  images: string[];
}

const HotelCard: React.FC<Props> = ({
  price,
  name,
  images,
  availableEndDate,
  availableStartDate,
  location,
  rating,
  id
}) => {
    const router = useRouter();
    const startDate = dayjs(availableStartDate).format('MMM, D');
    const endDate = dayjs(availableEndDate).format('MMM, D');
    const [firstImage] = images;
  return (
    <div className="hover:cursor-pointer" onClick={()=>{
        router.push(`/hotels/${id}`)
    }}>
      <Image
        src={firstImage}
        priority
        width={300}
        height={300}
        alt={name}
        className="rounded-2xl h-52"
      />
      <div className="flex justify-between my-3">
        <span className="font-bold text-sm">{name}</span>
        <span className="items-center content-center">
          <FontAwesomeIcon icon={faStar} size="1x" /> {rating}
        </span>
      </div>
      <span className="my-1">Location: {location}</span>
      <div className="flex justify-between my-1">
        <span>{startDate} - {endDate}</span>
      </div>
      <div className="my-5">
        <span className="font-black">${price}</span> /night
      </div>
    </div>
  );
};

export default HotelCard;
