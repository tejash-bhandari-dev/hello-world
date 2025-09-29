import Card from "@/components/card";

//simple slot component to display users analytics in complex-dashboard.
export default function Users() {
    return (
        <Card title="Users" content={
            <div>
                <h3>Users Component</h3>
                <p>Total Users: 45,678</p>
                <p>Active Users: 12,345</p>
            </div>} />
    );
}