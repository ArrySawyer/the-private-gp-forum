import type { ReactNode } from "react";
import Section from "../section";
import Heading from "../ui/Heading";
import Image from "next/image";
import { ContainerProps } from "../container";
import { cn } from "@/lib/utils";

export interface HeaderProps {
  title?: string;
  children?: ReactNode;
  image?: {
    secure_url: string;
    width: number;
    height: number;
  };
  placeholderSvg?: ReactNode;
  containerSize?: ContainerProps["size"];
  className?: string;
}

const Header = ({
  children,
  title,
  image,
  placeholderSvg,
  containerSize,
  className,
}: HeaderProps) => {
  const Content = () => {
    if (image || placeholderSvg) {
      return (
        <div className="flex flex-col items-start justify-start gap-3 xs:flex-row xs:gap-10">
          <div className="flex justify-center items-center min-w-28 aspect-square rounded-full border-4 border-white bg-greyedOut overflow-hidden xs:min-w-[104px] xs:w-[104px]">
            {image ? (
              <Image
                className="w-full h-full object-cover"
                src={image.secure_url}
                alt={`${title}`}
                width={300}
                height={400}
              />
            ) : null}
          </div>
          <div>
            {title ? (
              <Heading className="mb-3" size="lg" center={false}>
                {title}
              </Heading>
            ) : null}
            {children}
          </div>
        </div>
      );
    }
    return (
      <>
        {title ? (
          <Heading className="mb-3" size="lg" center={false}>
            {title}
          </Heading>
        ) : null}
        {children}
      </>
    );
  };

  return (
    <Section
      background="gradientGreen"
      halfWidth
      className={cn("pt-24 xs:pt-[120px] pb-10", className)}
      containerSize={containerSize}
    >
      <Content />
    </Section>
  );
};

export default Header;
