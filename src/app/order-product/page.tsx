//this is client component. example of programmatically navigation to home page on click of button
"use client"
import { useRouter } from "next/navigation";
import React from "react";  
export default function OrderProductPage() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Button clicked!");
        //programmatically navigation to home page
        router.push("/");
    }
    return (
        <div>
            <h1>Order Product Page</h1> 
            <button onClick={handleClick} className="px-3 py-2 rounded text-white bg-blue-500 hover:bg-blue-600">Go to Home Page</button>
        </div>
    );
}
