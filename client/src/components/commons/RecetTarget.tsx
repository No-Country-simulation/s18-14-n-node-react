interface targetProps {
    imgSrc?: string;
    recetName?: string;
    recetText?: string;
}

export const RecetTarget = (props: targetProps): JSX.Element => {
    return (
        <article className="rounded-tl-round-target w-[290px] min-h-[485px] my-7">
            <img className="rounded-full h-1/2 mx-auto relative bottom-[-15%] bg-[#9E9696] shadow-custom" src={props.imgSrc}></img>
            <div className="px-7 shadow-custom bg-color-bg-tarjetas h-3/4 min-h-fit flex-col rounded-br-round-target rounded-tl-round-target justify-between text-center pt-5">
                <h2 className="text-xl h-1/3 text-color-encabezados flex items-end justify-center mb-4 font-bold">{props.recetName}</h2>
                <p className="text-sm h-1/4 text-justify ">{props.recetText}</p>
                <button className="border-2 border-color-remolacha text-color-remolacha font-bold rounded-full px-12 py-3 mx-auto mt-10">Ver receta</button>
            </div>
        </article>
    )
}