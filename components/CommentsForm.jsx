import { useRef, useState } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const enteredName = useRef();
  const enteredEmail = useRef();
  const enteredComment = useRef();

  const handleSendComment = (e) => {
    e.preventDefault();

    const name = enteredName.current.value;
    const email = enteredEmail.current.value;
    const comment = enteredComment.current.value;

    if (name.trim() === "" || email.trim() === "" || comment.trim() === "") {
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    const newComment = {
      name,
      email,
      comment,
      slug,
    };

    submitComment(newComment).then((res) => {
      if (res.inputError) {
        setError(true);
        return;
      }
      setError(false);
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    });
  };

  return (
    <form
      className="grid gap-2 bg-white rounded-xl p-5"
      onSubmit={handleSendComment}
    >
      <p className="text-lg font-bold">Comment</p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          placeholder="Name"
          className="flex-1 p-2 bg-neutral-200 rounded-md outline-indigo-300"
          ref={enteredName}
        />
        <input
          type="email"
          placeholder="Email"
          className="flex-1 p-2 bg-neutral-200 rounded-md outline-indigo-300"
          ref={enteredEmail}
        />
      </div>
      <textarea
        placeholder="Comment"
        rows="5"
        className="flex-1 w-full p-2 bg-neutral-200 rounded-md outline-indigo-300"
        ref={enteredComment}
      ></textarea>
      {error && (
        <p className="text-red-500 text-center">
          The inputs should NOT be empty!
        </p>
      )}
      {success && (
        <p className="text-indigo-500 text-center">
          Your comment will be shown after our review!
        </p>
      )}
      <button
        className={`${
          loading && "bg-amber-500 cursor-not-allowed"
        } block w-fit m-auto p-5 py-2 bg-amber-300 rounded-full`}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Comment"}
      </button>
    </form>
  );
};

export default CommentsForm;
