import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params: {
        productID: string;
    };
}

export const generateMetadata = async (
    { params }: Props
): Promise<Metadata> => {
    const { productID } = await params; // to avoid browser warning 
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${productID}`);
        }, 5000);
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
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${productID}`);
        }, 5000);
    });
    return (
        <div>You are at product {productID} page. Title {title}.</div>
    );
};

export default Product;