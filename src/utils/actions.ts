"use server";

import { put } from "@vercel/blob";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export async function registerUser(formData: FormData) {
  try {
    const user = await prisma.user.create({
      data: {
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      },
    });

    return {
      user,
    };
  } catch (err: any) {
    console.log(err);
    return {
      err: "Could not register!",
    };
  }
}

export async function post(formData: FormData) {
  try {
    const user = await prisma.user.findUnique({ where: { username: "ketan" } });
    if (user === null) {
      return {
        err: "User not found!",
      };
    }

    const image = formData.get("image") as File | null;
    if (image === null) {
      return {
        err: "No Image Provided!",
      };
    }

    const imageBlob = await put(
      `images/${user.id}/${new Date().toLocaleString()}`,
      image,
      { access: "public" },
    );

    revalidatePath("/posts");

    const post = await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        imageUrl: imageBlob.url,
        userId: user.id,
      },
    });

    return { post };
  } catch (err: any) {
    return {
      err: "Counld not post!",
    };
  }
}

export async function getPosts() {
  try {
    const user = await prisma.user.findUnique({ where: { username: "ketan" } });
    if (user === null) {
      return {
        err: "User not found!",
      };
    }

    const posts = await prisma.post.findMany({ where: { userId: user.id } });
    return { posts };
  } catch (err: any) {
    return { err: "Could not get posts!" };
  }
}
