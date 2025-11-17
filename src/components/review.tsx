import { MoreHorizontal, Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Samantha D.",
    date: "August 14, 2023",
    text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt!",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Alex M.",
    date: "August 15, 2023",
    text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. It definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ethan R.",
    date: "August 16, 2023",
    text: "This t-shirt is a must-have for anyone who appreciates good design. The pattern caught my eye immediately.",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Olivia P.",
    date: "August 17, 2023",
    text: "As a UI/UX enthusiast, I value simplicity. This t-shirt not only represents those principles but also feels great to wear.",
    rating: 5,
  },
  {
    id: 5,
    name: "Liam K.",
    date: "August 18, 2023",
    text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft and the design speaks volumes.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ava H.",
    date: "August 19, 2023",
    text: "I'm not just wearing a t-shirt; I’m wearing a piece of design philosophy. The details make it a conversation starter.",
    rating: 4.5,
  },
];

export default function ProductReviews(){
  return (
    <section className="max-w-8xl mx-auto px-6 py-16">

      
      <div className="flex justify-center gap-16  pb-4 border-b border-b-gray-400  text-gray-600 font-medium">
        <button className="hover:text-black hover:border-b-4 border-black ">Product Details</button>
        <button className="hover:text-black hover:border-b-4 border-black pb-2">
          Rating & Reviews
        </button>
        <button className="hover:text-black hover:border-b-4 border-black ">FAQs</button>
      </div>

      
      <div className="flex justify-between items-center mt-10 mb-6">
        <h2 className="text-xl font-bold">All Reviews (451)</h2>

        <div className="flex items-center gap-4">
          
          <div className="flex items-center gap-2 hover:bg-black hover:text-white border px-4 py-2 rounded-full text-sm">
            <span className="font-semibold">Latest</span>
            <span className="text-gray-500 text-xs">▼</span>
          </div>

          
          <button className="bg-white text-black hover:bg-black hover:text-white border px-5 py-2 rounded-full text-sm">
            Write a Review
          </button>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-6 ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 border rounded-2xl hover:border-blue-400 hover:shadow-grey shadow-sm hover:shadow-md transition "
          >
            
            <div className="flex items-center gap-1 text-yellow-400 mb-2">
              {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                <Star key={i} size={18} fill="gold" stroke="none" />
              ))}

              {review.rating % 1 !== 0 && (
                <Star size={18} fill="gold" stroke="none" className="opacity-50" />
              )}
            </div>

    
            <div className="flex justify-between items-center mb-3 ">
              <h3 className="font-semibold">{review.name}</h3>
              <MoreHorizontal className="text-gray-400 cursor-pointer" />
            </div>

            
            <p className="text-gray-600 text-sm leading-relaxed mb-4 ">
              "{review.text}"
            </p>

            
            <p className="text-gray-500 text-xs">
              Posted on {review.date}
            </p>
          </div>
        ))}
      </div>

    
      <div className="text-center mt-10">
        <button className="border px-8 py-3 rounded-full text-sm cursor-pointer hover:bg-black hover:text-white">
          Load More Reviews
        </button>
      </div>
    </section>
  );
};