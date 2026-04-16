import AssetPreview from "@/components/AssetPreview";

export default function Page() {
  return (
    <div>
      <h1 className="text-[52px] leading-tight font-medium tracking-[-0.04em] text-[#1d2748] mb-8">
        Edited
      </h1>
      <AssetPreview
        title="Edited Video 1"
        src="/assets/videos/edited/sample-1.jpg"
        fileName="sample-1.jpg"
        description="Edited video thumbnail or preview."
      />
    </div>
  );
}