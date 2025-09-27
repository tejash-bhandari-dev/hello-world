import { notFound } from "next/navigation";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function Page({
    params
}: {
    params: Promise<{ reviewID: string, productID: string }>;
}) {
    const random = getRandomInt(2);
    if (random === 1) {
        console.log('Random error thrown!', random);
        throw new Error('Random error occurred!');
    }

    const { reviewID, productID } = await params;
    if (parseInt(reviewID) > 1000) {
        notFound();
    }

    return (
        <div>You are at review {reviewID} of product {productID}.</div>
    );
}