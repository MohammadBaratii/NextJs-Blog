import Categories from "./Categories";
import PostItem from "./PostItem";
import PostWidgets from "./PostWidgets";

const PostList = ({ title, posts }) => {
  return (
    <main className="wrapper">
      <h3 className="w-fit m-auto p-1 px-5 bg-white/70 rounded-full text-2xl font-bold">
        {title}
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
