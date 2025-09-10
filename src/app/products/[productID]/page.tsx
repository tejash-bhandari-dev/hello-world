import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: {
        productID: string;
    };
}

export const generateMetadata = async (
    { params }: Props
): Promise<Metadata> => {
    const { productID } = params;
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${productID}`);
        }, 100);
    });
    return {
        title: `Product ${title} page`,
        description: `This is the page for product ${productID}`
    };
};

const Product = async ({
    params
}: {
    params: Promise<{ productID: string }>;
}) => {
    const { productID } = await params;
    if (parseInt(productID) > 1000) {
        notFound();
    }
    return (
        <div>You are at product {productID} page.</div>
    );
};

export default Product;