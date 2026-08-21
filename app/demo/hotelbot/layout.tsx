import type { Metadata } from "next";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Hotel Booking Voice AI Demo — HotelBot",
  description:
    "Talk to a hospitality AI voice agent handling reservations, guest queries, and concierge requests live in your browser.",
  path: "/demo/hotelbot",
  keywords: ["hotel booking AI agent", "hospitality voice AI", "AI receptionist demo"],
});

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
