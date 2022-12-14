import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            src={obj.src}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            className="m-auto"
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <article className="bg-white rounded-xl overflow-hidden">
      <Image
        src={post.featuredImage.url}
        alt={post.title}
        width="1080"
        height="320"
        className="w-full h-80 object-cover"
      />
      <div className="space-y-3 p-3 sm:px-5">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-1">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              width="36"
              height="36"
              className="w-9 h-9 object-cover object-top"
            />
            <h4 className="text-neutral-600">{post.author.name}</h4>
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
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold ">{post.title}</h2>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
        <div className="flex items-center gap-2">
          {post.categories.map((category) => {
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="p-3 py-1 bg-neutral-500 text-white rounded-full underline hover:bg-neutral-600"
              >
                #{category.name}
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
