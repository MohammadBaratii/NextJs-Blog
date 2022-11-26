import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getPosts } from "../services";
import CarouselItem from "./CarouselItem";

const customLeftArrow = (
  <button className="absolute grid place-content-center left-0 w-10 h-10 bg-rose-400 rounded-full transition hover:bg-rose-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  </button>
);

const customRightArrow = (
  <button className="absolute grid place-content-center right-0 w-10 h-10 bg-rose-400 rounded-full transition hover:bg-rose-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  </button>
);

const CarouselList = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  if (!posts) {
    return <div className="h-60" />;
  }
  return (
    <div className="wrapper pb-0">
      <Carousel
        autoPlay
        arrows
        autoPlaySpeed={3000}
        customRightArrow={customRightArrow}
        customLeftArrow={customLeftArrow}
        draggable
        infinite
        pauseOnHover
        swipeable
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          large_tablet: {
            breakpoint: {
              max: 1023,
              min: 768,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          mini_tablet: {
            breakpoint: {
              max: 767,
              min: 425,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 424,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
      >
        {posts.map((post) => {
          return <CarouselItem key={post.node.createdAt} {...post.node} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselList;
