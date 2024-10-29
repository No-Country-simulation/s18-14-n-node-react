import {useNavigate} from "react-router-dom";
import Button from "../Button";

export default function BigCard() {
  const navigate = useNavigate();


  return (
    <div className="flex flex-col sm:flex-row mx-10 lg:mx-40 shadow-custom bg-secondary50 py-10 sm:py-0">
      <img src="/assets/bigcard-image.png" alt="bigcard image" className="size-[280px] lg:size-[350px] min-[1300px]:size-[500px] mx-auto" />
      <div className="flex flex-col justify-center items-center sm:items-start gap-4 lg:gap-6 px-8 lg:px-12 mt-4">
        <h2 className="font-extrabold text-4xl lg:text-5xl text-head_text">Titulo Receta</h2>
        <p className="text-subtitle_text text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel dolor
          pellentesque, varius elit quis, malesuada quam.
        </p>
        <Button type="filled" className="bg-primary" onClick={() => navigate("/recipes/personalized")}>
          Hacer receta
        </Button>
      </div>
    </div>
  )
}
