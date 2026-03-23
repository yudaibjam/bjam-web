import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverShadow?: boolean;
};

export default function Card({
  children,
  className = "",
  hoverShadow = false,
}: CardProps) {
  const classes = [
    "bg-white border border-border rounded-lg shadow-sm p-6",
    hoverShadow ? "transition-shadow duration-200 hover:shadow-md" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}
