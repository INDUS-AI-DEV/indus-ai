import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ReadyToTransform() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-raleway">
            Ready to Deploy Agentic AI in Production?
          </h2>
          <p className="text-xl text-gray-400 mb-8 font-raleway">
            Let&apos;s map the right product, workflow, and deployment model for
            your enterprise team.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              href="https://calendly.com/indusai-app/meet"
              size="lg"
              className="font-raleway"
            >
              Book a Demo
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-raleway"
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
