import { ProductCard } from "../landing-page/product-card.tsx";
import Product1 from "@/assets/product-images/image7.png";
import Product2 from "@/assets/product-images/image8.png";
import Product3 from "@/assets/product-images/image9.png";
import Product4 from "@/assets/product-images/image10.png";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    image: Product1,
    name: "Black Cotton T-Shirt",
    price: 120,
    rating: 4.5,
  },
  {
    id: 2,
    image: Product2,
    name: "Blue Regular Jeans",
    price: 240,
    oldPrice: 260,
    rating: 3.5,
  },
  {
    id: 3,
    image: Product3,
    name: "Orange Check Shirt",
    price: 180,
    rating: 4.5,
  },
  {
    id: 4,
    image: Product4,
    name: "Red Hoodie",
    price: 130,
    oldPrice: 160,
    rating:3.5,
  },
];

export function NewArrivals() {
  return (
    <section className="w-full px-4 md:px-12 mt-10 border-b-1 border-gray-300 pb-13  ">
      <h2 className=" text-xl md:text-2xl font-black text-center mb-6 ">
        NEW ARRIVALS
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            rating={item.rating}
            price={item.price}
            oldPrice={item.oldPrice}
            
          />
        ))}
      </div>
      <Link
        to="#"
        className="hover:bg-black hover:text-white hover:border mx-auto border border-gray-300 block text-center w-full md:w-fit bg-white text-black px-10 py-2.5 rounded-4xl mt-6"
      >
        View All
      </Link>
    </section>
  );
}
