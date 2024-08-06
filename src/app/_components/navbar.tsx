import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-16 w-full border-b">
      <ul className="flex h-full w-full items-center justify-center gap-12">
        <li className="underline">
          <Link href="/post">New Post</Link>
        </li>
        <li className="underline">
          <Link href="/posts">All Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
