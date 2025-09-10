"use client";
import { usePathname } from "next/navigation";


export default function NotFound() {
    const pathname = usePathname();
    const productID = pathname.split('/')[2];
    const reviewID = pathname.split('/')[3];
    return (
        <div>
            <h1>
                Hi. Page not found for review {reviewID} of product {productID}
            </h1>
        </div>
    );
}
