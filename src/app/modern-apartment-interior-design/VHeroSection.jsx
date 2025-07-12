import Image from "next/image";

const VHeroSection = () => {
  const suggestions = [
    {
      title: "New Hotel Interior Ideas To Make Your Hotel Spaces Luxury",
      age: "4 years ago",
      image: "/images/hotel.jpg", // Replace with actual path
    },
    {
      title: "Best Kids Room Interior Design Ideas | Tips To Decorate Your Kids Room",
      age: "4 years ago",
      image: "/images/kids-room.jpg", // Replace with actual path
    },
    {
      title: "Best Wallpaper Shops In Dubai",
      age: "3 years ago",
      image: "/images/wallpaper.jpg", // Replace with actual path
    },
    {
      title: "7 Inspiring Home Renovation Design Ideas You Need to Know",
      age: "1 year ago",
      image: "/images/renovation.jpg", // Replace with actual path
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white mt-20">
      {/* Responsive layout: blog on left, sidebar on right for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        {/* Blog Content */}
        <div>
          <div className="text-sm mb-4 text-[#caa193]">
            <p>June 10, 2022 • No Comments</p>
          </div>

          <h1 className=" text-white text-3xl font-conthrax leading-tight py-10">
           Modern Apartment Interior Design in Dubai - 5 Essential Design Tips 
          </h1>

          <div className="space-y-6">
            <Image
              src="/images/laundry-1.jpg"
              alt="Modern Laundry Room Design 1"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
            <Image
              src="/images/laundry-2.jpg"
              alt="Modern Laundry Room Design 2"
              width={800}
              height={600}
              className="rounded-md w-full object-cover"
            />
          </div>

          <div className="mt-8 space-y-4 text-lg leading-relaxed">
            <p>
              The laundry room is probably the last when people think of
              decorating a room. It is easier to just put clothes in a room
              without even keeping things aligned, but this will ultimately ruin
              the overall look of your home.
            </p>
            <p>
              Every space in your home must be well-decorated and clean. The
              laundry room is the most important part...
            </p>
          </div>

          {/* Sidebar (Mobile View) */}
          <div className="mt-12 md:hidden">
            <Sidebar suggestions={suggestions} />
          </div>
        </div>

        {/* Sidebar (Desktop View) */}
        <div className="hidden md:block">
          <Sidebar suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
};

// Sidebar component
const Sidebar = ({ suggestions }) => (
  <div>
    <h3 className="text-xl font-conthrax mb-4 mt-16 text-[#caa193]">You might also like</h3>
    <ul className="space-y-4">
      {suggestions.map((post, index) => (
        <li key={index} className="flex space-x-4">
          <div className="w-20 h-16 bg-gray-200 rounded-md overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-play">{post.title}</p>
            <p className="text-xs text-[#caa193]">{post.age}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default VHeroSection;
