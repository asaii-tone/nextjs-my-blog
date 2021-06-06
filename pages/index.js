import Head from "next/head";
import Link from "next/link";
import DateFormat from "../components/date";
import ArticleListLayout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedAllPostsData } from "../lib/posts";
import { Navibar } from "../components/Navigation";
import { Header } from "../components/Header";

export default function Home({ allPostsData }) {
  return (
    <div>
      <Header />
      <Navibar />
      <div className="container mx-auto">
        <section className="">インデックスページ</section>
        <section className="">
          <h2 className="">Blog</h2>
          <ul className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4">
            {/* 記事を表示する */}
            {allPostsData.map(({ id, blogFlag, date, title }) => (
              <div
                className="w-auto h-auto overflow-hidden rounded-md shadow-md "
                key={id}
              >
                <img
                  className="object-contain w-auto h-52"
                  src="/images/sample.jpg"
                  alt={id}
                ></img>
                <div>
                  <li className="ml-2" key={id}>
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
                    <small className="">
                      <DateFormat dateString={date} />
                    </small>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </section>
      </div>
    </div>
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
