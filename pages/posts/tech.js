import Head from "next/head";
import Link from "next/link";
import DateFormat from "../../components/date";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getSortedTechPostsData } from "../../lib/posts";
import { Header } from "../../components/Header";
import { Navibar } from "../../components/Navigation";
import { ArticleListLayout } from "../../components/ArticleListLayout";

export default function TechHome({ allPostsData }) {
  return (
    <div>
      <Header />
      <Navibar />
      <div className="container mx-auto">
        <Head>…</Head>
        <section className={utilStyles.headingMd}>…</section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/tech/${id}`}>
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
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedTechPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
