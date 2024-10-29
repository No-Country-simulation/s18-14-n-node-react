import Button from "../Button";

export default function Banner() {
  return (
    <div className="w-screen h-[280px] relative">
      <img src="/assets/banner-image.png" alt="banner" className="w-full h-full object-cover" />
      <div className="h-full absolute z-20 top-0 flex flex-col justify-center items-start px-10 lg:px-[100px] max-w-[800px]">
        <div className="mb-8">
          <h1 className="text-2xl lg:text-6xl font-extrabold text-secondary50">¡Te ayudamos a cocinar!</h1>
          <p className="tracking-[0.50px] text-secondary50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dolor pellentesque, varius elit quis, malesuada quam.
          </p>
        </div>
        <Button variant="filled-secondary" onClick={() => {}}>Ingresar ingredientes</Button>
      </div>
      <div className="bg-[#4F5663] opacity-50 w-full h-full absolute top-0"></div>
    </div>
  )
}
