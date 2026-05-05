import Link from "next/link";
import * as React from "react";
import { cn } from "../lib/utils";

type LinkButtonProps = {
  href: string;
  variant?: "default" | "outline" | "hero";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

export function LinkButton({
  href,
  variant = "default",
  size = "md",
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-md hover:scale-105 transition-all duration-200",
        variant === "default" && "bg-secondary text-primary",
        variant === "outline" && "border border-gray-300 text-primary",
        variant === "hero" && "bg-primary text-white shadow-lg",
        size === "sm" && "h-9 px-small text-sm",
        size === "md" && "h-11 px-large",
        size === "lg" && "h-15 px-large text-lg",
        className,
      )}
    >
      {children}
    </Link>
  );
}
