import { Link } from "react-router-dom";

export default function Card({ id, title, description }: { id: number, title: string, description: string }) {
  return (
    <div className="w-[290px] h-[485px] shadow shadow-[rgba(166, 175, 195, 0.40)] rounded-[8px] overflow-hidden flex-col justify-start items-start flex">
      <div className="self-stretch h-[230px] bg-[#9e9696]"></div>
      <div className="py-6 bg-white flex-col justify-between items-center gap-8 flex">
        <div className="flex-col justify-between items-center px-4 gap-[15px] flex">
          <span className="w-full text-center text-[#111928] text-[22px] font-['Lato'] font-semibold leading-8 text-wrap">{title}</span>
          <span className="text-center text-[#637381] text-[12px] font-['Lato'] font-normal leading-6 tracking-[0.50px]text-wrap">{description}</span>
        </div>
        <Link
          to={`/recipesdetails/${id}`}
          className="px-7 py-3 rounded-[50px] border border-[#DFE4EA] color-[#637381] text-xs font-['Lato'] font-bold leading-6 tracking-[0.50px]"
        >
          Lorem ipsum
        </Link>
      </div>
    </div>
  )
}
