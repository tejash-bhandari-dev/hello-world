//simple component with link to display level 0 page.
import Link from "next/link";
export default function Page() {
    return (
        <div>
            <h2>Intercepting Example - Level 0 Page</h2>
            <p>This page demonstrates route interception in Next.js.</p>
            <Link href="/intercepting-0/l0">Go to Level 0 Page</Link>
        </div>
    );
}