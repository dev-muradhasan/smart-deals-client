import { use } from "react";
import ProductCard from "../ProductCard/ProductCard";
import MyContainer from "../../MyContainer/MyContainer";
import { Link } from "react-router";


const LatestProducts = ({ latestProductsPromise }) => {
    
    const products = use(latestProductsPromise);

    return (
        <MyContainer className={'py-10'}>
            <h2 className="font-bold text-5xl text-center py-6">Recent <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Products</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
           </div>
            <button className="block mx-auto"><Link to={'/allProducts'} className="btn btn-gradient my-6 w-40">Show All</Link></button>
        </MyContainer>
    );
};

export default LatestProducts;