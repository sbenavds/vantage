import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { ButtonProps as ButtonProps$1 } from 'react-aria-components';
import { VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "outline" | "ghost" | "destructive" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonProps$1, VariantProps<typeof buttonVariants> {
    className?: string;
}
/**
 * Button — theme-agnostic, fully accessible via React Aria.
 *
 * Uses CSS variables from the active theme (anchor/veros/ripple),
 * so the same component looks appropriate in all 3 client sites.
 */
declare function Button({ variant, size, className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

export { Button, type ButtonProps, cn };
