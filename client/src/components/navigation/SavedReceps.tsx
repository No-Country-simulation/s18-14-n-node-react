import { RecetTarget } from "../commons/RecetTarget";
import { imgReceta, imgReceta1 } from "@/assets";

export default function SavedReceps() {
    interface RecetItem {
        imgSrc?: string;
        recetName?: string;
        recetText: string;
      }
    
      const recetItems: RecetItem[] = [
        { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
        { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
        { imgSrc: imgReceta1, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
        { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
        { imgSrc: imgReceta1, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
        { imgSrc: imgReceta, recetName: 'Receta', recetText: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit. " },
      ];
    
      return (
        <div className='grid grid-cols-1 sm:grid-cols-2 px-8 lg:grid-cols-3 gap-8 '>
          {
            recetItems.map(item => (
              <RecetTarget key={item.recetName} {...item} />
            ))
          }
        </div>
      )

}