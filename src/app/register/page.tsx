"use client";

import { registerUser } from "@/utils/actions";
import { useState } from "react";
import { toast } from "sonner";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    const res = await registerUser(formData);
    if (res.user) {
      toast.success("Registered Successfully!");
    } else if (res.err) {
      toast.error("Error!");
    }
    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-lg space-y-4 py-24">
      <h1 className="text-3xl font-bold">Register</h1>
      <form action={handleSubmit} className="grid gap-4">
        <label className="grid gap-1">
          Username
          <input type="text" name="username" className="rounded border p-2" />
        </label>
        <label className="grid gap-1">
          Password
          <input type="text" name="password" className="rounded border p-2" />
        </label>
        <button
          disabled={loading}
          className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </main>
  );
}
