"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <p className="max-w-md text-base leading-7 text-zinc-700 dark:text-zinc-300">
        Thanks — your message is on its way. I&rsquo;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      {/* Honeypot field — hidden from real users, bots tend to fill it in */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-box border border-black/15 bg-white/80 px-3 py-2 text-sm outline-none backdrop-blur-sm focus:border-indigo-500 dark:border-white/20 dark:bg-zinc-950/50 dark:focus:border-indigo-400"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-box border border-black/15 bg-white/80 px-3 py-2 text-sm outline-none backdrop-blur-sm focus:border-indigo-500 dark:border-white/20 dark:bg-zinc-950/50 dark:focus:border-indigo-400"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-box border border-black/15 bg-white/80 px-3 py-2 text-sm outline-none backdrop-blur-sm focus:border-indigo-500 dark:border-white/20 dark:bg-zinc-950/50 dark:focus:border-indigo-400"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-fit items-center justify-center rounded-box bg-gradient-to-br from-indigo-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
