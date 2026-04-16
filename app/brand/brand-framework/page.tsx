export default function Page() {
  return (
    <div>
      <h1 className="text-[52px] leading-tight font-medium tracking-[-0.04em] text-[#1d2748] mb-8">
        Our Brand Framework
      </h1>
      <p className="max-w-[1050px] text-[21px] leading-9 text-gray-700 mb-10">
        Intro text for the brand framework goes here.
      </p>
      <div className="max-w-[1060px] rounded-sm border border-gray-100 p-8 bg-white">
        <div className="text-[30px] font-medium text-[#1d2748] mb-3">
          Section heading
        </div>
        <p className="text-[18px] leading-8 text-gray-700 max-w-[920px]">
          Add your brand copy here. This can be a short explanation, rules, or
          guidance for the section.
        </p>
      </div>
    </div>
  );
}