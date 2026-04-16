"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Brand Asset Kit", href: "/brand" },
  { label: "Photos", href: "/photos" },
  { label: "Videos", href: "/videos" },
  { label: "Print", href: "/print" },
  { label: "More", href: "/more" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[86px] max-w-[1500px] items-center justify-between px-10">
        <Link
          href="/"
          className="text-[42px] font-semibold tracking-[-0.07em] text-[#1d2748]"
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

        <div className="text-3xl leading-none">⌕</div>
      </div>
    </header>
  );
}
