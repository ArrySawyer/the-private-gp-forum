import type { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const container = cva(["mx-auto", "px-5"], {
  variants: {
    size: {
      xs: ["max-w-[calc(var(--screen-xs)+40px)]"],
      sm: ["max-w-screen-sm"],
      md: ["max-w-screen-md"],
      lg: ["max-w-(--screen-lg)"],
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface ContainerProps {
  children?: ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

const Container = ({ children, size, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        container({
          size,
          className,
        })
      )}
    >
      {children ? children : null}
    </div>
  );
};

export default Container;
