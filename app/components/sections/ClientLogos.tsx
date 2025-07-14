import Container from "../ui/Container";
import Image from "next/image";
// import Marquee from "react-fast-marquee";

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
  { image: "/images/support/flutter.png" },
  { image: "/images/support/hdfc_sky.png" },
  { image: "/images/support/nonstop.png" },
  { image: "/images/support/serverpod.png" },
  { image: "/images/support/tata_digital.png" },
  { image: "/images/support/tide.png" },
  { image: "/images/support/welltested_ai.png" },
  { image: "/images/support/zoho.png" },
];

export default function ClientLogos() {
  return (
    <section className="py-24 overflow-hidden bg-white mx-auto max-w-7xl px-4">
      <Container>
        <h2 className="text-center text-sm font-medium text-gray-500 mb-16 font-raleway">
          Supported by
        </h2>
      </Container>
      {/* <Marquee
        gradient={true}
        gradientColor="#F9FAFB"
        speed={50}
        className="overflow-hidden"
      >
        <div className="flex">
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors duration-300 w-[200px] flex items-center justify-center font-raleway"
            >
              {client.name}
            </div>
          ))}
        </div>
      </Marquee> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
        {clients.map((client) => (
          <div
            key={client.image}
            className="text-2xl font-medium text-gray-400 hover:text-gray-600 transition-colors duration-300 w-[200px] flex items-center justify-center font-raleway"
          >
            <Image
              src={client.image}
              alt={client.image}
              width={200}
              height={200}
              className="w-full h-30 p-4 object-contain border border-gray-200 rounded-md hover:scale-105 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
