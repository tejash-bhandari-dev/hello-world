import Card from "@/components/card";

//simple slot for revenue details in complex-dashboard.
export default function Revenue() {
    return (
        <Card title="Revenue" content={
            <div>
                <h3>Revenue Component</h3>
                <p>Total Revenue: $1,234,567</p>
                <p>Monthly Growth: 12%</p>
            </div>
        } />
    );
}
