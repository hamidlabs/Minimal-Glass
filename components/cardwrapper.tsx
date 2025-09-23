import React from "react";
import { cn } from "@/lib/utils";

export default function CardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container mx-auto px-4 py-4", className)}>
      {children}
    </div>
  );
}
