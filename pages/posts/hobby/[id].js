import Head from "next/head";
import { getHobbyPostIds, getHobbyPostData } from "../../../lib/posts";
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
      <article className="">
        <h1 className="">{postData.title}</h1>
        <div className="">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </main>
  );
}
export async function getStaticPaths() {
  const paths = getHobbyPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // "await" キーワードを以下のように追加する
  const postData = await getHobbyPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
