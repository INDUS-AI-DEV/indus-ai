import Container from "../ui/Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// const clients = [
//   { name: "Microsoft" },
//   { name: "Google" },
//   { name: "Amazon" },
//   { name: "Meta" },
//   { name: "Apple" },
//   { name: "Tesla" },
//   { name: "IBM" },
//   { name: "Oracle" },
// ];

const clients = [
  // { image: "/images/support/navrachna.png" },
  // { image: "/images/support/startupindia.png" },
  { image: "/images/support/7span.png" },
  { image: "/images/support/codelessly.png" },
  { 
    image: "/images/support/dabur.svg",
    className: "h-20 w-auto" // Larger size for Dabur logo
  },
  { image: "/images/support/Flipkart.png" },
  { image: "/images/support/flutter.png" },
  { image: "/images/support/hdfc_sky.png" },
  { image: "/images/support/massist.png" },
  { image: "/images/support/nonstop.png" },
  { image: "/images/support/serverpod.png" },
  { image: "/images/support/tata_digital.png" },
  { image: "/images/support/tide.png" },
  { image: "/images/support/welltested_ai.png" },
  { image: "/images/support/zoho.png" },
];

export default function ClientLogos() {
  return (
    <section className="pt-8 pb-16 overflow-hidden bg-white">
      <Container>
        <h2 className="text-center text-sm font-medium text-gray-500 mb-8 font-raleway">
          Supported by
        </h2>
      </Container>
      <Marquee
        gradient={true}
        gradientColor="#ffffff"
        speed={40}
        className="overflow-hidden"
        pauseOnHover={true}
      >
        <div className="flex items-center">
          {clients.map((client, index) => (
            <div
              key={`${client.image}-${index}`}
              className="mx-8 flex items-center justify-center"
            >
              <Image
                src={client.image}
                alt={`Supported by ${client.image.split('/').pop()?.split('.')[0]}`}
                width={160}
                height={80}
                className={`h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 ${client.className || ''}`}
              />
            </div>
          ))}
        </div>
      </Marquee>
      {/* Duplicate for continuous effect */}
      <Marquee
        gradient={true}
        gradientColor="#ffffff"
        speed={30}
        className="overflow-hidden mt-8"
        direction="right"
        pauseOnHover={true}
      >
        <div className="flex items-center">
          {clients.map((client, index) => (
            <div
              key={`${client.image}-reverse-${index}`}
              className="mx-8 flex items-center justify-center"
            >
              <Image
                src={client.image}
                alt={`Supported by ${client.image.split('/').pop()?.split('.')[0]}`}
                width={160}
                height={80}
                className={`h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 ${client.className || ''}`}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
