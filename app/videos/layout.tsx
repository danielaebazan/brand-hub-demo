import SidebarMedia from "@/components/SidebarMedia";
import MobileSectionSelect from "@/components/MobileSectionSelect";

const videoItems = [
  { label: "Edited", href: "/videos/edited" },
  { label: "Raw", href: "/videos/raw" },
];

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[1500px]">
      <MobileSectionSelect items={videoItems} />

      <div className="lg:flex">
        <SidebarMedia title="Videos" items={videoItems} />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}