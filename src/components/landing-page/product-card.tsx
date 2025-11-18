type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number;
};

export function ProductCard({
  image,
  name,
  price,
  oldPrice,
  rating,
}: ProductCardProps) {
  const numericRating = rating ? parseFloat(String(rating)) : 0;
  const fullStars = Math.floor(numericRating);
  const hasHalf = numericRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  // discount
  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : 0;

  return (
    <div className="bg-white border border-gray-300 rounded-md cursor-pointer hover:scale-105 transition p-4 min-w-[150px] md:min-w-0">
      {/* Image */}
      <div className="bg-[#F0EEED] flex justify-center rounded-md h-auto">
        <img
          src={image}
          alt={name}
          className="w-full block md:h-60 rounded-md"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col mt-2 md:mt-2">
        <h3 className="font-bold text-sm">{name}</h3>

        {/* Rating */}
        {rating !== undefined && (
          <div className="flex items-center gap-2 mt-1 text-yellow-500 text-sm">
            <div>
              {"★".repeat(fullStars)}
              {hasHalf && "⯨"}
              {"☆".repeat(emptyStars)}
            </div>
            <div className="text-black font-medium">
              {numericRating.toFixed(1)}/5
            </div>
          </div>
        )}

        {/* Price andDiscount */}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-bold text-lg">${price}</span>

          {oldPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${oldPrice}
            </span>
          )}

          {discount > 0 && (
            <span className="bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
              -{discount}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
