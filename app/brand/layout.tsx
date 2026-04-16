import SidebarBrand from "@/components/SidebarBrand";
import MobileSectionSelect from "@/components/MobileSectionSelect";

const brandItems = [
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

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1500px]">
      <MobileSectionSelect items={brandItems} />

      <div className="lg:flex">
        <SidebarBrand />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}