export default function AssetPreview({
  title,
  src,
  fileName,
  description,
}: {
  title: string;
  src: string;
  fileName: string;
  description?: string;
}) {
  return (
    <section className="mb-10">
      <h3 className="text-2xl font-medium text-[#1d2748] mb-2">{title}</h3>

      {description && (
        <p className="text-[18px] leading-8 text-gray-700 max-w-[920px] mb-6">
          {description}
        </p>
      )}

      <div className="rounded-sm overflow-hidden border border-gray-100 bg-[#f8fafc]">
        <img
          src={src}
          alt={title}
          className="w-full max-w-[980px] object-cover block"
        />
      </div>

      <a
        href={src}
        download={fileName}
        className="inline-block mt-4 text-sm font-medium text-[#1d2748] underline underline-offset-4"
      >
        Download {fileName}
      </a>
    </section>
  );
}