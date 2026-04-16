import SidebarMedia from "@/components/SidebarMedia";
import MobileSectionSelect from "@/components/MobileSectionSelect";

const moreItems = [
  { label: "Section 1", href: "/more" },
];

export default function MoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1500px]">
      <MobileSectionSelect items={moreItems} />

      <div className="lg:flex">
        <SidebarMedia title="More" items={moreItems} />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}