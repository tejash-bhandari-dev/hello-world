// component lint to l1 page
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h2>Level 1 Page</h2>
            <Link href="/intercepting-2/l2">Go to Level 2 Page</Link>
            <br />
            <Link href="/about">Go to about Page</Link>
        </div>
    );
}