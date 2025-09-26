import { notFound } from "next/navigation";
const Page = async ({
    params
}: {
    params: Promise<{ productID: string }>;
}) => {
    const { productID } = await params;
    if (parseInt(productID) > 1000) {
        notFound();
    }
    return (
        <div>You are at reviews of product {productID} page.</div>
    );
}

export default Page;    