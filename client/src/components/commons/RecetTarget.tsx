interface targetProps {
    imgSrc?: string;
    recetName?: string;
    recetText?: string;
}

export const RecetTarget = (props: targetProps): JSX.Element => {
    return(
        <article className="bg-white rounded-lg w-[290px] min-h-[485px] max-h-[485px]">
            <img className="rounded-t-lg h-1/2 bg-[#9E9696]" src=""></img>
        <div className="p-8 flex-col justify-between text-center px-2 pt-5">
            <h2 className="text-xl font-bold">{props.recetName}</h2>
            <p className="text-sm text-justify shrink-0">{props.recetText}</p>
            <button className="border-2 border-[#EEE] rounded-full px-12 py-3 mx-auto mt-10">LOREM IPSUM</button>
        </div>
        </article>
    )
}