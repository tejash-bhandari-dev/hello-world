// card component to display complex-dashboard data.
import React from 'react';

interface CardProps {
    title: string;
    content: React.ReactNode;
}
export default function Card({ title, content }: CardProps) {
    return (
        <div style={{ border: '1px solid gray', borderRadius: '5px', padding: '10px', margin: '10px' }}>
            <h3>{title}</h3>
            <div>{content}</div>
        </div>
    );
}
