import Categories from "./Categories";
import PostItem from "./PostItem";
import PostWidgets from "./PostWidgets";

const PostList = ({ title, posts }) => {
  return (
    <main className="wrapper">
      <h3 className="flex items-center gap-1 w-fit m-auto p-1 px-5 bg-white/70 rounded-full text-2xl font-bold">
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
      </h3>
      <section className="relative grid grid-cols-1 gap-5 m-auto py-3 sm:py-5 lg:grid-cols-12">
        <div className="grid gap-5 col-span-1 lg:col-span-8">
          {posts.map((post) => {
            return <PostItem key={post.createdAt} {...post} />;
          })}
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative grid gap-2 lg:sticky lg:top-20">
            <PostWidgets />
            <Categories />
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostList;
