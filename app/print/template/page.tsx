import AssetPreview from "@/components/AssetPreview";

export default function Page() {
  return (
    <div>
      <h1 className="text-[52px] leading-tight font-medium tracking-[-0.04em] text-[#1d2748] mb-8">
        Template
      </h1>
      <AssetPreview
        title="Print Template"
        src="/assets/print/template/sample-1.jpg"
        fileName="sample-1.jpg"
        description="Template for print layout."
      />
    </div>
  );
}