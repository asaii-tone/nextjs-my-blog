import Link from "next/link";

export function Navibar() {
  return (
    <nav>
      <ul className="flex flex-nowrap justify-center grid gap-4 grid-cols-2">
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
