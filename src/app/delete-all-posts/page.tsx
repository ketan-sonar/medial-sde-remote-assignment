import prisma from "@/utils/db";

export default async function DeleteAllPosts() {
  await prisma.post.deleteMany();
  return <p>Deleted!</p>;
}
