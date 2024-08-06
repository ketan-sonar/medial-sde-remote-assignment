import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="h-[315px] w-[600] space-y-2 overflow-clip rounded border p-2">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-blue-800">Ketan</h2>
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={300}
            className="h-8 w-8"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <Image
            src={post.imageUrl}
            alt="Image"
            width={300}
            height={200}
            className="h-44 w-full rounded object-cover"
          />
          <p>{post.content}</p>
        </div>
      </div>
    </Link>
  );
}
