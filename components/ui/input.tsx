import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "borderless" | "bordered" | "bottom-border";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "bottom-border":
          return "bg-transparent border-0 border-b border-gray-600 rounded-none placeholder:text-gray-400 text-white focus:border-gray-400 transition-colors";
        case "borderless":
          return "bg-accent/30 border-0 border-transparent rounded-none placeholder:text-white/50 text-white";
        case "bordered":
          return "bg-transparent border-0 border-b rounded-none placeholder:text-primary text-white";
        case "default":
        default:
          return "bg-accent border-0 border-b rounded-none placeholder:text-white text-white shadow-xs transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-0 focus-visible:border-b-ring aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-accent";
      }
    };

    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        className={cn(
          // Base styles
          "flex h-9 w-full min-w-0 px-3 py-1 text-base outline-none",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          // Variant styles
          getVariantClasses(),
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };