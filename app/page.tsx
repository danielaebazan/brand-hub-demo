import Link from "next/link";

const sections = [
  {
    title: "Brand Kit",
    description: "Logo, colors, fonts, messaging, and identity basics.",
    href: "/brand",
  },
  {
    title: "Photos",
    description: "Preview, download, and browse approved image assets.",
    href: "/photos",
  },
  {
    title: "Videos",
    description: "Access edited and raw video assets in one place.",
    href: "/videos",
  },
  {
    title: "Print",
    description: "Final files and templates for print-ready materials.",
    href: "/print",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-10 py-16">
      <section className="max-w-[820px]">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Brand Hub
        </p>

        <h1 className="text-5xl font-medium tracking-[-0.05em] text-[#1d2748] mb-5">
          Our Brand Framework
        </h1>

        <p className="text-[19px] leading-8 text-gray-700 mb-10">
          A central place to explore brand guidelines, visual assets, and supporting materials in one organized system.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <p className="mb-2 text-sm font-medium text-gray-500">Section</p>
            <h2 className="mb-3 text-2xl font-medium tracking-[-0.03em] text-[#1d2748]">
              {section.title}
            </h2>
            <p className="text-sm leading-6 text-gray-600">
              {section.description}
            </p>

            <div className="mt-6 text-sm font-medium text-[#1d2748] underline underline-offset-4">
              Open
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}