import SidebarMedia from "@/components/SidebarMedia";

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1500px]">
      <SidebarMedia
        title="Videos"
        items={[
          { label: "Edited", href: "/videos/edited" },
          { label: "Raw", href: "/videos/raw" },
        ]}
      />
      <main className="flex-1 px-10 py-10">{children}</main>
    </div>
  );
}