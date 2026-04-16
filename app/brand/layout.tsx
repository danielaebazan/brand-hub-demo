import SidebarBrand from "@/components/SidebarBrand";

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1500px]">
      <SidebarBrand />
      <main className="flex-1 px-10 py-10">{children}</main>
    </div>
  );
}