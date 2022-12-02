import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostItem = ({
  author,
  createdAt,
  excerpt,
  featuredImage,
  slug,
  title,
}) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden">
      <Image
        src={featuredImage.url}
        alt={title}
        width="1080"
        height="320"
        className="w-full h-80 object-cover"
      />
      <div className="space-y-3 p-3 sm:px-5">
        <h2 className="text-center text-2xl font-bold ">
          <Link
            href={`/post/${slug}`}
            className="400 hover:underline"
            title={title}
          >
            {title}
          </Link>
        </h2>
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-1">
            <Image
              src={author.photo.url}
              alt={author.name}
              width="36"
              height="36"
              className="w-9 h-9 object-cover"
            />
            <h3 className="text-neutral-600">{author.name}</h3>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-rose-400 w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-neutral-600">
              {moment(createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
        <h3 className="text-neutral-600">{excerpt}</h3>
        <Link
          href={`/post/${slug}`}
          className="flex items-center gap-1 w-fit m-auto p-5 py-2 bg-amber-300 rounded-full duration-150 hover:gap-2 hover:bg-amber-400"
          title={title}
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default PostItem;
