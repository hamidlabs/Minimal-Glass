export default function CollectionSection() {
  const products = [
    { id: 1, name: "MODEL NO.73", price: "EUR 905 M2", collection: "Essential collection", status: "In Stock" },
    { id: 2, name: "MODEL NO.73", price: "EUR 905 M2", collection: "Essential collection", status: "In Stock" },
    { id: 3, name: "MODEL NO.73", price: "EUR 905 M2", collection: "Essential collection", status: "In Stock" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center">
            <div className="w-16 h-0.5 bg-gray-600 mr-4"></div>
            <div className="text-sm text-gray-400 tracking-wider">Our collection</div>
          </div>
          <div className="flex-1 px-8">
            <h2 className="text-2xl md:text-3xl font-light text-white leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-gray-300 text-sm leading-relaxed">
              Minimal Glass creates custom-made glass doors, room dividers, and wine cabinets in all shapes and sizes. Get inspired.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-[3/4] bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-400 opacity-80">
                  <div className="w-full h-full opacity-60" style={{
                    backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.3) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.3) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.3) 76%, transparent 77%, transparent)`,
                    backgroundSize: "8px 8px",
                  }}></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded">
                    {product.collection} | {product.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{product.name}</h3>
                <span className="text-gray-300 text-sm">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}