import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services/index";
import Loading from "./Loading";

const PostWidgets = ({ category, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="grid gap-2 p-5 bg-white rounded-xl">
      <p className="text-lg font-bold">
        {slug ? "Related Posts" : "Recent Posts"}
      </p>
      <hr className="border border-neutral-300" />
      {!relatedPosts.length && <Loading classes="w-8 h-8" container />}
      <ul className="grid gap-2">
        {relatedPosts.map((relatedPost) => {
          return (
            <li key={relatedPost.createdAt}>
              <Link href={`/post/${relatedPost.slug}`}>
                <a className="flex items-center gap-3 p-2 rounded-lg transition hover:bg-indigo-200">
                  <img
                    src={relatedPost.featuredImage.url}
                    alt={relatedPost.title}
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3>{relatedPost.title}</h3>
                    <p className="text-neutral-600 text-sm">
                      {moment(relatedPost.createdAt).format("MMM DD, YYYY")}
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostWidgets;
