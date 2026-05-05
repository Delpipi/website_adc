import * as React from "react";
import { cn } from "../lib/utils";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "hero"; 
  size?: "sm" | "md" | "lg";
  className?: string; 
  children: React.ReactNode;
};

export function LinkButton({
  onClick,
  variant = "default",
  size = "md",
  className,
  children,
  href,
}: ButtonProps) {
  const commonClasses =
    "inline-flex items-center justify-center font-semibold transition cursor-pointer rounded-sm";

  const variantClasses = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline:
      "border-2 border-primary text-primary hover:text-white hover:bg-primary",
    hero: "bg-primary text-white shadow-lg hover:scale-105",
  };

  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5",
    lg: "h-12 px-8 text-base",
  };

  const buttonClasses = cn(
    commonClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  return href ? (
    <a href={href} className={buttonClasses}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
