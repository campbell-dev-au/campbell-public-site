import type { Metadata } from "next";
import Link from "next/link";
import PhotoFrame from "@/components/PhotoFrame";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real engagements, including a full vibe-code health check.",
};

export default function CaseStudiesPage() {
  return (
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <PhotoFrame
        src="/images/casestudies-filecabinet.jpg"
        alt="An open vintage filing cabinet drawer packed with index card records"
        className="aspect-[4/1]"
        objectPosition="45% 45%"
        priority
      />
      <h1 className="mt-8 text-4xl font-semibold tracking-tight">Case Studies</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
        A look at how engagements actually play out.
      </p>

      <div className="mt-12 flex flex-col gap-6">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group rounded-box border border-black/30 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-indigo-300 hover:bg-white/10 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold tracking-tight">
              {cs.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-zinc-400">
              {cs.summary}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-indigo-400 group-hover:underline">
              Read the case study →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
