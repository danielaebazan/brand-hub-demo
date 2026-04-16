"use client";

import Image from "next/image";
import type { PhotoAsset } from "@/data/photos";

export default function AssetModal({
  asset,
  onClose,
}: {
  asset: PhotoAsset;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 px-4 py-8 overflow-y-auto">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center justify-between text-white">
          <div>
            <h3 className="text-xl font-semibold">{asset.name}</h3>
            <p className="text-sm text-white/70">
              {asset.type} · {asset.size}
              {asset.width && asset.height ? ` · ${asset.width} x ${asset.height}` : ""}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
          >
            Close
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white">
          <div className="relative w-full bg-gray-100" style={{ aspectRatio: "16 / 10" }}>
            <Image
              src={asset.src}
              alt={asset.name}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="p-6">
            {asset.description && (
              <p className="mb-4 text-gray-700">{asset.description}</p>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={asset.src}
                download
                className="rounded-full bg-[#1d2748] px-5 py-2 text-sm font-medium text-white"
              >
                Download
              </a>

              <span className="text-sm text-gray-500">
                File: {asset.src.split("/").pop()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}