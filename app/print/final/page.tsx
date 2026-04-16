import AssetPreview from "@/components/AssetPreview";

export default function Page() {
  return (
    <div>
      <h1 className="text-[52px] leading-tight font-medium tracking-[-0.04em] text-[#1d2748] mb-8">
        Final
      </h1>
      <AssetPreview
        title="Final Print File"
        src="/assets/print/final/sample-1.jpg"
        fileName="sample-1.jpg"
        description="Approved print-ready asset."
      />
    </div>
  );
}