import Container, { type ContainerProps } from "../container";
import type { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Heading from "@/components/ui/Heading";

const sectionVariants = cva(["py-15"], {
  variants: {
    background: {
      noBackground: [""],
      darkPurple: ["bg-dark-purple"],
      gradientGreen: ["bg-gradient-green"],
      gradientPurple: ["bg-gradient-purple"],
    },
    size: {
      md: ["py-15"],
      lg: ["py-12 sm:py-20"],
    },
  },
  defaultVariants: {
    background: "noBackground",
    size: "md",
  },
});

export interface SectionProps {
  children?: ReactNode;
  background?: NonNullable<VariantProps<typeof sectionVariants>["background"]>;
  size?: NonNullable<VariantProps<typeof sectionVariants>["size"]>;
  containerSize?: ContainerProps["size"];
  className?: string;
  containerClassName?: string;
  halfWidth?: boolean;
  heading?: string;
  id?: string;
}

const Section = ({
  children,
  background,
  size,
  containerSize,
  className,
  containerClassName,
  halfWidth,
  heading,
  id,
}: SectionProps) => {
  const HeadingAndChildren = (
    <>
      {heading ? (
        <Heading type="h2" center={false} className="mb-4">
          {heading}
        </Heading>
      ) : null}
      {children}
    </>
  );
  return (
    <section
      className={cn(
        sectionVariants({
          background,
          size,
          className: className,
        })
      )}
      id={id}
    >
      <Container size={containerSize} className={containerClassName}>
        {halfWidth ? (
          <div className="lg:max-w-screen-xs">{HeadingAndChildren}</div>
        ) : (
          <>{HeadingAndChildren}</>
        )}
      </Container>
    </section>
  );
};

export default Section;
