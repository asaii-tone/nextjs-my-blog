import Head from "next/head";
import Link from "next/link";
import DateFormat from "../components/date";
import { getSortedAllPostsData } from "../lib/posts";
import { Navibar } from "../components/Navigation";
import { Header } from "../components/Header";

export default function Home({ allPostsData }) {
  return (
    <div className="bg-ice-ivory bg-opacity-50">
      <Header />
      <Navibar />
      <div className="container mx-auto">
        <section className="">インデックスページ</section>
        <section className="">
          <h1 className="font-sans text-3xl">アサイーブログ記事一覧</h1>
          <ul className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-8">
            {/* 記事を表示する */}
            {allPostsData.map(({ id, blogFlag, date, title }) => (
              <div key={id}>
                {blogFlag ? (
                  <Link href={`/posts/tech/${id}`}>
                    <a>
                      <div className="w-auto h-auto overflow-hidden rounded-md shadow-md bg-japan-tea bg-opacity-25">
                        <li className="">
                          <img
                            className="object-contain w-full h-72"
                            src="/images/sample.jpg"
                            alt={id}
                          ></img>
                          aa{title}
                          <br />
                          <small className="">
                            <DateFormat dateString={date} />
                          </small>
                        </li>
                      </div>
                    </a>
                  </Link>
                ) : (
                  <Link href={`/posts/hobby/${id}`}>
                    <a>
                      <div className="w-auto h-auto overflow-hidden rounded-md shadow-md bg-japan-tea bg-opacity-25">
                        <li className="">
                          <img
                            className="object-contain w-full h-72"
                            src="/images/sample.jpg"
                            alt={id}
                          ></img>
                          uu{title}
                          <br />
                          <small className="">
                            <DateFormat dateString={date} />
                          </small>
                        </li>
                      </div>
                    </a>
                  </Link>
                )}
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
