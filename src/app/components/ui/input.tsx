import { cn } from "@/app/lib/utils";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full outline-none placeholder:text-xs text-neutral-100 text-sm rounded-md border border-neutral-20  hover:bg-neutral-0 bg-transparent px-3 py-1  file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:shadow-[0_0px_0px_4px_rgba(36,204,255,0.25)] focus-visible:shadow-[#24ccff3f] placeholder:text-muted-foreground placeholder:text-neutral-40 active:border-primary-60 font-normal focus-visible:bg-white focus-visible:outline-none focus:border-primary-60   disabled:cursor-not-allowed disabled:opacity-50 duration-300 transition-all ease-in-out",
          className
        )}
        style={{
          ...props.style,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Input };
