import React from "react";

type BadgeVariant = "default" | "primary";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-muted-light text-muted",
  primary: "bg-primary-light text-primary",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const classes = [
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{children}</span>;
}
