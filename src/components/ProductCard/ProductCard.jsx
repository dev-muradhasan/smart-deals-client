import { Link } from "react-router";

const ProductCard = ({ product }) => {
    const {
        _id,
        title,
        price_min,
        price_max,
        image,
        condition,
        usage,
    } = product;

    return (
        <div className="rounded-lg bg-white p-2 shadow-lg">
            {/* Product Image */}
            <div className="h-44 w-full overflow-hidden rounded-md">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="px-1 pt-2">
                <h3 className="min-h-12 text-base font-bold leading-5 text-[#001931]">
                    {title} - [ {condition} | {usage} ]
                </h3>

                {/* Price */}
                <p className="mt-2 text-sm font-semibold text-[#632EE3]">
                    $ {price_min} - {price_max}
                </p>

                {/* Details Button */}
                <Link
                    to={`/products/${_id}`}
                    className="btn mt-3 h-8 min-h-0 w-full rounded border-[#9F62F2] bg-transparent text-xs text-[#632EE3] hover:border-transparent hover:bg-linear-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-white"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;