// app/components/TeamSection.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Bas Coppelmans",
    role: "Founder - Creative Director",
    initial: "B",
    linkedIn: "#",
  },
  {
    name: "Susan von Herbaum",
    role: "Factory Director",
    initial: "J",
 
  },
  {
    name: "Guido Giovan",
    role: "Sales",
    initial: "G",

  },
];

export default function TeamSection() {
  return (
    <section className="bg-background  py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-20 mb-12 md:mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-end">
            <div className="w-12 md:w-16 h-0.5 bg-gray-600 mr-2"></div>
            <div className="text-xs md:text-sm text-third tracking-wider">
              Our Collection
            </div>
          </div>

          <div className="max-w-xs md:max-w-[600px] flex flex-col md:flex-row gap-2">
            <p className="text-ternary text-sm leading-relaxed">
              Minimal glass creates custom-made glass doors, room dividers and
              more cabinets in all shapes and sizes. Get inspired.
            </p>

            <p className="text-ternary text-sm leading-relaxed">
              Minimal glass creates custom-made glass doors, room dividers and
              more cabinets in all shapes and sizes. Get inspired.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-background border-0 shadow-none group"
            >
              <CardContent className="p-0 flex flex-col items-center">
                {/* Placeholder (initials instead of image) */}
                <div className="w-full h-[250px] bg-secondary flex p-5 text-primary text-8xl font-serif">
                  {member.initial}
                </div>
                <div className="flex flex-col items-start mt-2 self-start p-4 mb-2">
                  {/* Name + LinkedIn */}
                  <div className="flex items-center gap-2">
                    <h3 className="text-primary font-medium">{member.name}</h3>
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>

                  {/* Role */}
                  <p className="text-sm text-[#F0E6E2]/50 mt-1">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
