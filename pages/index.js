import Head from "next/head";
import Link from "next/link";
import DateFormat from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedAllPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Link href="/posts/tech">
        <a>TechBlog</a>
      </Link>
      <Link href="/posts/hobby">
        <a>HobbyBlog</a>
      </Link>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, blogFlag, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {blogFlag ? (
                <Link href={`/posts/tech/${id}`}>
                  <a>aa{title}</a>
                </Link>
              ) : (
                <Link href={`/posts/hobby/${id}`}>
                  <a>uu{title}</a>
                </Link>
              )}
              <br />
              <small className={utilStyles.lightText}>
                <DateFormat dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedAllPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
