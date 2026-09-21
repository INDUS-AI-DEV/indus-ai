import Link from "next/link";
import { academy } from "../../lib/site";

/**
 * Indus AI Academy sits below the product grid: it is the training
 * and consulting arm of Indus AI Pvt Ltd.
 */
export default function AcademyCallout() {
  return (
    <div className="mt-10 rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/50 via-white to-cyan-50/30 p-6 md:p-8 shadow-sm transition-all hover:shadow-md md:flex md:items-center md:justify-between md:gap-8">
      <div className="max-w-2xl">
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-0.5 font-raleway text-xs font-semibold text-emerald-900">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {academy.domain}
          </span>
          <span className="font-raleway text-xs font-bold uppercase tracking-wider text-emerald-700">
            Corporate AI Training &amp; Upskilling
          </span>
        </div>
        <h3 className="mb-2 font-raleway text-xl font-bold text-slate-900 md:text-2xl">
          {academy.name}
        </h3>
        <p className="font-raleway text-xs leading-relaxed text-slate-600 md:text-sm">
          Live cohort-based AI certifications for engineers and business teams, hands-on production
          agent capstones, and executive AI roadmap advisory from IIT Delhi leadership.
        </p>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3 shrink-0 md:mt-0">
        <Link
          href="/academy"
          className="inline-flex min-h-10 items-center justify-center rounded-full border border-emerald-300 bg-white px-5 py-2 font-raleway text-xs font-bold text-emerald-900 shadow-sm transition-colors hover:bg-emerald-50"
        >
          Curriculum &amp; Tracks
        </Link>
        <a
          href={academy.url}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#2C514C] px-5 py-2 font-raleway text-xs font-bold text-white shadow-sm transition-all hover:bg-[#132A22]"
        >
          Explore Portal &rarr;
          <span className="sr-only"> (opens {academy.domain})</span>
        </a>
      </div>
    </div>
  );
}
