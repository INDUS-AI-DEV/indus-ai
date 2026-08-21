import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The in-house demo routes were removed; the live voice demos now live
      // on induslabs.io. These URLs were published in the sitemap, so they
      // redirect rather than 404 for anything already indexed or linked.
      {
        source: "/demo",
        destination: "https://induslabs.io",
        permanent: true,
      },
      {
        source: "/demo/:path*",
        destination: "https://induslabs.io",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
