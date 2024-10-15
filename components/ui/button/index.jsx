import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import styles from "./style.module.scss";

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      none: styles.none_default,
      default: styles.variant_default,
      blueBtn: styles.variant_blueBtn,
      redBtn: styles.variant_redBtn,
    },
    size: {
      default: styles.size_default,
      xs: styles.size_xs,
      sm: styles.size_sm,
      lg: styles.size_lg,
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
