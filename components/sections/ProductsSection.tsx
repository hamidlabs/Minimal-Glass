import { Card, CardContent } from "@/components/ui/card";

export default function ProductsSection() {
  const categories = [
    { name: "Glass", id: "glass" },
    { name: "Meshes", id: "meshes" },
    { name: "Fabrics", id: "fabrics" },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-center gap-8 mb-16">
          <div className="flex items-center self-start justify-end">
            <div className="w-16 h-0.5 bg-gray-600 mr-2"></div>
            <div className="text-sm text-third tracking-wider">Our products</div>
          </div>
          <div>
            <h2 className="text-xl md:text-xl w-[200px] font-light text-third leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
          </div>
          <div>
            <p className="text-[#F0E6E2]/40 text-sm w-[200px] leading-relaxed">
              Minimal glass creates custom-made glass doors, room dividers and more cabinets in all shapes and sizes. Get inspired.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {categories.map((category) => (
            <Card key={category.id} className="bg-[#C4C4C4]/30 border-gray-600 transition-colors duration-300 group rounded-none">
              <CardContent className="px-7 py-24 text-center">
                <div className="w-8 h-8 mx-auto flex items-center justify-center">
                  <div className="text-[#8F6A42]">03</div>
                </div>
                <h3 className="text-2xl font-[Giplika] text-[#F0E6E2]">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}