import Link from "next/link";

const items = [
  { label: "Our Brand Framework", href: "/brand" },
  { label: "Our Brand Persona", href: "/brand/persona" },
  { label: "Our Brand Tone & Voice", href: "/brand/tone-voice" },
  { label: "Our Brand Messaging", href: "/brand/messaging" },
  { label: "Our Logo", href: "/brand/logo" },
  { label: "Our Colors", href: "/brand/colors" },
  { label: "Our Fonts", href: "/brand/fonts" },
  { label: "Our Visual Stylings", href: "/brand/visual-stylings" },
  { label: "Our Motion", href: "/brand/motion" },
  { label: "Our Prism System", href: "/brand/prism-system" },
  { label: "Our Partners & Co-Marketing", href: "/brand/partners-co-marketing" },
];

export default function SidebarBrand() {
  return (
    <aside className="w-[290px] shrink-0 bg-white px-8 pt-10 pb-16 min-h-screen">
      <div className="text-xs tracking-widest text-gray-400 mb-5 uppercase">
        Sunrun Brand Basics
      </div>

      <nav className="space-y-3 text-[15px] leading-6 text-gray-700">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block hover:text-black transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}