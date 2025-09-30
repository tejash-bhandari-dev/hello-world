// component lint to l1 page
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <h2>Level 0 Page</h2>
            <Link href="/intercepting-2/l0/l1">Go to Level 1 Page</Link>
        </div>
    );
}