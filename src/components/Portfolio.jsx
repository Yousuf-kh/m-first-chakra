import { Image } from '@chakra-ui/react';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Portfolio = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <>
    <Carousel  infinite={true} responsive={responsive}>
        <Image src="/c-1.jpg"/>
        <Image src="/c-2.jpg"/>
        <Image src="/c-3.jpg"/>
        <Image src="/c-4.jpg"/>
        <Image src="/c-5.jpg"/>
    </Carousel>
    <Carousel  infinite={true} responsive={responsive}>
        <Image src="/c-6.jpg"/>
        <Image src="/c-7.jpg"/>
        <Image src="/c-8.jpg"/>
        <Image src="/c-9.jpg"/>
        <Image src="/c-10.jpg"/>
    </Carousel>
    </>  
  )
}

export default Portfolio