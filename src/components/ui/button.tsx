import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_hsla(187,100%,50%,0.4)]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary/50 bg-transparent text-foreground hover:border-primary hover:bg-primary/10 hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: 
          "hover:bg-secondary hover:text-foreground",
        link: 
          "text-primary underline-offset-4 hover:underline",
        neon:
          "relative bg-transparent border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsla(187,100%,50%,0.5)] active:scale-95",
        hero:
          "bg-gradient-to-r from-[hsl(187,100%,50%)] to-[hsl(270,80%,60%)] text-primary-foreground font-bold uppercase tracking-wide shadow-[0_0_20px_hsla(187,100%,50%,0.3)] hover:shadow-[0_0_40px_hsla(187,100%,50%,0.5)] hover:scale-105 active:scale-95",
        whatsapp:
          "bg-[#25D366] text-white font-semibold hover:bg-[#20BD5A] hover:shadow-[0_0_20px_hsla(142,70%,49%,0.4)]",
        glass:
          "backdrop-blur-xl bg-white/10 border border-white/20 text-foreground hover:bg-white/20 hover:border-primary/50",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-lg px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
