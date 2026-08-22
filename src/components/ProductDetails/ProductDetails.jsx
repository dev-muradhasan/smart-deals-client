import { useLoaderData } from "react-router";


const ProductDetails = () => {

    const productInfo = useLoaderData();

    return (
        <div>
            products details
            {productInfo.title}
        </div>
    );
};

export default ProductDetails;