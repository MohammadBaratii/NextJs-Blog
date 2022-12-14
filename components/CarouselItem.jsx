import Image from "next/image";
import Link from "next/link";

const CarouselItem = ({ slug, featuredImage, title, author }) => {
  return (
    <Link
      href={`/post/${slug}`}
      className="relative flex flex-col justify-center items-center gap-3 h-56 mx-2 p-5 rounded-xl overflow-hidden sm:mx-3 hover:ring hover:ring-inset hover:ring-white"
    >
      <Image
        src={featuredImage.url}
        alt={title}
        width="350"
        height="224"
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
      />
      <div className="absolute top-0 left-0 w-full h-full object-cover bg-black/60 -z-10" />
      <h4 className="text-white text-center text-lg">{title}</h4>
      <div className="flex items-center gap-1">
        <Image
          src={author.photo.url}
          alt={author.name}
          width="25"
          height="25"
          className="w-6 h-6 object-cover"
        />
        <p className="text-white text-[14px]">{author.name}</p>
      </div>
    </Link>
  );
};

export default CarouselItem;
