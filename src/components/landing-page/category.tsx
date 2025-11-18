import casual from "@/assets/product-images/casual.png";
import formal from "@/assets/product-images/formal.png";
import party from "@/assets/product-images/party.png";
import gym from "@/assets/product-images/Gym.png";
export function Category() {
  const items = [
    {
      title: "Casual",
      image: casual,
      width: "md:w-[400px]",
    },
    {
      title: "Formal",
      image: formal,
      width: "md:w-[599px]",
    },
    {
      title: "Party",
      image: party,
      width: "md:w-[599px]",
    },
    {
      title: "Gym",
      image: gym,
      width: "md:w-[400px]",
    },
  ];
  return (
    <section className="w-full px-4 md:px-12 mt-10">
      <div className="bg-[#F0F0F0] rounded-2xl md:h-146 h-240">
        <h1 className="text-center font-black text-3xl md:text-5xl md:pt-12 pt-4">
          BROWSE BY <br className="md:hidden" /> DRESS STYLE
        </h1>
        <div className="flex flex-wrap justify-center gap-4 px-6 md:my-12 my-3">
          {items.map((item) => (
            <div
              key={item.title}
              style={{ backgroundImage: `url(${item.image})` }}
              className={`bg-cover bg-center rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer transitio h-[200px] flex flex-col hover:scale-105 w-full ${item.width}`}>
              <div className="p-3 text-lg font-medium">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
