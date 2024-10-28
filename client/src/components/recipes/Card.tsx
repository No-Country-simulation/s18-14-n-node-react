import { Recipe } from "@/types";
import { Link } from "react-router-dom";

export default function Card({ title, description, image }: Recipe) {
  return (
    <div className="w-[300px] h-[550px] mb-10">
      <div className="w-full flex justify-center -mb-32">
        <img className="w-60 h-60 rounded-full" src={image} />
      </div>
      <div className="h-[500px] w-[300px] flex flex-col justify-center items-center gap-2  bg-[#fff5ee] rounded-tl-[80px] rounded-br-[80px]">
        <div className="w-[290px] flex flex-col items-center gap-7 px-[35px] py-[30px]">
          <div className="flex flex-col gap-[15px]">
            <span data-tooltip-target="tooltip-name" className="font-semibold text-2xl text-center text-[#2c2c2c] line-clamp-1">
              {title}
            </span>
            {/* <span id="tooltip-name" className="tooltip tooltip-top">{title}</span> */}
            <span className="font-normal text-base text-center text-[#637381] line-clamp-4">
              {description}
            </span>
          </div>
          <Link to='' className="flex justify-center items-center gap-2.5 px-7 py-3 rounded-[50px] border border-solid border-[#66002f]">
            <span className="font-bold text-base text-center text-[#66002f]">Ver receta</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
