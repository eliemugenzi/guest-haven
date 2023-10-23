import React from 'react'
import Image from 'next/image';
import { Carousel as NativeCarousel } from 'flowbite-react';

interface Props {
    images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <NativeCarousel>
      <Image
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      />
      <Image
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <Image
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <Image
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <Image
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </NativeCarousel>
  );
}

export default Carousel