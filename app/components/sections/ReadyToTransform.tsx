import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ReadyToTransform() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50/70 py-14 md:py-18"
    >
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 font-raleway text-xs font-semibold uppercase tracking-wider text-cyan-900">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Enterprise Deployment &bull; Production Ready
          </span>
          <h2
            id="cta-heading"
            className="mb-3 font-raleway text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Ready to deploy agentic AI in production?
          </h2>
          <p className="mx-auto mb-7 max-w-2xl font-raleway text-sm leading-relaxed text-slate-600 sm:text-base">
            Let&apos;s scope your specific enterprise workflow, determine product fit across voice,
            lending, or lead ops, and set up a compliant sandbox deployment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Button
              href="https://calendly.com/hello-induslabs/30min"
              target="_blank"
              rel="noopener"
              size="md"
              className="rounded-full shadow-sm hover:shadow-md"
            >
              Book Technical Demo
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              className="rounded-full border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400"
            >
              Talk to Solutions Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
