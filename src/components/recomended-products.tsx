import { Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
  ratingCount: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Polo with Contrast Trims",
    price: 212,
    oldPrice: 242,
    discount: "-20%",
    rating: 4.0,
    ratingCount: 5,
    image: "/polo-blue.png",
  },
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    ratingCount: 5,
    image: "/gradient-tshirt.png",
  },
  {
    id: 3,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    ratingCount: 5,
    image: "/polo-pink.png",
  },
  {
    id: 4,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    discount: "-30%",
    rating: 5,
    ratingCount: 5,
    image: "/black-strips.png",
  },
];

export default function RecommendedProducts(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        YOU MIGHT ALSO LIKE
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
          >
            {/* Image Box */}
            <div className="w-full bg-gray-100 rounded-2xl overflow-hidden p-4 border border-transparent group-hover:border-blue-400  transition duration-300 group-hover:scale-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-contain"
              />
            </div>

            {/* Name */}
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
              {Array.from({ length: Math.floor(product.rating) }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="gold"
                  stroke="none"
                />
              ))}
              {/* Half star */}
              {product.rating % 1 !== 0 && (
                <Star size={16} fill="gold" stroke="none" className="opacity-50" />
              )}

              <span className="text-gray-500 ml-1">
                {product.rating}/{product.ratingCount}
              </span>
            </div>

            {/* Prices */}
            <div className="mt-2 flex items-center gap-3">
              <span className="text-lg font-bold">${product.price}</span>

              {product.oldPrice && (
                <span className="text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              )}

              {product.discount && (
                <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">
                  {product.discount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};