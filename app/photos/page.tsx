import AssetGrid from "@/components/AssetGrid";
import { photoAssets } from "@/data/photos";

export default function PhotosPage() {
  return (
    <section>
      <h1 className="mb-8 text-3xl font-semibold text-[#1d2748]">Photos</h1>
      <AssetGrid assets={photoAssets} />
    </section>
  );
}