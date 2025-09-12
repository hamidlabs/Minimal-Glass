import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  Truck,
  Shield,
  MessageCircle,
  ListOrdered,
  
} from "lucide-react";  

export function CustomerServiceSection() {
  const services = [
    {
      icon: ListOrdered,
      title: "Order process",
      subtitle: "Interesting sub title very interesting",
    },
    {
      icon: Truck,
      title: "Shipment & payment",
      subtitle: "Interesting sub title very interesting",
    },
    {
      icon: Shield,
      title: "Warranty information",
      subtitle: "Interesting sub title very interesting",
    },
    {
      icon: MessageCircle,
      title: "Contact a specialist",
      subtitle: "Interesting sub title very interesting",
    },
  ];

  return (
    <section className="relative min-h-[700px]  bg-[#1A1A1A] text-[#FFFFFF] overflow-hidden ">
      {/* Background geometric pattern */}
     

      <div className="relative z-10 container mx-auto px-4 py-16  rounded-none  ">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Content */}
          <div className="space-y-10 md:mt-30">
            <h1 className="text-6xl  lg:text-7xl font-light leading-tight text-balance">
              Customer
              <br />
              service
            </h1>
            <p className="text-lg text-[#FFFFFF] leading-relaxed max-w-md">
              We are always interested in exploring possibilities together. If
              you have a question or would like general information, feel free
              to contact us. We are happy to assist you.
            </p>
          </div>

          {/* Right side - Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mt-30  ">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-[#121212]  rounded-none transition-all duration-300 cursor-pointer p-6 backdrop-blur-sm"
              >
                <div className="space-y-4 ">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border border-[#FFFFFF] flex items-center justify-center group-hover:border-gray-600 transition-colors">
                    <service.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-white group-hover:text-gray-100 transition-colors">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-12 h-12 p-3  text-primary group-hover:text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 rounded-full bg-[#1A1A1A]" />
                    </div>
                    <p className="text-sm text-[#F0E6E2]/60 group-hover:text-gray-300 transition-colors">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </Card>
            ))} 
          </div>
          <div className="flex items-center justify-center absolute left-[450px]">
            <div className="h-[600px] w-[600px] rounded-full bg-transparent border-[1px] border-[#F0E6E2]/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
