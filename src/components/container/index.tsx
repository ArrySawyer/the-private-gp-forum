import type { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const containerVariants = cva(["mx-auto", "px-2"], {
  variants: {
    size: {
      xs: ["max-w-screen-xs"],
      sm: ["max-w-screen-sm"],
      md: ["max-w-screen-md"],
      lg: ["max-w-screen-lg"],
      xl: ["max-w-screen-xl"],
      full: [""],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ContainerProps {
  children?: ReactNode;
  size?: NonNullable<VariantProps<typeof containerVariants>["size"]>;
  className?: string;
}

const Container = ({ children, size, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        containerVariants({
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
