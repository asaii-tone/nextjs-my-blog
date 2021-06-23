import Link from "next/link";
import DateFormat from "../../components/DateFormat";
import { getSortedHobbyPostsData } from "../../lib/posts";
import { Header } from "../../components/Header";
import { Navibar } from "../../components/Navigation";
import { FooterNav } from "../../components/Footer";

export default function HobbyHome({ allPostsData }) {
  return (
    <div className="min-h-screen bg-ice-ivory bg-opacity-50">
      <Header />
      <Navibar />
      <section className="">
        <br />
        <h1 className="font-sans text-3xl truncate text-center">
          趣味ブログ記事一覧
        </h1>
        <ul className="grid grid-cols-fit content-around gap-12 justify-center">
          {/* 記事を表示する */}
          {allPostsData.map(({ id, blogFlag, date, title, image }) => (
            <div key={id} className="w-88">
              <Link href={`/posts/hobby/${id}`}>
                <a className="block w-88 h-auto overflow-hidden rounded-md shadow-md bg-japan-tea bg-opacity-25 hover:text-uiro-pink">
                  <li className="w-88">
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
            </div>
          ))}
        </ul>
      </section>
      <FooterNav />
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
