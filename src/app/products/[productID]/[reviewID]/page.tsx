import { notFound } from "next/navigation";

export default async function Page({
    params
}: {
    params: Promise<{ reviewID: string, productID: string }>;
}) {
    const { reviewID, productID } = await params;
    if (parseInt(reviewID) > 1000) {
        notFound();
    }
    return (
        <div>You are at review {reviewID} of product {productID}.</div>
    );
}