import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "borderless" | "bordered";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        className={cn(
          "flex h-9 w-full min-w-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted selection:bg-white selection:text-white-foreground",
          "focus-visible:border-ring focus-visible:ring-0 focus-visible:border-b-ring",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-accent",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          variant === "default" &&
            "rounded-none border-0 border-b bg-accent placeholder:text-white ",
          variant === "borderless" &&
            "rounded-none border-0 border-transparent bg-accent/30 placeholder:text-white/50 ",
          variant === "bordered" &&
            "rounded-none border-0 border-b placeholder:text-primary ",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
