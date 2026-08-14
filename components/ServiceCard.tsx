import Link from "next/link";
import type { Service } from "@/lib/services";
import { serviceIcons } from "@/components/icons";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group flex flex-col gap-3 rounded-box border border-black/30 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-indigo-300 hover:bg-white/10 hover:shadow-sm"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-box bg-indigo-500/10 text-indigo-400">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
      </div>
      <p className="text-sm leading-6 text-zinc-400">
        {service.summary}
      </p>
      <span className="mt-auto text-sm font-medium text-indigo-400 group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
