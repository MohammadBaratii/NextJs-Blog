import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getPosts } from "../services";
import CarouselItem from "./CarouselItem";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="absolute grid place-content-center left-0 w-10 h-10 bg-rose-400 rounded-full transition hover:bg-rose-500"
      onClick={onClick}
    >
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
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      className="absolute grid place-content-center right-0 w-10 h-10 bg-rose-400 rounded-full transition hover:bg-rose-500"
      onClick={onClick}
    >
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
};

const CarouselList = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    // There is no need for this section to be pre-rendered so I use regular fetch here
    getPosts().then((posts) => setPosts(posts));
  }, []);

  if (!posts) {
    return (
      <div className="wrapper flex gap-6 h-60 pb-0">
        <div className="w-full h-full bg-gradient-to-br from-black/40 to-black/80 rounded-xl" />
        <div className="hidden w-full h-full bg-gradient-to-br from-black/40 to-black/80 rounded-xl sm:block" />
        <div className="hidden w-full h-full bg-gradient-to-br from-black/40 to-black/80 rounded-xl md:block" />
        <div className="hidden w-full h-full bg-gradient-to-br from-black/40 to-black/80 rounded-xl md:block" />
      </div>
    );
  }
  return (
    <div className="wrapper pb-0">
      <Carousel
        autoPlay
        arrows
        autoPlaySpeed={2500}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        draggable={false}
        infinite
        pauseOnHover
        swipeable
        rtl={0}
        responsive={{
          largeDesktop: {
            breakpoint: {
              max: 3000,
              min: 1280,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          desktop: {
            breakpoint: {
              max: 1279,
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
          return <CarouselItem key={post.createdAt} {...post} />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselList;
