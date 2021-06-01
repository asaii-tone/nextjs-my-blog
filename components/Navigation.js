import Link from "next/link";

export function Navibar() {
  return (
    <div>
      <ul className="flex flex-nowrap justify-center grid gap-4 grid-cols-2">
        <li className="text-center">
          <Link href="/posts/tech">
            <a className="hover:text-uirow-pink">TechBlog</a>
          </Link>
        </li>
        <li className="text-center">
          <Link href="/posts/hobby">
            <a className="hover:text-uirow-pink">HobbyBlog</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
