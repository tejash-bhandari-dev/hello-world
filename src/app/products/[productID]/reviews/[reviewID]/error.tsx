"use client";
import Link from "next/link";
import Router from "next/router";
//client side rendering. simple error boundary for error handling return message.
export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }; // Next.js recommends this shape
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
            <Link href="/" onClick={() => Router.reload()}>Go to Home</Link>
        </div>
    );
}