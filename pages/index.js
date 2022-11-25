import Head from "next/head";
import PostList from "../components/PostList";
import { getFeaturedPosts } from "../services";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="A Blog App using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList title={"Featured Posts"} posts={posts} />
    </>
  );
}

export const getStaticProps = async () => {
  const posts = (await getFeaturedPosts()) || [];

  return {
    props: { posts },
  };
};
