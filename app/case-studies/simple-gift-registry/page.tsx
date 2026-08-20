import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PhotoFrame from "@/components/PhotoFrame";

export const metadata: Metadata = {
  title: "Story-First AI Development: Shipping a Production Web App in Four Days",
  description:
    "How a story-first, test-driven workflow kept an AI-assisted build honest — from first commit to a live, hardened product in four days.",
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-box border border-black/30 bg-indigo-500/10 p-5">
      <p className="text-3xl font-semibold tracking-tight text-indigo-400">
        {value}
      </p>
      <p className="mt-1 text-sm text-zinc-400">{label}</p>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
        {title}
      </h2>
      <div className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export default function SimpleGiftRegistryCaseStudy() {
  return (
    <div className="px-6 py-12 sm:px-10 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
        Case Study — Vibe-to-Production
      </p>
      <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Shipping a Production Web App in Four Days
      </h1>

      <PhotoFrame
        src="/images/casestudy-gift-registry.jpg"
        alt="The Simple Gift Registry homepage, showing its gift icon, tagline and sign-up buttons"
        className="mt-8 aspect-[21/9]"
        priority
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Stat value="4 days" label="first commit to live product" />
        <Stat value="18" label="user stories written before code" />
        <Stat value="55" label="scenarios run in a real browser" />
      </div>

      <Section title="The situation">
        <p>
          Simple Gift Registry is my own product: a straightforward tool to build
          and share gift registries without unnecessary feature bloat or affiliate
          marketing. It was also a deliberate test of the workflow I recommend to
          clients. AI can write an enormous amount of code very quickly —
          the open question is what has to sit around it so that speed
          produces something you can actually run in production.
        </p>
      </Section>

      <Section title="The approach">
        <p>
          Every feature went through the same three steps:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          <li>
            A short <strong>user story</strong> in plain language: who wants
            what, why, and how will we know when we&rsquo;re done?
          </li>
          <li>
            A <strong>functional test</strong> per criterion, written in
            Given/When/Then so it reads as a business requirement rather than
            a technical assertion.
          </li>
          <li>
            Only then, <strong>just enough application code</strong> to make
            the scenario pass.
          </li>
        </ul>
        <p className="mt-4">
          Lint, type checks, dead-code detection, a production build and the
          full scenario suite run on every pull request, so a change that
          quietly breaks a previously agreed behaviour can&rsquo;t reach the
          main branch.
        </p>
      </Section>

      <Section title="Why the order matters">
        <p>
          Writing the acceptance criteria first gives AI a target that
          isn&rsquo;t &ldquo;something that looks right&rdquo;, and it gives
          me a check that doesn&rsquo;t depend on reading every generated
          line of code. Because the scenarios describe behaviour rather than
          implementation, they survived several rounds of refactoring. The
          code underneath changed repeatedly while the definition of correct
          stayed put.
        </p>
        <p className="mt-4">
          That&rsquo;s the gap the Health Check most often finds in AI-built
          prototypes: plenty of unit tests asserting that the code does what
          the code does, and nothing capturing what the business actually
          asked for.
        </p>
      </Section>

      <Section title="Hardening before launch">
        <p>
          Working software and production-ready software are not the same
          thing, so the last pass before launch was a deliberate one, treating
          the app the way a health check would:
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          <li>
            Access checks on every route and every action, not just the pages
            — so knowing an internal ID isn&rsquo;t a back door into someone
            else&rsquo;s data.
          </li>
          <li>
            A rotatable share link plus an optional password, arranged so that
            changing either one immediately cuts off everyone holding the old
            one.
          </li>
          <li>
            Limits on how much any one account can create, and validation of
            every user-supplied identifier before it reaches the database.
          </li>
          <li>
            Security headers, private pages excluded from search engines, and confirmed
            &ldquo;delete my data and my account&rdquo; functions available to users.
          </li>
        </ul>
      </Section>

      <Section title="The outcome">
        <p>
          A live product, currently in beta, at{" "}
          <a
            href="https://simplegiftregistry.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline underline-offset-4"
          >
            simplegiftregistry.com.au
          </a>
          , built and hardened in four days. The{" "}
          <a
            href="https://github.com/campbell-dev-au/simple-gift-registry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline underline-offset-4"
          >
            full source, stories and scenarios are public
          </a>.
        </p>
        <p className="mt-4">
          AI didn&rsquo;t make the engineering discipline unnecessary. It made
          it fast enough to apply to every single feature, which is the point
          of the Vibe-to-Production offering: the same speed, with the parts
          that make software safe to depend on left in.
        </p>
      </Section>

      <div className="mt-16">
        <CTASection
          heading="Want your prototype built to this standard?"
          body="Vibe-to-Production takes what you've already got and closes the gaps a prototype leaves open."
          buttonLabel="Start a conversation"
        />
      </div>
    </div>
  );
}
