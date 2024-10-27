interface targetProps {
    imgSrc?: string;
    recetName?: string;
    recetText?: string;
}

export const RecetTarget = (props: targetProps): JSX.Element => {
    return (
        <article className="rounded-tl-roundTarget min-w-[290px] mx-auto min-h-[485px] my-10 lg:my-5">
            <img className="rounded-full h-1/2 mx-auto relative bottom-[-15%] bg-[#9E9696] shadow-custom" src={props.imgSrc}></img>
            <div className="px-7 shadow-custom bg-colorbgtarjetas h-3/4 min-h-fit flex-col rounded-br-roundTarget rounded-tl-roundTarget justify-between text-center pt-5">
                <h2 className="text-xl h-1/3 text-colorencabezados flex items-end justify-center mb-4 font-bold">{props.recetName}</h2>
                <p className="text-sm h-1/4 text-justify ">{props.recetText}</p>
                <button className="border-2 border-colorremolacha text-colorremolacha font-bold rounded-full px-12 py-3 mx-auto mt-10">Ver receta</button>
            </div>
        </article>
    )
}