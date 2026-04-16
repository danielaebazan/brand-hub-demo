import AssetPreview from "@/components/AssetPreview";

export default function Page() {
  return (
    <div>
      <h1 className="text-[52px] leading-tight font-medium tracking-[-0.04em] text-[#1d2748] mb-8">
        Stock
      </h1>
      <AssetPreview
        title="Stock Image 1"
        src="/assets/photos/stock/sample-1.jpg"
        fileName="sample-1.jpg"
        description="Approved stock image."
      />
    </div>
  );
}