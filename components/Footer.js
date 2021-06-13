import Link from "next/link";

export function FooterNav() {
  return (
    <footer>
      <div className="w-full border-b-2 border-uiro-pink h-16"></div>
      <br />
      <nav className="border-t-uiro-pink">
        <ul>
          <li className="border-uiro-pink rounded-t ">
            <Link href="https://twitter.com/asaii_tone">
              <a target="_blank">twitter</a>
            </Link>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
