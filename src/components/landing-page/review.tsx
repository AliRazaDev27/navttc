import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

interface Review {
  name: string;
  message: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Sarah M.",
    message:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. Every piece I've bought has exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Alex K.",
    message:
      "Finding clothes that align with my style was a challenge until I discovered Shop.co. Their range is amazing and fits every occasion.",
    rating: 5,
  },
  {
    name: "James L.",
    message:
    "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    name: "Moeen",
    message:
          "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5,
  },
  {
    name: "Paul",
    message:
      "As someone who loves unique fashion, I'm thrilled with Shop.co. Their collection is diverse and always on-trend.",
    rating: 5,
  },
  {
    name: "Jack",
    message:
      "As someone who loves unique fashion, I'm thrilled with Shop.co. Their collection is diverse and always on-trend.",
    rating: 5,
  },
];

export function Review() {
 const [index, setIndex] = useState(0);
const reviewsPerSlide = window.innerWidth < 768 ? 1 : 3;
// Calculate
const maxIndex = Math.ceil(reviews.length / reviewsPerSlide) - 1;
// Go to NEXT slid
const next = () => {
  if (index >= maxIndex) {
    setIndex(0);  // loop go to first
  } else {
    setIndex(index + 1);
  }
};

// Go to PREVIOUS slide
const prev = () => {
  if (index <= 0) {
    setIndex(maxIndex); 
  } else {
    setIndex(index - 1);
  }
};
  return (
    <section className="w-full my-10 px-4 md:px-12">
      <div className="flex justify-between items-center px-2 md:px-4">
        <h1 className="text-4xl md:text-5xl font-black">OUR HAPPY CUSTOMERS</h1>
         {/* Mobile Buttons */}
        <div className="flex relative top-13 right-4 gap-3 px-4 md:hidden ">
          <button
            onClick={prev}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
            <ChevronRight size={20} />
          </button>
        </div>
        {/* Buttons */}
        <div className="hidden md:flex gap-3 cursor-pointer">
          <button
            onClick={prev}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
       

      {/* SLIDER */}
      <div className="relative mt-6 overflow-hidden  ">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[39%] p-4 md:p-3"
            >
              <div className="border rounded-xl p-5 shadow-sm bg-white cursor-pointer hover:bg-gray-50  h-50">
                {/* Stars */}
                <div className="text-yellow-500 text-lg mb-2">
                  {"★".repeat(r.rating)}
                </div>

                <h3 className="font-bold flex items-center gap-1">
                  {r.name} <Check className="text-green-600" size={16} />
                </h3>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  "{r.message}"
                </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}
