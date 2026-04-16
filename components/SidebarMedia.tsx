"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  label: string;
  href: string;
};

export default function SidebarMedia({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-[290px] shrink-0 bg-white px-8 pt-10 pb-16 min-h-screen border-r border-gray-200">
      <div className="text-xs tracking-widest text-gray-400 mb-5 uppercase">
        {title}
      </div>

      <nav className="space-y-3 text-[15px] leading-6 text-gray-700">
        {items.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block transition-colors ${
                isActive ? "font-medium text-black" : "hover:text-black"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}