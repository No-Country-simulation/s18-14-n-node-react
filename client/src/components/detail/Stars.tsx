import { starYellow, starGray } from "@/assets";

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="inline-flex gap-2.5">
      {Array.from({ length: rating }, (_, i) => (
        <img key={i} src={starYellow} alt="rating" className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]" />
      ))}
      {Array.from({ length: 5 - rating }, (_, i) => (
        <img key={i} src={starGray} alt="rating" className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]" />
      ))}
    </div>
  )
}
