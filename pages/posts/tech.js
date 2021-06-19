import Head from "next/head";
import Link from "next/link";
import DateFormat from "../../components/DateFormat";
import { getSortedTechPostsData } from "../../lib/posts";
import { Header } from "../../components/Header";
import { Navibar } from "../../components/Navigation";
export default function TechHome({ allPostsData }) {
  return (
    <div className="bg-ice-ivory bg-opacity-50 min-w-88">
      <Header />
      <Navibar />
      <div className="">
        <Head>…</Head>
        <section className="">
          <ul className="grid grid-cols-fit content-around gap-12 justify-center">
            {/* 記事を表示する */}
            {allPostsData.map(({ id, date, title, image }) => (
              <div key={id} className="w-88">
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
              </div>
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
