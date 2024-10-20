import { imgReceta, imgReceta1 } from "@/assets";
import { RecetTarget } from "../commons/RecetTarget";


export default function Receps() {

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
    <div className='grid grid-cols-1 md:grid-cols-2 p-10 lg:grid-cols-3 gap-8'>
      {
        recetItems.map(item => (
          <RecetTarget key={item.recetName} {...item} />
        ))
      }
      {/* <RecetTarget
        imgSrc="https://dgari.com/wp-content/uploads/2022/02/Flan-de-vainilla-con-caramelo.png"
        recetName="Flan"
        recetText="Uno de los postres más sencillos y rápidos de preparar es este flan sabor vainilla con caramelo quemado.."
      /> */}
    </div>
  )
}