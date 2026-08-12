import Link from "next/link";
import type { Service } from "@/lib/services";
import { serviceIcons } from "@/components/icons";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-black/10 p-6 transition-colors hover:border-indigo-300 hover:shadow-sm dark:border-white/10 dark:hover:border-indigo-400/40"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
      <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {service.summary}
      </p>
      <span className="mt-auto text-sm font-medium text-indigo-600 group-hover:underline dark:text-indigo-400">
        Learn more →
      </span>
    </Link>
  );
}
