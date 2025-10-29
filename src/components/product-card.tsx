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
        <div className="product-card">
            <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-brand">{product.brand}</p>
                <p className="product-description">{product.description}</p>
                <div className="product-price">
                    <span className="current-price">${discountedPrice}</span>
                    <span className="original-price">${product.price.toFixed(2)}</span>
                    <span className="discount">{product.discountPercentage}% off</span>
                </div>
                <div className="product-rating">
                    <span>Rating: {product.rating}</span>
                </div>
            </div>
            <div className='add-to-cart'>
                <button className='bg-red-500'>Add to Cart</button>
            </div>
        </div>
    );
}
