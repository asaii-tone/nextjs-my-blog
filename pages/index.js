import Link from "next/link";
import DateFormat from "../components/DateFormat";
import { getSortedAllPostsData } from "../lib/posts";
import { Navibar } from "../components/Navigation";
import { Header } from "../components/Header";
import { FooterNav } from "../components/Footer";

export default function Home({ allPostsData }) {
  return (
    <div className="bg-ice-ivory bg-opacity-50 min-w-88">
      <Header />
      <Navibar />
      <section className="">
        <br />
        <h1 className="font-sans text-3xl truncate text-center">
          アサイーブログ記事一覧
        </h1>
        <ul className="grid grid-cols-fit content-around gap-12 justify-center">
          {/* 記事を表示する */}
          {allPostsData.map(({ id, blogFlag, date, title, image }) => (
            <div key={id} className="w-88">
              {blogFlag ? (
                <Link href={`/posts/tech/${id}`}>
                  <a className="block w-88 h-auto overflow-hidden rounded-md shadow-md bg-japan-tea bg-opacity-25">
                    <li className="w-88 hover:text-uiro-pink">
                      <img
                        className="object-contain w-88 h-64 align-top"
                        src={image}
                        alt={id}
                      ></img>
                      <div className="w-88">
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
                  <a className="block w-88 h-auto overflow-hidden rounded-md shadow-md bg-japan-tea bg-opacity-25">
                    <li className="w-88 hover:text-uiro-pink">
                      <img
                        className="object-contain w-88 h-64"
                        src={image}
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
      <FooterNav />
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
