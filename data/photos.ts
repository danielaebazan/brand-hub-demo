export type PhotoAsset = {
  name: string;
  src: string;
  type: string;
  size: string;
  width?: number;
  height?: number;
  description?: string;
};

export const photoAssets: PhotoAsset[] = [
  {
    name: "Example Photo 1",
    src: "/assets/photos/stock/photo-1.jpg",
    type: "JPG",
    size: "1.2 MB",
    width: 1600,
    height: 1067,
    description: "Example description.",
  },
  {
    name: "Example Photo 2",
    src: "/assets/photos/stock/photo-2.jpg",
    type: "JPG",
    size: "842 KB",
    width: 1400,
    height: 933,
  },
];