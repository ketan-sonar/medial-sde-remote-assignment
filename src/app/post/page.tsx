"use client";

import { post } from "@/utils/actions";
import { useState } from "react";
import { toast } from "sonner";

export default function Posts() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    const res = await post(formData);
    if (res.post) {
      toast.success("Posted Successfully!");
    } else if (res.err) {
      toast.error("Could not post!");
    }
    setLoading(false);
  };

  return (
    <main className="mx-auto min-h-screen max-w-lg space-y-4 py-24">
      <h1 className="text-3xl font-bold">Post</h1>
      <form action={handleSubmit} className="grid gap-4">
        <label className="grid gap-1">
          Title
          <input type="text" name="title" className="rounded border p-2" />
        </label>
        <label className="grid gap-1">
          Content
          <textarea
            name="content"
            id="content"
            className="rounded border p-2"
          ></textarea>
        </label>
        <label className="grid gap-1">
          Image
          <input type="file" name="image" className="rounded border p-2" />
        </label>
        <button className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600">
          {loading ? "Loading..." : "Post"}
        </button>
      </form>
    </main>
  );
}
