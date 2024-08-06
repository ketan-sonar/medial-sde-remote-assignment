import { getPosts } from "@/utils/actions";
import PostCard from "./_components/post-card";

export default async function Posts() {
  const res = await getPosts();
  if (res.err) {
    return <p>Could not get all posts!</p>;
  }

  const posts = res.posts!;

  return (
    <main className="mx-auto my-24 min-h-screen max-w-lg space-y-4">
      <h1 className="text-3xl font-bold">Posts</h1>
      {posts.length !== 0 ? (
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available</p>
      )}
    </main>
  );
}
