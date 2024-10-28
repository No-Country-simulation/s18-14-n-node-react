import { Link } from "react-router-dom";

export default function BigCard() {
  return (
    <div className="flex flex-col sm:flex-row self-center shadow-sm shadow-gray-700">
      <img src="/assets/bigcard-image.png" alt="bigcard image" className="w-screen sm:size-[500px]" />
      <div className="h-[500px] w-screen sm:w-[616px] flex flex-col justify-center gap-6 px-16">
        <span className="font-extrabold text-[40px] leading-[56px] text-[#2c2c2c]">Titulo Receta</span>
        <span className="font-normal text-base text-[#4d4d4d]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dolor
          pellentesque, varius elit quis, malesuada quam.
        </span>
        <Link to='/' className="w-[184px] h-[50px] flex justify-center items-center gap-2.5 bg-[#990047] px-[18px] py-[13px] rounded-lg">
          <span className="font-bold text-base text-[#fff6e9]">Hacer receta</span>
        </Link>
      </div>
    </div>
  )
}
