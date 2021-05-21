import Head from "next/head";
import Layout from "../../../components/layout";
import { getTechPostIds, getTechPostData } from "../../../lib/posts";
import Date from "../../../components/date";
import utilStyles from "../../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
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
