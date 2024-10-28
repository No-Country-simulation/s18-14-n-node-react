import { Link } from "react-router-dom";

export default function Banner() {

  return (
    <div className="w-screen h-[280px] bg-[#111928] relative">
      <img src="/assets/banner-image.png" alt="banner" className="min-w-[900px] h-auto overflow-hidden" />
      <div className="h-3/4 lg:h-[199px]; left-4 lg:left-[104px] top-[52px] absolute flex-col justify-center items-start gap-[30px] flex text-white">
        <div className=" font-['Lato'] flex-col justify-start items-start gap-[15px] flex">
          <h1 className="lg:text-5xl sm:text-2xl font-extrabold leading-9 lg:leading-[56px]">¡Te ayudamos a cocinar!</h1>
          <span className="text-xs font-normal leading-6 tracking-[0.50px] text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dolor<br />pellentesque, varius elit quis, malesuada quam.</span>
        </div>
        <Link to='/recipes/personalized' className="px-7 py-1 lg:py-[13px] bg-[#005C49] rounded-[6px] text-center text-xs font-['Lato'] font-bold leading-6 tracking-[0.50px]">
          Ingresar ingredientes
        </Link>
      </div>
    </div>
  )
}
