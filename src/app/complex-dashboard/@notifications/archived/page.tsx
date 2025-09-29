//simple component to display component name and Link to complex-dashboard page.
import Card from "@/components/card";
import Link from "next/link";

export default function Archived() {
    return (
        <Card title="Archived Notifications" content={
            <>
                <h3>Archived Notifications Component</h3>
                <Link href="/complex-dashboard">Go to Dashboard</Link>
                <ul>
                    <li>Archived Notification 1: Password changed successfully</li>
                    <li>Archived Notification 2: Subscription renewed</li>
                    <li>Archived Notification 3: New message from support</li>
                </ul>
            </>
        } />
    );
}