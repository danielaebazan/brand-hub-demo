import SidebarMedia from "@/components/SidebarMedia";
import MobileSectionSelect from "@/components/MobileSectionSelect";

const printItems = [
  { label: "Final", href: "/print/final" },
  { label: "Template", href: "/print/template" },
];

export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1500px]">
      <MobileSectionSelect items={printItems} />

      <div className="lg:flex">
        <SidebarMedia title="Print" items={printItems} />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}