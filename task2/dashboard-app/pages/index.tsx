import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>SSR: Dashboard Demo</h1>

      <ul>
        <li>
          <Link href="/dashboard">Dashboard (SSR)</Link>
        </li>

        <li>
          <Link href="/about">About (SSG)</Link>
        </li>

        <li>
          <Link href="/about-ssr">About (SSR)</Link>
        </li>
      </ul>
    </div>
  );
}