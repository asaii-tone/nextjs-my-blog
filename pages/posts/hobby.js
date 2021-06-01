import Head from "next/head";
import Link from "next/link";
import DateFormat from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { getSortedHobbyPostsData } from "../../lib/posts";
import Layout, { siteTitle } from "../../components/layout";
import { Header } from "../../components/Header";
import { Navibar } from "../../components/Navigation";
import { ArticleListLayout } from "../../components/ArticleListLayout";

export default function HobbyHome({ allPostsData }) {
  return (
    <div>
      <Header />
      <Navibar />
      <ArticleListLayout>
        <Head>…</Head>
        <section className={utilStyles.headingMd}>…</section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/hobby/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <DateFormat dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </ArticleListLayout>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedHobbyPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
