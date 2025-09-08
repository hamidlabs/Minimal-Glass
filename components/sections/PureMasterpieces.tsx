


export default function PureMasterpieces() {
  return (
    <div className="bg-second ">
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-20 ">
        <div className="">
          {/* Left Column - Text Content */}
          <div className="flex justify-center gap-16 mb-16  ">
            <div className="flex items-center  justify-end">
              <div className="w-16 h-0.5 bg-gray-600 mr-2"></div>
              <div className="text-sm text-third tracking-wider">
                Our design
              </div>
            </div>

            <div className="flex flex-col ">
              <div>
                <h2 className="text-xl md:text-4xl w-[200px] font-[Giplika] text-third leading-tight">
                  Pure Masterpieces
                </h2>
              </div>
              <div>
                <p className="text-[#F0E6E2]/40 text-sm w-[500px] leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Placerat nisi nibh
                  velit dolor consequat netus rutrum interdum ipsum. Integer
                  urna arcu sed gravida porttitor mauris. Scelerisque interdum
                  egestas laoreet lorem tellus in. Suspendisse nisi vivamus in
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary  transition-colors duration-200 group"
                >
                  <span className="text-sm underline tracking-wider font-medium">
                    View all our masterpieces
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Content Blocks */}
          <div className=" flex gap-24">
            {/* Large Content Block */}
            <div className="bg-[#C4C4C4]/30 rounded-none h-[400px] w-2xl md:w-5xl relative overflow-hidden ">
              <div className="absolute inset-0 "></div>
            </div>

            {/* Smaller Content Block */}
            <div className="bg-[#C4C4C4]/30 rounded-none relative overflow-hidden w-2xl md:w-3/12  h-[350px] ml-auto ">
              <div className="absolute inset-0 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
