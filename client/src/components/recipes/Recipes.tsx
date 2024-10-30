import { Recipe } from "@/types";
import RecipeCard from "./RecipeCard";

export default function Recipes({ recipes }: { recipes: Recipe[] }) {
  return (
    <div className="w-screen h-[1000px] overflow-auto scrollbar-hide flex flex-col p-6 mb-8 ">
      <div className="w-full justify-start items-start gap-8 flex flex-row flex-wrap">
        {
          recipes?.length > 0 && recipes.map(({id, title, image, description}) => (
            <RecipeCard title={title} image={image} description={description} key={id} />
          ))
        }
      </div>
    </div>
  )
}    
