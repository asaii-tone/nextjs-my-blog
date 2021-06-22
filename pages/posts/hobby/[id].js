import Head from "next/head";
import { getHobbyPostIds, getHobbyPostData } from "../../../lib/posts";
import Date from "../../../components/DateFormat";
import { Header } from "../../../components/Header";
import { Navibar } from "../../../components/Navigation";
import { FooterNav } from "../../../components/Footer";

export default function Post({ postData }) {
  return (
    <div className="min-h-full bg-ice-ivory bg-opacity-50">
      <Header />
      <Navibar />
      <main>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article className="">
          <h1 className="mt-4 mb-1 mx-0 text-2xl font-extrabold tracking-nomal">
            {postData.title}
          </h1>
          <div className="mb-4">
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
