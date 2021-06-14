import Link from "next/link";

export function FooterNav() {
  return (
    <footer>
      <div className="w-full border-b-2 border-uiro-pink h-16"></div>
      <br />
      <nav className="border-t-uiro-pink">
        <ul className="grid justify-center gap-4 grid-cols-2">
          <li className="border-uiro-pink rounded-t text-center">
            <Link href="https://twitter.com/asaii_tone">
              <a target="_blank" className="hover:text-uiro-pink">
                twitter
              </a>
            </Link>
          </li>
          <li className="text-center">
            <Link href="/">
              <a className="hover:text-uiro-pink">home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
