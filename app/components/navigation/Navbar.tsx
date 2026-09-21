"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const navItems = [
  { name: "Products", sectionId: "products", href: "#products", pageFallback: "/#products" },
  { name: "Platform", sectionId: "platform", href: "#platform", pageFallback: "/#platform" },
  { name: "Use Cases", sectionId: "use-cases", href: "#use-cases", pageFallback: "/#use-cases" },
  { name: "Academy", sectionId: "academy", href: "#academy", pageFallback: "/#academy" },
  { name: "About", sectionId: "about", href: "#about", pageFallback: "/#about" },
  { name: "Blog", sectionId: "blog", href: "#blog", pageFallback: "/#blog" },
  { name: "Contact", sectionId: "contact", href: "#contact", pageFallback: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Scrollspy observer on the homepage
  useEffect(() => {
    if (!isHome) {
      setActiveSection("");
      return;
    }

    const sectionIds = navItems.map((item) => item.sectionId);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140; // Navbar offset threshold

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const getItemHref = (item: (typeof navItems)[number]) => {
    return isHome ? item.href : item.pageFallback;
  };

  const isItemActive = (item: (typeof navItems)[number]) => {
    if (isHome) {
      return activeSection === item.sectionId;
    }
    return pathname.startsWith(`/${item.sectionId}`) || (item.sectionId === "use-cases" && pathname === "/solutions");
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200/90 bg-white/95 backdrop-blur-lg">
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Main">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center" aria-label="Indus AI — home">
            <Image
              src="/images/logo.png"
              alt="Indus AI"
              width={175}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation Connected in Exact Sequence */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {navItems.map((item) => {
              const active = isItemActive(item);
              return (
                <Link
                  key={item.name}
                  href={getItemHref(item)}
                  className={`font-raleway text-sm transition-all duration-200 px-3 py-1.5 rounded-full ${
                    active
                      ? "bg-slate-100 font-bold text-slate-900 shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <Button
              href={isHome ? "#contact" : "/#contact"}
              size="sm"
              className="hidden font-raleway sm:inline-flex rounded-full shadow-xs"
            >
              Talk to sales
            </Button>

            <button
              type="button"
              className="p-2 lg:hidden rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
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

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-slate-100 bg-white">
            <div className="space-y-1 px-2 pt-2 pb-4">
              {navItems.map((item) => {
                const active = isItemActive(item);
                return (
                  <Link
                    key={item.name}
                    href={getItemHref(item)}
                    className={`block rounded-lg px-3 py-2 font-raleway text-base transition-colors ${
                      active
                        ? "bg-slate-100 font-bold text-slate-900"
                        : "font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href={isHome ? "#contact" : "/#contact"}
                className="mt-2 block rounded-full bg-[#2C514C] px-3 py-2 text-center font-raleway text-base font-bold text-white shadow-xs"
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
