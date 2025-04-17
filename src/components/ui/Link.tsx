import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const link = cva(
  ["text-dark", "text-center", "text-sm", "opacity-60", "hover:opacity-100"],
  {
    variants: {
      variant: {},
    },
  }
);

export type LinkProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof link> &
  (
    | ({ asChild: false } & React.LinkHTMLAttributes<HTMLAnchorElement>)
    | { asChild?: true }
  );

export default function Link({
  children,
  className,
  asChild = true,
  ...props
}: LinkProps) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp className={link({ className })} {...props}>
      {children}
    </Comp>
  );
}
