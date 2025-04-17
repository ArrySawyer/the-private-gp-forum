import type { JSX } from "react";
import React, { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva(["font-extrabold"], {
  variants: {
    size: {
      lg: ["text-5xl", "sm:text-[64px]", "leading-none"],
    },
    center: {
      true: ["text-center", "mx-auto"],
      false: ["text-left"],
    },
  },
  defaultVariants: {
    size: "lg",
    center: true,
  },
});

export interface HeadingProps {
  children: ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "div";
  size?: "lg";
  className?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  type = "h1",
  size,
  className,
  center,
}) => {
  const HeadingTag = type as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      className={cn(
        headingVariants({
          size,
          center,
          className,
        })
      )}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
