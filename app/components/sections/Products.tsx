import Container from "../ui/Container";
import Button from "../ui/Button";
import AcademyCallout from "./AcademyCallout";
import { products } from "../../lib/site";

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="bg-white py-24"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 font-raleway text-sm font-medium text-emerald-900">
            The product suite
          </span>
          <h2
            id="products-heading"
            className="mb-6 font-raleway text-4xl font-bold text-gray-900 md:text-5xl"
          >
            Four AI agent products on one enterprise platform
          </h2>
          <p className="font-raleway text-lg leading-relaxed text-gray-600">
            Voice agents, lead management, financial operations, and multi-agent
            orchestration — each product solves a specific set of enterprise
            workflows, and all four share the same integration, control, and
            observability layer.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <div className="mb-5 flex items-center justify-end">
                <span className="max-w-full rounded-full bg-slate-900 px-3 py-1 text-right font-raleway text-xs font-medium leading-snug text-white">
                  {product.domain}
                </span>
              </div>

              <p className="mb-2 font-raleway text-sm font-semibold text-blue-700">
                {product.category}
              </p>
              <h3 className="mb-4 min-h-[3.5rem] font-raleway text-2xl font-bold leading-tight text-gray-900">
                {product.name}
              </h3>

              <p className="mb-6 min-h-[6.5rem] font-raleway text-sm leading-relaxed text-gray-600">
                {product.shortDescription}
              </p>

              <ul className="mb-8 space-y-3 border-t border-gray-100 pt-5">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-raleway text-sm text-gray-700"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href={product.url}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener" : undefined}
                variant="secondary"
                size="sm"
                className="mt-auto min-h-11 w-full whitespace-normal text-center font-raleway leading-snug"
              >
                Explore {product.name}
                {product.external ? (
                  <span className="sr-only"> (opens {product.domain})</span>
                ) : null}
              </Button>
            </article>
          ))}
        </div>

        <AcademyCallout />

        <p className="mx-auto mt-10 max-w-3xl text-center font-raleway text-sm leading-relaxed text-gray-500">
          IndusLabs, FinoLabs, Agentic AI SM and the Marketing Automation Agent
          are products of Indus AI Pvt Ltd. Indus AI Academy is its AI training
          and consulting arm.
        </p>
      </Container>
    </section>
  );
}
