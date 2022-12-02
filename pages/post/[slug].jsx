import { getPosts, getPostDetails } from "../../services";
import Author from "../../components/Author";
import Categories from "../../components/Categories";
import PostDetail from "../../components/PostDetail";
import Comments from "../../components/Comments";
import CommentForm from "../../components/CommentForm";
import PostWidgets from "../../components/PostWidgets";
import Head from "next/head";
import { useSession } from "next-auth/react";
import Link from "next/link";

const PostDetails = ({ post }) => {
  const { status } = useSession();
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <section className="wrapper relative grid grid-cols-1 gap-5 m-auto py-10 lg:grid-cols-12">
        <div className="grid gap-5 col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          {status === "authenticated" ? (
            <CommentForm slug={post.slug} />
          ) : (
            <p className="p-5 bg-white rounded-xl">
              You need to{" "}
              <Link
                href="/auth/signin"
                className="text-indigo-500 underline decoration-indigo-500"
              >
                Sign In
              </Link>{" "}
              to send comment.
            </p>
          )}
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4 ">
          <div className="relative grid gap-2 lg:sticky lg:top-20">
            <PostWidgets
              slug={post.slug}
              category={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export default PostDetails;
