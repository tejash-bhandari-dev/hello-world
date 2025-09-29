import Card from "@/components/card";
import Link from "next/link";

//simple slot component to display notifications in complex-dashboard.
export default function Notifications() {
    return (
        <Card title="Notifications" content={
            <>
                <h3>Notifications Component</h3>
                <Link href="/complex-dashboard/archived">Go to Archived Page</Link>
                <ul>
                    <li>Notification 1: New user signed up</li>
                    <li>Notification 2: Server CPU usage is high</li>
                    <li>Notification 3: New comment on your post</li>
                </ul>
            </>
        } />
    );
}