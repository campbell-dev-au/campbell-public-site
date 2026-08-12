import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-black/10 p-6 transition-colors hover:border-black/25 dark:border-white/10 dark:hover:border-white/25"
    >
      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {service.summary}
      </p>
      <span className="mt-auto text-sm font-medium text-zinc-950 group-hover:underline dark:text-zinc-50">
        Learn more →
      </span>
    </Link>
  );
}
