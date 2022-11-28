import Head from "next/head";
import PostList from "../../components/PostList";
import { getPosts } from "../../services";

const AllPosts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="A Blog App using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList title={"All Posts"} posts={posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};

export default AllPosts;
