"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Box from "./Box";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "leading-none",
    "text-center",
    "font-semibold",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-purple",
          "text-white",
          "border",
          "border-dark",
          "hover:bg-linear-to-r",
          "hover:from-mid-pink",
          "hover:to-mid-pink",
          "focus-visible:outline-none",
          "focus-visible:bg-linear-to-r",
          "focus-visible:from-mid-pink",
          "focus-visible:to-mid-pink",
        ],
      },
      size: {
        sm: ["py-3", "px-5", "rounded-[20px]"],
        lg: ["py-4", "px-6", "rounded-[26px]"],
      },
      disabled: {
        true: [
          "cursor-not-allowed",
          "bg-GreyedOut",
          "text-slate/40",
          "hover:bg-GreyedOut",
        ],
      },
      loading: {
        true: [
          "cursor-not-allowed",
          "bg-GreyedOut",
          "text-slate/40",
          "gap-2",
          "hover:bg-GreyedOut",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export type ButtonProps = {
  variant?: NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
  size?: NonNullable<VariantProps<typeof buttonVariants>["size"]>;
  disabled?: boolean;
  asChild?: boolean;
  loading?: boolean;
} & (
  | ({ as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as?: "a" } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as?: "label" } & React.LabelHTMLAttributes<HTMLLabelElement>)
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      as = "button",
      variant = "primary",
      size,
      asChild = false,
      disabled = false,
      children,
      loading,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Box
        as={as}
        className={cn(
          buttonVariants({ variant, size, disabled, loading, className })
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
Button.displayName = "Button";

export default Button;
