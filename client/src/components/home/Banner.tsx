import { Link } from "react-router-dom";

export default function Banner() {

  return (
    <div className="w-screen h-[303px] bg-[#111928]">
      <div className="h-[199px]; ml-[104px] mt-[52px] flex-col justify-center items-start gap-[30px] flex text-white">
        <div className=" font-['Lato'] flex-col justify-start items-start gap-[15px] flex">
          <div className="text-5xl font-extrabold leading-[56px]">Lorem Ipsum </div>
          <div className="text-xs font-normal leading-6 tracking-[0.50px] text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dolor<br />pellentesque, varius elit quis, malesuada quam.</div>
        </div>
        <Link to='/' className="px-7 py-[13px] bg-[#9E9696] rounded-[6px] text-center text-xs font-['Lato'] font-bold leading-6 tracking-[0.50px]">
          Ingresar ingredientes
        </Link>
      </div>
    </div>
  )
}
