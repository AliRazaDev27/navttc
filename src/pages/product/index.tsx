import ProductDetails from "@/components/product-page";
import ProductReviews from "@/components/review";
import ProductRecommendations from "@/components/recomended-products";

export default function Product() {
  return (
    <div>
      <ProductDetails/>
      <ProductReviews/>
      <ProductRecommendations/>
    </div>
  )
}