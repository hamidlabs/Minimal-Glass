export default function ServiceSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center justify-center">
            <div className="text-8xl md:text-9xl font-light text-[#BF8A42]">01</div>
          </div>
          <div className="bg-gray-600 h-48 rounded"></div>
          <div className="bg-gray-500 h-48 rounded"></div>
        </div>

        <div className="border border-purple-500/30 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { num: "01", title: "Dutch design", active: true },
                { num: "02", title: "Creative", active: false },
                { num: "03", title: "Handmade", active: false },
                { num: "04", title: "Made to measure", active: false },
                { num: "05", title: "Installation", active: false },
              ].map((item) => (
                <div key={item.num} className="flex items-start space-x-4">
                  <span className={`text-sm font-medium ${item.active ? "text-[#BF8A42]" : "text-gray-400"}`}>
                    {item.num}
                  </span>
                  <h3 className={`text-lg font-medium mb-2 ${item.active ? "text-white" : "text-gray-400"}`}>
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="text-gray-300 text-sm leading-relaxed">
                <p>Dutch Design by Bas Coppelmans combined with the hard work and pride of our Belgian steelworkers.</p>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed">
                <p>Bas, Chief Studio Design, always seeks the perfect balance in minimalism and works unconventionally.</p>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed">
                <p>Doors that give every room a powerful, luxurious appearance. Timeless, pure, and always handcrafted to measure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}