import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ReadyToTransform() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-raleway">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8 font-raleway">
            Let&apos;s discuss how our AI solutions can help you achieve your
            goals.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="">
              <a href="https://calendly.com/indusai-app/meet">Get Started</a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <a href="https://calendly.com/indusai-app/meet">Talk to Expert</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
