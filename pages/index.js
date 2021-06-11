import Head from "next/head";
import Link from "next/link";
import DateFormat from "../components/DateFormat";
import { getSortedAllPostsData } from "../lib/posts";
import { Navibar } from "../components/Navigation";
import { Header } from "../components/Header";

export default function Home({ allPostsData }) {
  return (
    <div className="bg-ice-ivory bg-opacity-50">
      <Header />
      <Navibar />
      <div className="">
        <section className="">インデックスページ</section>
        <section className="">
          <h1 className="font-sans text-3xl">アサイーブログ記事一覧</h1>
          <ul className="grid grid-cols-fit content-around gap-12 justify-center">
            {/* 記事を表示する */}
            {allPostsData.map(({ id, blogFlag, date, title }) => (
              <div key={id} className="w-96">
                {blogFlag ? (
                  <Link href={`/posts/tech/${id}`}>
                    <a className="block max-w-96 h-auto overflow-hidden rounded-md shadow-md bg-japan-tea bg-opacity-25">
                      <li className="w-96">
                        <img
                          className="object-contain w-96 h-68"
                          src="/images/profile.jpg"
                          alt={id}
                        ></img>
                        <div className="w-96">
                          aa{title}
                          <br />
                          <small className="">
                            <DateFormat dateString={date} />
                          </small>
                        </div>
                      </li>
                    </a>
                  </Link>
                ) : (
                  <Link href={`/posts/hobby/${id}`}>
                    <a className="block w-96 h-auto overflow-hidden rounded-md shadow-md bg-japan-tea bg-opacity-25">
                      <li className="">
                        <img
                          className="object-contain w-96 h-68"
                          src="/images/sample.jpg"
                          alt={id}
                        ></img>
                        uu{title}
                        <br />
                        <small className="">
                          <DateFormat dateString={date} />
                        </small>
                      </li>
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
