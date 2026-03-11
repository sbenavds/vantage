// src/components/Button/Button.tsx
import { Button as AriaButton } from "react-aria-components";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  // Base styles — semantic, accessible, theme-agnostic via CSS variables
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-md text-sm font-medium",
    "transition-colors duration-150",
    // React Aria focus management
    "outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    // Disabled state handled by React Aria
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    // Pressed state
    "data-[pressed]:scale-[0.98]"
  ],
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        default: "h-9 px-4 py-2",
        lg: "h-10 px-8 rounded-md",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({ variant, size, className, ...props }) {
  return /* @__PURE__ */ jsx(
    AriaButton,
    {
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
export {
  Button,
  cn
};
//# sourceMappingURL=index.js.map