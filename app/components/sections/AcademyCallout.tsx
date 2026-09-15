import { academy } from "../../lib/site";

/**
 * Indus AI Academy sits below the product grid rather than inside it: it is the
 * training and consulting arm, not one of the AI agent products.
 */
export default function AcademyCallout() {
  return (
    <div className="mt-10 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white md:flex md:items-center md:justify-between md:gap-10 md:p-10">
      <div className="max-w-2xl">
        <span className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 font-raleway text-xs font-medium text-blue-100">
          {academy.domain}
        </span>
        <p className="mb-2 font-raleway text-sm font-semibold text-blue-300">
          AI training and consulting
        </p>
        <h3 className="mb-3 font-raleway text-2xl font-bold md:text-3xl">{academy.name}</h3>
        <p className="font-raleway text-sm leading-relaxed text-blue-100 md:text-base">
          Live AI courses and certification for professionals, role-based AI upskilling for entire teams, and AI
          consulting that puts the same technology to work inside your business.
        </p>
      </div>
      <div className="mt-6 shrink-0 md:mt-0">
        <a
          href={academy.url}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 font-raleway text-sm font-bold text-slate-900 transition-colors hover:bg-blue-50"
        >
          Explore the Academy
          <span className="sr-only"> (opens {academy.domain})</span>
        </a>
      </div>
    </div>
  );
}
