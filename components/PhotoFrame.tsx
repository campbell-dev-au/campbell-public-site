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
      className={`relative overflow-hidden rounded-box border border-black/30 shadow-sm ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 896px, (min-width: 640px) calc(100vw - 128px), calc(100vw - 80px)"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-fuchsia-400/5"
      />
    </div>
  );
}
