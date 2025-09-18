export default function PureMasterpieces() {
  return (
    <div className="bg-background">
      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12 md:mb-16 text-center md:text-left">
          {/* Left side small text */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="hidden md:block w-16 h-0.5 bg-gray-600 mr-2"></div>
            <div className="text-xs sm:text-sm text-third tracking-wider">
              Our design
            </div>
          </div>

          {/* Title + Paragraph */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-lg sm:text-2xl md:text-4xl max-w-[250px] md:max-w-[200px] font-[Giplika] text-third leading-tight">
              Pure Masterpieces
            </h2>
            <p className="text-[#F0E6E2]/60 text-sm sm:text-base max-w-sm md:max-w-[500px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Placerat nisi nibh velit
              dolor consequat netus rutrum interdum ipsum. Integer urna arcu sed
              gravida porttitor mauris. Scelerisque interdum egestas laoreet
              lorem tellus in. Suspendisse nisi vivamus in
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary transition-colors duration-200 group mt-2"
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

        {/* Content Blocks */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Large Block */}
          <div className="bg-secondary rounded-none h-64 sm:h-80 md:h-[400px] w-full md:flex-1 relative overflow-hidden">
            <div className="absolute inset-0"></div>
          </div>

          {/* Small Block */}
          <div className="bg-secondary rounded-none  sm:h-64 md:h-[350px]  w-full md:w-1/3 relative overflow-hidden">
            <div className="absolute inset-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
