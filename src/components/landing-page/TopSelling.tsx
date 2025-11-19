import { ProductCard } from "../landing-page/product-card.tsx";
import Product1 from "@/assets/product-images/image11.png";  
import Product2 from "@/assets/product-images/image12.png";  
import Product3 from "@/assets/product-images/image13.png";  
import Product4 from "@/assets/product-images/image14.png";  
import { Link } from "react-router";
const products = [
  {
    id: 1,
    image: Product1,
    name: "VERTICAL STRIPED SHIRT",
    price: 212,
    oldPrice: 232,
    rating: 5,
  },
  {
    id: 2,
    image:Product2,
    name: "COURAGE GRAPHIC T-SHIRT",
    price: 145,
    rating: 5,
  },
  {
    id: 3,
    image: Product3,
    name: "LOOSE FIT BERMUDA SHORTS",
    price: 80,
    rating: 4.5,
  },
  {
    id: 4,
    image:Product4,
    name: "FADED SKINNY JEANS",
    price:210,
    rating: 4.1,
  },
];

export function TopSelling() {
  return (
    <section className="w-full px-4 md:px-12 mt-10">
      <h2 className=" text-xl md:text-2xl font-black text-center mb-6">
        TOP SELLING
      </h2>

      <div
        className="
          flex gap-0overflow-x-auto  md:grid  md:grid-cols-4  md:gap-2 pb-4" >
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            rating={item.rating}
          />
        ))}
      </div>
      <Link
        to="#"
        className=" mx-auto border border-gray-300 block text-center w-full md:w-fit bg-white text-black px-10 py-2.5 rounded-4xl"
      >
        View All
      </Link>
    </section>
  );
}
