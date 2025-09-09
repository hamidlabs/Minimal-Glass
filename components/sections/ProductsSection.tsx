import { Card, CardContent } from "@/components/ui/card";

export default function ProductsSection() {
  const categories = [
    { name: "Glass", id: "glass" },
    { name: "Meshes", id: "meshes" },
    { name: "Fabrics", id: "fabrics" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto">
        {/* Header section */}
       
        <div className="flex flex-col md:flex-row md:items-start justify-center gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16 text-center md:text-left px-4">
          {/* Left line + text */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="hidden md:block w-16 h-0.5 bg-gray-600 mr-2"></div>
            <div className="text-xs sm:text-sm text-third tracking-wider">
              Our products
            </div>
          </div>

          {/* Middle heading */}
          <div>
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl max-w-sm md:max-w-md font-light text-third leading-snug md:leading-tight mx-auto md:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
          </div>

          {/* Right paragraph */}
          <div>
            <p className="text-[#F0E6E2]/60 text-sm sm:text-base max-w-sm md:max-w-[220px] leading-relaxed mx-auto md:mx-0">
              Minimal glass creates custom-made glass doors, room dividers and
              more cabinets in all shapes and sizes. Get inspired.
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="bg-[#C4C4C4]/30 border-gray-600 transition-colors duration-300 group rounded-none"
            >
              <CardContent className="px-6 sm:px-7 py-16 sm:py-20 md:py-24 text-center">
                <div className="w-8 h-8 mx-auto flex items-center justify-center mb-4">
                  <div className="text-[#8F6A42]">{`0${index + 1}`}</div>
                </div>
                <h3 className="text-xl sm:text-2xl font-[Giplika] text-[#F0E6E2]">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
