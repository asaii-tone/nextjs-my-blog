import Link from "next/link";

export function Navibar() {
  return (
    <div>
      <ul className="flex flex-nowrap justify-center">
        <li className="grid gap-x-8 gap-y-4">
          <Link href="/posts/tech">
            <a className="">TechBlog</a>
          </Link>
        </li>
        <li className="grid gap-x-8 gap-y-4">
          <Link href="/posts/hobby">
            <a>HobbyBlog</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
