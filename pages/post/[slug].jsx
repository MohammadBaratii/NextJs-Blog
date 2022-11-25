import { getPosts, getPostDetails } from "../../services";
import Author from "../../components/Author";
import Categories from "../../components/Categories";
import PostDetail from "../../components/PostDetail";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import PostWidgets from "../../components/PostWidgets";
import Head from "next/head";

const PostDetails = ({ post }) => {
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
          <CommentsForm slug={post.slug} />
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

export default PostDetails;

export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
};
