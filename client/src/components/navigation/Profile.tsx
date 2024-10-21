import { photo } from "@/assets";

export default function Profile() {

    return (
        <div className="w-auto grow py-1 px-8 bg-[#FFFCF9]">
            <div className="w-full max-h-48 flex justify-center items-center align-middle py-4">
                <img src={photo} className="max-h-44"/>
            </div>

            <div className="w-full grid grid-cols-7 gap-8 justify-between pb-8">
                <article className="bg-white rounded-3xl h-max col-span-4 mt-3 p-8 shadow-custom">
                    <div className="mb-5 w-full h-20">
                        <label
                            className=" block content-center h-1/2 font-bold text-base text-[#11928]"
                        >
                            Nombre de usuario
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Nombre de usuario"
                            value={""}
                            className="border rounded-lg border-colorprimario h-1/2 w-full px-4 text-base"
                        /*onChange={}*/
                        />
                    </div>

                    <div className="mb-5 w-full h-20">
                        <label
                            className=" block content-center h-1/2 font-bold text-base text-[#111928]"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="email"
                            value={""}
                            className="border border-colorprimario h-1/2 rounded-md w-full px-4"
                        /*onChange={}*/
                        />
                    </div>

                    <div className="mb-5 w-full h-20">
                        <label
                            className=" block content-center h-1/2 font-bold text-base text-[#111928]"
                        >
                            Fecha de nacimiento
                        </label>
                        <input
                            type="date"
                            name=""
                            id=""
                            placeholder="dd/mm/aaaa"
                            value={""}
                            className="border border-colorprimario h-1/2 rounded-md w-full px-4 active:border-none"
                        /*onChange={}*/
                        />
                    </div>

                    

                    <div className="w-full text-center content-end h-20">
                        <button
                            type="submit"
                            id=""
                            value={"Enviar"}
                            className="border bg-colorremolacha h-1/2 rounded-md w-1/3 mx-auto px-4 hover:bg-coloracento text-white shadow-custom"
                        /*onClick={}*/
                        >Editar</button>
                    </div>

                </article>
                <article className="bg-white rounded-3xl flex-grow text-center col-span-3 mt-3 p-8 h-max min-h-[445px] shadow-custom">
                    <div
                        className=" block content-center h-1/6 font-semibold text-2xl text-"
                    >
                        Subí de plan
                    </div>

                    <div
                        className=" block text-base h-3/4 content-start font-normal text-colortextosubtitulos"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis venenatis dui. In eu pellentesque felis, 
                        non consectetur turpis. Vestibulum at consectetur nibh. Quisque risus turpis, facilisis eget nunc sed, luctus 
                        feugiat nulla. Vivamus elementum viverra sapien et hendrerit. Nunc vitae vulputate ante. Donec a interdum justo. 
                        Nam sed lectus posuere, egestas mi sed, luctus sapien.
                    </div>

                    <div className="w-full text-center content-end h-20">
                        <button
                            type="submit"
                            id=""
                            value={"Enviar"}
                            className="border-2 bg-white border-colorremolacha hover:text-colorremolacha h-10 rounded-md w-1/2 mx-auto px-4 shadow-custom"
                        /*onClick={}*/
                        >Ver planes</button>
                    </div>

                </article>
            </div>

        </div>
    )
}
