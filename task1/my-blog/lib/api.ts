import { Post, Author } from "@/types";

const authors: Author[] = [
  {
    id: "1",
    name: "John Doe",
    bio: "Tech writer",
    avatar: "/avatars/john.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "React expert",
    avatar: "/avatars/jane.jpg",
  },
];

const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content:
      "Next.js is a React framework that enables server-side rendering...",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },

  {
    id: "2",
    title: "Understanding SSR",
    content:
      "Server-side rendering allows pages to be generated on every request.",
    author: "2",
    date: "2026-03-01",
    tags: ["ssr", "nextjs"],
    readTime: 6,
  },

  {
    id: "3",
    title: "Blocking Test",
    content:
      "Testing fallback blocking...",
    author: "1",
    date: "2026-03-01",
    tags: ["test"],
    readTime: 3,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(
  id: string
): Promise<Post | undefined> {
  return posts.find((p) => p.id === id);
}

export async function getAuthorById(
  id: string
): Promise<Author | undefined> {
  return authors.find((a) => a.id === id);
}