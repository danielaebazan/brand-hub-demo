"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const items = [
  { label: "Brand Asset Kit", href: "/brand" },
  { label: "Photos", href: "/photos" },
  { label: "Videos", href: "/videos" },
  { label: "Print", href: "/print" },
  { label: "More", href: "/more" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="mx-auto flex h-[86px] max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="text-[34px] sm:text-[42px] font-semibold tracking-[-0.07em] text-[#1d2748]"
        >
          ROOT
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px] text-black">
          {items.map((item) => {
            const isActive =
              item.href === "/brand"
                ? pathname === "/brand" || pathname.startsWith("/brand/")
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-1 ${
                  isActive
                    ? "border-b-2 border-black"
                    : "border-b-2 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl leading-none text-[#1d2748]"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {items.map((item) => {
              const isActive =
                item.href === "/brand"
                  ? pathname === "/brand" || pathname.startsWith("/brand/")
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm ${
                    isActive ? "font-semibold text-[#1d2748]" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
