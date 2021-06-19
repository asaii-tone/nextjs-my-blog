import Head from "next/head";
import { getTechPostIds, getTechPostData } from "../../../lib/posts";
import Date from "../../../components/DateFormat";
import { Header } from "../../../components/Header";
import { Navibar } from "../../../components/Navigation";

export default function Post({ postData }) {
  return (
    <main>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header />
      <Navibar />
      <article>
        <h1 className="text-5xl">{postData.title}</h1>
        <div className="">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </main>
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
