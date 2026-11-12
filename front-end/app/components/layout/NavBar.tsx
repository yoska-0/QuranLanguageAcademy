"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Menu, X } from "lucide-react";

const LOGO_SRC = "/logo4.png";

const NAV_LINKS = [
  { label: "الرئيسية", href: "/" },
  { label: "الكورسات", href: "/courses" },
  { label: "المدرّسون", href: "/teachers" },
  { label: "عن الأكاديمية", href: "/about" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل معنا", href: "/contact" },
];

const LOGIN_HREF = "/login";
const SIGNUP_HREF = "/register";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // Add a shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll and close on Escape while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      dir="rtl"
      className={`sticky top-0 z-50 w-full border-b border-white/10 bg-white text-(--text-on-dark) transition-shadow ${
        scrolled ? "shadow-[0_6px_24px_rgba(0,26,56,0.25)]" : ""
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Quran Language Academy - Home"
          className="relative block h-14 w-48 shrink-0 lg:h-16 lg:w-64 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
        >
          <Image
            src={LOGO_SRC}
            alt="Quran Language Academy logo"
            fill
            sizes="256px"
            className="object-contain object-right"
            priority
          />
        </Link>

        {/* Links - large screens */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative block rounded-(--radius) px-3 py-2 text-[15px] font-medium transition-colors hover:text-(--gold-light) focus-visible:outline-2 focus-visible:outline-(--ring) ${
                    active ? "text-(--gold)" : "text-black"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-(--gold) transition-transform duration-200 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Auth buttons - large screens */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={LOGIN_HREF}
            className="rounded-(--radius) border text-(--gold)  px-5 py-2.5 text-sm font-semibold transition-colors border-(--gold) hover:text-(--gold-light) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring)"
          >
            تسجيل الدخول
          </Link>
          <Link
            href={SIGNUP_HREF}
            className="rounded-(--radius) bg-(--gold) px-5 py-2.5 text-sm font-bold text-(--navy) transition-colors hover:bg-(--gold-light) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--gold-cream)"
          >
            إنشاء حساب
          </Link>
        </div>

        {/* Menu button - mobile and tablet */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center  lg:hidden text-black cursor-pointer"
        >
          {open ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full origin-top border-t border-white/10 bg-white transition-[opacity,transform] duration-200 lg:hidden ${
          open
            ? "visible scale-y-100 opacity-100"
            : "invisible scale-y-95 opacity-0"
        }`}
      >
        <div className="mx-auto max-h-[calc(100dvh-4rem)] max-w-7xl overflow-y-auto px-4 pb-6 pt-3 sm:px-6">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    onClick={() => setOpen(false)}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-(--radius) px-3 py-3.5 text-base font-medium transition-colors hover:bg-(--background) ${
                      active ? "bg-(--background) text-(--gold)" : "text-black"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-(--gold)" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
            <Link
              href={LOGIN_HREF}
              onClick={() => setOpen(false)}
              className="rounded-(--radius) border text-(--gold) px-5 py-3 text-center text-sm  border-(--gold)"
            >
              تسجيل الدخول
            </Link>
            <Link
              href={SIGNUP_HREF}
              onClick={() => setOpen(false)}
              className="rounded-(--radius) bg-(--gold) px-5 py-3 text-center text-sm font-bold text-(--navy)  hover:bg-(--gold-light)"
            >
              إنشاء حساب
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
