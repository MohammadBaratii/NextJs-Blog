import Layout from "../components/Layout";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#6366f1" height={6} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
