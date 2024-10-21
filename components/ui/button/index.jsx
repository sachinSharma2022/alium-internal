import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("base", {
  variants: {
    variant: {
      none: "none_default",
      default: "variant_default",
      blueBtn: "variant_blueBtn",
      redBtn: "variant_redBtn",
    },
    size: {
      default: "size_default",
      xs: "size_xs",
      sm: "size_sm",
      lg: "size_lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
