import Head from "next/head";
import PostList from "../../components/PostList";
import { getCategories, getCategoryPost } from "../../services";

const Category = ({ posts, category }) => {
  return (
    <>
      <Head>
        <title>{category.name}</title>
        <meta name="description" content="A Blog App using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostList title={category.name} posts={posts} />
    </>
  );
};

export const getServerSideProps = async ({ query: { slug } }) => {
  const posts = await getCategoryPost(slug);
  const category = await getCategories().then((category) =>
    category.find((category) => category.slug === slug)
  );

  return {
    props: { posts, category },
  };
};

export default Category;
