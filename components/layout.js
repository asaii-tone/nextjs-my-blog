import Head from "next/head";
import classes from "./layout.module.css";
import Link from "next/link";
import { Header } from "./Header";

const name = "アサイー";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <main>{children}</main>
        {!home && (
          <div className={classes.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
