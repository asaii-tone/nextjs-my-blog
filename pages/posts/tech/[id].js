import Head from "next/head";
import { getTechPostIds, getTechPostData } from "../../../lib/posts";
import Date from "../../../components/DateFormat";
import { Header } from "../../../components/Header";
import { Navibar } from "../../../components/Navigation";
import { FooterNav } from "../../../components/Footer";

export default function Post({ postData }) {
  return (
    <div className="min-h-screen bg-ice-ivory bg-opacity-50">
      <Header />
      <Navibar />
      <main>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className="block max-w-4xl mx-auto">
          <h1 className="mt-4 mb-1 mx-0 text-2xl font-extrabold tracking-nomal text-center">
            {postData.title}
          </h1>
          <div className="mb-4 text-center">
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
      <FooterNav />
    </div>
  );
}
export async function getStaticPaths() {
  const paths = getTechPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // "await" キーワードを以下のように追加する
  const postData = await getTechPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
