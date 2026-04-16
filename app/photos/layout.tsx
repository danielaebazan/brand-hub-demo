import SidebarMedia from "@/components/SidebarMedia";
import MobileSectionSelect from "@/components/MobileSectionSelect";

const photoItems = [
  { label: "Stock", href: "/photos/stock" },
  { label: "Raw", href: "/photos/raw" },
];

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1500px]">
      <MobileSectionSelect items={photoItems} />

      <div className="lg:flex">
        <SidebarMedia title="Photos" items={photoItems} />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}