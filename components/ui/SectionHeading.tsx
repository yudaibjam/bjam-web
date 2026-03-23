import React from "react";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={["text-center mb-12", className].filter(Boolean).join(" ")}>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground inline-block relative">
        {title}
        <span
          className="block h-1 mt-2 rounded-full bg-primary"
          aria-hidden="true"
        />
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
