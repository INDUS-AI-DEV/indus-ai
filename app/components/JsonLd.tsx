/**
 * Renders JSON-LD into the server-rendered HTML.
 *
 * The payload is our own structured data, never user input, so
 * dangerouslySetInnerHTML is safe here. `<` is escaped anyway to make the
 * script tag impossible to break out of.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
