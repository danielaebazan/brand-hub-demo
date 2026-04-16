"use client";

import Image from "next/image";
import { useState } from "react";
import AssetModal from "@/components/ AssetModal";
import type { PhotoAsset } from "@/data/photos";

export default function AssetGrid({ assets }: { assets: PhotoAsset[] }) {
  const [selected, setSelected] = useState<PhotoAsset | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {assets.map((asset) => (
          <button
            key={asset.src}
            onClick={() => setSelected(asset)}
            className="group text-left"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <Image
                src={asset.src}
                alt={asset.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-xl bg-white/90 backdrop-blur px-3 py-2">
                  <p className="text-sm font-medium text-[#1d2748]">{asset.name}</p>
                  <p className="text-xs text-gray-600">
                    {asset.type} · {asset.size}
                  </p>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <AssetModal asset={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}