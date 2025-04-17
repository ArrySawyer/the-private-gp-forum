import { ElementType, ReactElement, forwardRef } from "react";

type BoxProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    children?: React.ReactNode;
  };

export type PolymorphicComponent = <T extends ElementType = "div">(
  props: BoxProps<T>
) => ReactElement | null;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

const Box = forwardRef(
  <T extends ElementType>(props: BoxProps<T>, ref: PolymorphicRef<T>) => {
    const { as, children, ...rest } = props;
    const Element = as || "div";
    return (
      <Element ref={ref} {...rest}>
        {children}
      </Element>
    );
  }
);

Box.displayName = "Box";

export default Box;
