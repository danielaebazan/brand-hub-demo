import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1 className="text-[52px] leading-tight font-medium tracking-[-0.04em] text-[#1d2748] mb-8">
        More
      </h1>
      <p className="max-w-[1050px] text-[21px] leading-9 text-gray-700 mb-8">
        Extra resources and external links.
      </p>

      <Link
        href="https://example.com"
        target="_blank"
        className="text-[#1d2748] underline underline-offset-4"
      >
        Website
      </Link>
    </div>
  );
}