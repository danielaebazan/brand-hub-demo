import SidebarMedia from "@/components/SidebarMedia";

export default function PhotosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1500px]">
      <SidebarMedia
        title="Photos"
        items={[
          { label: "Stock", href: "/photos/stock" },
          { label: "Raw", href: "/photos/raw" },
        ]}
      />
      <main className="flex-1 px-10 py-10">{children}</main>
    </div>
  );
}