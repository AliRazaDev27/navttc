import type { Product } from '../../types/index';
export default function ProductCard({ product }: { product: Product }) {
    console.log(product)
    if (!product) {
        return null;
    }
    const discountedPrice = (
        product.price -
        (product.price * product.discountPercentage) / 100
    ).toFixed(2);
    return (
        <div className="flex flex-col bg-[#cfcaca] border border-[#ccc] rounded-lg overflow-hidden w-[300px]">
            <div>
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold m-0 line-clamp-1">{product.title}</h2>
                <p className="text-sm text-[#666] mx-0 my-1">{product.brand}</p>
                <p className="text-sm mx-0 my-2 line-clamp-3">{product.description}</p>
                <div className="flex items-center mx-0 my-2">
                    <span className="text-[1.2rem] font-bold text-[#e91e63]">${discountedPrice}</span>
                    <span className="text-[[0.9rem] text-[#635f5f] line-through ml-2">${product.price.toFixed(2)}</span>
                    <span className="text-[0.8rem] text-white bg-[#e91e63] px-1 py-2 rounded-sm ml-2 ">{product.discountPercentage}% off</span>
                </div>
                <div className="text-[0.9rem] mx-0 my-2">
                    <span>Rating: {product.rating}</span>
                </div>
            </div>
            <div className='mt-auto'>
                <button className='bg-blue-600 hover:bg-blue-700 w-full p-2.5 text-white rounded-lg cursor-pointer text-base'>
                Details
                </button>
            </div>
        </div>
    );
}
