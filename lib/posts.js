import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const techPostsDirectory = path.join(process.cwd(), "posts/tech");
const hobbyPostsDirectory = path.join(process.cwd(), "posts/hobby");

export function getPostsDataFunction(directory, blogFlag) {
  // /posts　配下のファイル名を取得する
  const fileNames = fs.readdirSync(directory);
  const allPostsData = fileNames.map((fileName) => {
    // id を取得するためにファイル名から ".md" を削除する
    const id = fileName.replace(/\.md$/, "");

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // 投稿のメタデータ部分を解析するために gray-matter を使う
    const matterResult = matter(fileContents);

    // データを id と合わせる
    return {
      id,
      blogFlag,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

export function getSortedTechPostsData() {
  //投稿をデータと合わせる
  const allPostsData = getPostsDataFunction(techPostsDirectory, true);
  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getSortedHobbyPostsData() {
  // /posts　配下のファイル名を取得する
  const allPostsData = getPostsDataFunction(hobbyPostsDirectory, false);
  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getSortedAllPostsData() {
  const techAllPostsData = getPostsDataFunction(techPostsDirectory, true);
  const hobbyAllPostsData = getPostsDataFunction(hobbyPostsDirectory, false);
  const allPostsData = [...techAllPostsData, ...hobbyAllPostsData];
  // 投稿を日付でソートする
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostIdsFunction(directory) {
  const fileNames = fs.readdirSync(directory);

  // 以下のような配列を返します:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getTechPostIds() {
  return getPostIdsFunction(techPostsDirectory);
}
export function getHobbyPostIds() {
  return hobbyPostsDirectory(hobbyPostsDirectory);
}

export async function getPostDataFunction(id, directory) {
  const fullPath = path.join(directory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents);

  // マークダウンを HTML 文字列に変換するために remark を使う
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データを id および contentHtml と組み合わせる
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
export function getTechPostData(id) {
  return getPostDataFunction(id, techPostsDirectory);
}
export function getHobbyPostData(id) {
  return getPostDataFunction(id, hobbyPostsDirectory);
}
