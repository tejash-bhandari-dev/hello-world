import Link from "next/link";

const Products = () => {
    const productId = 2;
    return (
        <>
            <div>
                <Link href="/">Home</Link>
            </div>
            <h1>Product List</h1>
            <ul>
                <li>
                    <Link href="/products/1">Product 1</Link>
                </li>
                <li>
                    {/* template literal */}
                    <Link href={`/products/${productId}`}> Product {productId} </Link>
                </li>
                <li>
                    {/* replace prop replaces the current history state 
                    instead of adding a new URL into the browser history stack */}
                    <Link href="/products/3" replace>Product 3</Link>
                </li>
            </ul >
        </>
    );
}

export default Products;