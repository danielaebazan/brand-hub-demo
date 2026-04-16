import SidebarMedia from "@/components/SidebarMedia";

export default function MoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1500px]">
      <SidebarMedia
        title="More"
        items={[
          { label: "Section 1", href: "/more" },
        ]}
      />
      <main className="flex-1 px-10 py-10">{children}</main>
    </div>
  );
}