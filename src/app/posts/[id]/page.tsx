import prisma from "@/utils/db";
import PostCard from "../_components/post-card";


export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({ where: { id: params.id } });
  if (post === null) {
    return <p>Unavailable</p>;
  }

  return (
    <main className="mx-auto max-w-lg py-24">
      <PostCard post={post} />
    </main>
  );
}
