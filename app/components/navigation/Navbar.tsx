"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navigation: { name: string; href: string; external?: boolean }[] = [
  { name: "Products", href: "/products" },
  { name: "Platform", href: "/products#platform" },
  { name: "Use Cases", href: "/solutions" },
  { name: "Academy", href: "https://indusai.academy", external: true },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isCurrent = (href: string) => pathname === href.split("#")[0];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-lg">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main">
          <Link href="/" className="flex items-center" aria-label="Indus AI — home">
            <Image
              src="/images/logo.png"
              alt="Indus AI"
              width={100}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navigation.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="font-raleway text-sm text-gray-600 transition-colors hover:text-gray-900"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className={`font-raleway text-sm transition-colors hover:text-gray-900 ${
                    isCurrent(item.href)
                      ? "font-semibold text-gray-900"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button href="/contact" size="sm" className="hidden font-raleway sm:inline-flex">
              Talk to sales
            </Button>

            <button
              type="button"
              className="p-2 lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {isOpen && (
          <div id="mobile-menu" className="lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-4">
              {navigation.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="block rounded-md px-3 py-2 font-raleway text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="block rounded-md px-3 py-2 font-raleway text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
              <Link
                href="/contact"
                className="mt-2 block rounded-full bg-[#2C514C] px-3 py-2 text-center font-raleway text-base font-bold text-white"
                onClick={() => setIsOpen(false)}
              >
                Talk to sales
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
