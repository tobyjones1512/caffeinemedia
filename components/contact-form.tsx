"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";

import { company, divisionList } from "@/lib/content";
import { cn } from "@/lib/utils";

const routes = [
  { key: "unsure", label: "Not sure yet", accent: "var(--color-crema)", email: company.email },
  ...divisionList.map((d) => ({
    key: d.key,
    label: d.shortName,
    accent: d.accentVar,
    email: d.cta.email,
  })),
];

const stages = [
  "Script / development",
  "Financing",
  "In production",
  "In post",
  "Finished film",
  "Already released",
  "Conversion / delivery job",
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * The form composes a formatted email and hands it to the visitor's mail
 * client, so it works on a static deploy with nothing behind it. To collect
 * submissions server-side instead, POST `payload` to your endpoint of choice
 * inside `handleSubmit` and drop the `mailto:` hand-off.
 */
export function ContactForm() {
  const id = useId();
  const [route, setRoute] = useState(routes[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const org = String(data.get("org") ?? "").trim();
    const stage = String(data.get("stage") ?? "");
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "We need something to call you.";
    if (!email) next.email = "An email address, so we can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That address does not look right.";
    if (message.length < 10) next.message = "A sentence or two about the project.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const payload = [
      `Name: ${name}`,
      `Email: ${email}`,
      org ? `Company: ${org}` : null,
      `Enquiry for: ${route.label}`,
      `Stage: ${stage}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${route.email}?subject=${encodeURIComponent(
      `Enquiry — ${route.label} — ${name}`,
    )}&body=${encodeURIComponent(payload)}`;

    setSent(true);
  };

  return (
    <div style={{ ["--accent" as string]: route.accent }}>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="border border-bone/12 px-6 py-14 text-center sm:px-10"
          >
            <span aria-hidden className="mx-auto block size-2 bg-accent" />
            <h3 className="display-md mt-8 text-3xl text-bone sm:text-4xl">
              Your draft is open.
            </h3>
            <p className="mx-auto mt-5 max-w-sm text-[15px] leading-[1.8] text-ash">
              We have handed the message to your email client addressed to{" "}
              <span className="text-bone">{route.email}</span>. Send it and you
              will hear back within two weeks &mdash; usually sooner.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="slate mt-9 border border-bone/25 px-6 py-3.5 text-bone transition-colors hover:border-accent hover:bg-accent hover:text-roast-950"
            >
              Write another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-10"
          >
            {/* Routing ---------------------------------------------------- */}
            <fieldset>
              <legend className="slate text-ash">
                Who should read this?
              </legend>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {routes.map((r) => {
                  const active = r.key === route.key;
                  return (
                    <button
                      key={r.key}
                      type="button"
                      onClick={() => setRoute(r)}
                      aria-pressed={active}
                      style={{ ["--accent" as string]: r.accent }}
                      className={cn(
                        "slate border px-5 py-3 transition-all duration-400",
                        active
                          ? "border-accent bg-accent text-roast-950"
                          : "border-bone/20 text-bone-dim hover:border-accent hover:text-accent",
                      )}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Details ---------------------------------------------------- */}
            <div className="grid gap-8 sm:grid-cols-2">
              <Field
                id={`${id}-name`}
                name="name"
                label="Name"
                required
                error={errors.name}
                autoComplete="name"
              />
              <Field
                id={`${id}-email`}
                name="email"
                label="Email"
                type="email"
                required
                error={errors.email}
                autoComplete="email"
              />
              <Field
                id={`${id}-org`}
                name="org"
                label="Company"
                optional
                autoComplete="organization"
              />

              <div className="group">
                <label htmlFor={`${id}-stage`} className="slate text-ash">
                  Stage
                </label>
                <select
                  id={`${id}-stage`}
                  name="stage"
                  defaultValue={stages[0]}
                  className="mt-4 w-full appearance-none border-b border-bone/20 bg-transparent pt-1 pb-3.5 text-[15px] text-bone transition-colors outline-none focus:border-accent"
                >
                  {stages.map((s) => (
                    <option key={s} value={s} className="bg-roast-850 text-bone">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor={`${id}-message`} className="slate text-ash">
                The project
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                rows={6}
                placeholder="What it is, where it is, and what you need from us."
                aria-invalid={Boolean(errors.message)}
                className={cn(
                  "mt-4 w-full resize-none border-b bg-transparent pt-1 pb-3.5 text-[15px] leading-relaxed text-bone transition-colors outline-none placeholder:text-ash/70 focus:border-accent",
                  errors.message ? "border-ember" : "border-bone/20",
                )}
              />
              {errors.message ? (
                <p className="slate mt-3 text-ember">{errors.message}</p>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                type="submit"
                className="slate group relative inline-flex items-center gap-3 overflow-hidden bg-accent px-8 py-4.5 text-roast-950 transition-colors duration-400 hover:bg-bone"
              >
                Send it
                <span aria-hidden className="text-[13px] leading-none">
                  &rarr;
                </span>
              </button>
              <p className="max-w-xs text-[13px] leading-relaxed text-ash">
                Goes to {route.email}. We reply to everything within two weeks.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  optional,
  error,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="slate flex items-center gap-2 text-ash">
        {label}
        {optional ? <span className="text-ash-deep">(optional)</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-required={required}
        aria-invalid={Boolean(error)}
        className={cn(
          "mt-4 w-full border-b bg-transparent pt-1 pb-3.5 text-[15px] text-bone transition-colors outline-none placeholder:text-ash/70 focus:border-accent",
          error ? "border-ember" : "border-bone/20",
        )}
      />
      {error ? <p className="slate mt-3 text-ember">{error}</p> : null}
    </div>
  );
}
