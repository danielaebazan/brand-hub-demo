"use client";

import { usePathname, useRouter } from "next/navigation";

type Item = {
  label: string;
  href: string;
};

export default function MobileSectionSelect({ items }: { items: Item[] }) {
  const pathname = usePathname();
  const router = useRouter();

  const currentValue =
    items.find(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/")
    )?.href || items[0]?.href || "";

  return (
    <div className="lg:hidden border-b border-gray-200 bg-white px-4 py-3 sm:px-6">
      <select
        value={currentValue}
        onChange={(e) => router.push(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none"
      >
        {items.map((item) => (
          <option key={item.href} value={item.href}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}