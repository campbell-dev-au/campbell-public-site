import Image from "next/image";

export default function PhotoFrame({
  src,
  alt,
  className = "",
  objectPosition = "center",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-box border border-black/10 shadow-sm dark:border-black ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/15 via-transparent to-fuchsia-400/10 dark:from-indigo-950/40 dark:to-fuchsia-400/5"
      />
    </div>
  );
}
