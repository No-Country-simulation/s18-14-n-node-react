import { Recipe } from "@/types";
import Card from "./Card";

export default function Recipes({ recipes }: { recipes: Recipe[] }) {

  return (
    <div className="w-screen flex flex-col p-6 mb-8">
      <div className="w-full justify-center items-start gap-8 flex flex-row flex-wrap">
        {
          recipes?.length > 0 && recipes.map(({id, title, image, description}) => (
            <Card title={title} image={image} description={description} key={id} />
          ))
        }
      </div>
    </div>
  )
}    
