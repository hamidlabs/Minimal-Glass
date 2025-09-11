export default function ServiceSection() {
  return (
    <section className="px-6 md:px-20 py-12 md:py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid (Number + Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-12">
          {/* Left Side (01 Number) */}
          <div className="flex justify-center md:justify-start items-center mt-12 md:mt-24">
            <div className="text-6xl sm:text-7xl md:text-9xl font-light text-[#BF8A42]">
              01
            </div>
          </div>

          {/* Middle Box */}
          <div className="bg-[#C4C4C4]/30 h-48 sm:h-64 md:h-[300px] w-full rounded-none"></div>

          {/* Right Box */}
          <div className="bg-[#C4C4C4]/30 h-56 sm:h-72 md:h-[400px] w-full rounded-none"></div>
        </div>

        {/* Bottom Grid (Text + Description) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Text List */}
          <div className="space-y-3 font-[Gifilka]">
            {[
              { num: "01", title: "Dutch design", active: true },
              { num: "02", title: "Creative", active: false },
              { num: "03", title: "Handmade", active: false },
              { num: "04", title: "Made to measure", active: false },
              { num: "05", title: "Installation", active: false },
            ].map((item) => (
              <div key={item.num} className="flex items-start space-x-4">
                <span
                  className={`text-sm font-medium ${
                    item.active ? "text-primary" : "text-[#F0E6E2]/40"
                  }`}
                >
                  {item.num}
                </span>
                <h3
                  className={`font-medium mb-2 ${
                    item.active ? "text-[#F0E6E2]" : "text-[#F0E6E2]/40"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Side Description */}
          <div className="space-y-4 text-[#F0E6E2]/70 text-sm md:text-base leading-relaxed md:w-[600px] font-[Gifilka] ">
            <p>
              Dutch Design by Bas Coppelmans combined with the hard work and
              pride of our Belgian steelworkers. The best of both worlds,
              because what's good doesn't have to come from far away.
            </p>
            <p>
              Bas, Chief Studio Design, always seeks the perfect balance in
              minimalism and works unconventionally during his design process.
              Sleek lines, airiness, and abundant light define the doors of
              Minimal Glass.
            </p>
            <p>
              Doors that give every room a powerful, luxurious appearance.
              Timeless, pure, and always handcrafted to measure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
