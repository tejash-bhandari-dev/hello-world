import Link from "next/link";

export default function Home() {
  const styleClass = "px-3 py-2 rounded text-blue-500 hover:bg-blue-100";
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <Link href="/blog" className={styleClass}>Blog</Link>
      <Link href="/counter" className={styleClass}>Counter</Link>
      <Link href="/products" className={styleClass}>Products</Link>

      <Link href="/articles/breaking-news-1?lang=en" className={styleClass}>Read in English</Link>
      <Link href="/articles/breaking-news-1?lang=fr" className={styleClass}>Read in French</Link>
    </>
  );
}
