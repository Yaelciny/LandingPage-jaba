interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-carbon"
          }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg sm:text-xl ${light ? "text-silver-light" : "text-steel"
            }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 ${centered ? "mx-auto" : ""} ${light ? "accent-line-light" : "accent-line"
          }`}
      />
    </div>
  );
}
