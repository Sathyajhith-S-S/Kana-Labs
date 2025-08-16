// src/components/ui/button-variants.ts
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
                outline: "border bg-transparent hover:bg-muted",
                ghost: "hover:bg-muted",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-lg px-8 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);