import { useState } from "react";
// import { submitComment } from "../services";

const CommentForm = ({ slug }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredComment, setEnteredComment] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSendComment = (e) => {
    e.preventDefault();

    if (
      enteredName.trim() === "" ||
      enteredEmail.trim() === "" ||
      enteredComment.trim() === ""
    ) {
      setError(true);
      return;
    }

    // send fake comment
    setEnteredName("");
    setEnteredEmail("");
    setEnteredComment("");
    setError(false);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    // You can use the code bellow to allow users to send real comments. but i commented them to prevent spamming.

    // setLoading(true);
    // setError(false);

    // const newComment = {
    //   enteredName,
    //   enteredEmail,
    //   enteredComment,
    //   slug,
    // };

    // submitComment(newComment).then((res) => {
    //   if (res.inputError) {
    //     setError(true);
    //     return;
    //   }
    //   setEnteredName("");
    //   setEnteredEmail("");
    //   setEnteredComment("");
    //   setError(false);
    //   setLoading(false);
    //   setSuccess(true);
    //   setTimeout(() => {
    //     setSuccess(false);
    //   }, 3000);
    // });
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
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
          className="flex-1 p-2 bg-neutral-200 rounded-md outline-indigo-300"
        />
        <input
          type="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
          className="flex-1 p-2 bg-neutral-200 rounded-md outline-indigo-300"
        />
      </div>
      <textarea
        placeholder="Comment"
        rows="5"
        value={enteredComment}
        onChange={(e) => setEnteredComment(e.target.value)}
        className="flex-1 w-full p-2 bg-neutral-200 rounded-md outline-indigo-300"
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

export default CommentForm;
