import Head from "next/head";
import Link from "next/link";

const name = "アサイー";
export const siteTitle = "Next.js Sample Website";

export function Header() {
  return (
    <header className="container max-w-full">
      <Head></Head>
      <div className="relative">
        <div
          className={"flex flex-col items-center absolute left-0 right-0 z-10"}
        >
          <Link href="/">
            <a className="border-2 rounded-full border-uiro-pink">
              <img
                src="/images/profile.png"
                className="block w-48 h-48"
                alt={name}
              />
            </a>
          </Link>
          <h1 className="">{name}</h1>
        </div>
        <div>
          <img
            src="/images/header1-8-2.jpg"
            className="block object-cover w-full h-80"
            alt="profile_headerイメージ"
          />
        </div>
      </div>
    </header>
  );
}
