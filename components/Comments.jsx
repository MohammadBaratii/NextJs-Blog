import { useEffect, useState } from "react";
import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, [slug]);

  if (!comments.length) {
    return <div className="p-5 bg-white rounded-xl">No comments yet!</div>;
  }
  return (
    <div className="space-y-3 p-5 bg-white rounded-xl">
      <p className="text-lg font-bold">{comments.length} Comment(s)</p>
      <hr className="border border-neutral-300" />
      {comments.map((comment) => {
        return (
          <div
            key={comment.createdAt}
            className="p-3 py-2 border rounded-xl shadow-[0_4px_10px_-3px_#888]"
          >
            <p className="font-bold">{comment.name} says:</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
