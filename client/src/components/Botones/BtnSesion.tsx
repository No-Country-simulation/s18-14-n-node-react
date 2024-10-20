import { MouseEventHandler } from "react"

interface IBtnSesionProps{
    action: MouseEventHandler;
    imgSrc?: string;
}

export const BtnSesion = (props:IBtnSesionProps) =>{
    return(
        <button 
          onClick={props.action} 
          className="flex items-center min-w-max px-2 gap-3 rounded-lg h-1/2 my-auto focus:outline-none relative bg-colorbeig">
          <img 
            src={props.imgSrc} 
            className="w-10 h-10 rounded-md" 
          />
          <p className="text-colorencabezados"><i className="fa-solid fa-angle-down"></i></p>
        </button> 
    )
}