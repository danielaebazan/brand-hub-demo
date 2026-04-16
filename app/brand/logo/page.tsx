import AssetPreview from "@/components/AssetPreview";

export default function Page() {
  return (
    <div>
      <h1 className="text-[52px] leading-tight font-medium tracking-[-0.04em] text-[#1d2748] mb-8">
        Our Logo
      </h1>
      <p className="max-w-[1050px] text-[21px] leading-9 text-gray-700 mb-10">
        Add logo usage rules and downloadable files here.
      </p>

      <AssetPreview
        title="Primary Logo"
        src="/assets/brand/logo/logo-black.svg"
        fileName="logo-black.svg"
        description="Use on light backgrounds."
      />
    </div>
  );
}