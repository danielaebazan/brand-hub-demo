import SidebarMedia from "@/components/SidebarMedia";

export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1500px]">
      <SidebarMedia
        title="Print"
        items={[
          { label: "Final", href: "/print/final" },
          { label: "Template", href: "/print/template" },
        ]}
      />
      <main className="flex-1 px-10 py-10">{children}</main>
    </div>
  );
}