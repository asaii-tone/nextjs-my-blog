import Link from "next/link";

export function Navibar() {
  return (
    <nav>
      <ul className="grid justify-center gap-4 grid-cols-3">
        <li className="text-center">
          <Link href="/">
            <a className="hover:text-uiro-pink">Home</a>
          </Link>
        </li>
        <li className="text-center">
          <Link href="/posts/tech">
            <a className="hover:text-uiro-pink">TechBlog</a>
          </Link>
        </li>
        <li className="text-center">
          <Link href="/posts/hobby">
            <a className="hover:text-uiro-pink">HobbyBlog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
