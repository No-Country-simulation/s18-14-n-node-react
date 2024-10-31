import { useNavigate } from "react-router-dom";


interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
}

function RecipeCard({ title, description, image }: RecipeCardProps) {
  const navigate = useNavigate();


  return (
    <div className="group border-black w-[300px] pt-7 flex flex-col items-center relative">
      <img src={image} alt={title} className="size-[200px] group-hover:absolute z-50" />
      <div className="text-center py-7 px-3 group-hover:bg-secondary rounded-tl-[80px] rounded-br-[80px] relative group-hover:pt-[108px] group-hover:mt-[120px]">
        <h4 className="font-semibold text-lg text-subtitle_text line-clamp-1">{title}</h4>
        <p className="text-primary_text_color pt-4 pb-8 line-clamp-4">{description}</p>
        <button
          className="rounded-lg py-2.5 px-10 font-bold shadow-custom transition-colors duration-100 border-2 border-primary_text_color text-primary_text_color bg-transparent group-hover:bg-accent50 group-hover:border-accent50 group-hover:text-white hover:!bg-primary hover:!border-primary"
          onClick={() => navigate(`/detail`)}
        >
          Ver receta
        </button>
      </div>
    </div>
  )
}

export default RecipeCard;
