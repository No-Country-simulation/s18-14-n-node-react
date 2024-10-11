
export default function Profile() {

    return (
        <div className="w-auto h-screen px-8">
            <div className="w-full h-1/3 flex justify-center items-center align-middle py-4">
                <img src="./profpick.png" className="h-full"></img>
            </div>

            <div className="w-full grid grid-cols-7 gap-8 justify-between">
                <article className="bg-white rounded-3xl col-span-4 mt-3 p-8">
                    <div className="mb-5 w-full h-20">
                        <label
                            className=" block content-center h-1/2 font-bold text-base text-[#111928]"
                        >
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Primer Nombre"
                            value={""}
                            className="border border-gray-300 h-1/2 rounded-md w-full px-4 text-base focus:border-blue-500"
                        /*onChange={}*/
                        />
                    </div>

                    <div className="mb-5 w-full h-20">
                        <label
                            className=" block content-center h-1/2 font-bold text-base text-[#111928]"
                        >
                            Apellido
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Primer Nombre"
                            value={""}
                            className="border border-gray-300 h-1/2 rounded-md w-full px-4  focus:border-blue-500"
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
                            placeholder="Primer Nombre"
                            value={""}
                            className="border border-gray-300 h-1/2 rounded-md w-full px-4  focus:border-blue-500"
                        /*onChange={}*/
                        />
                    </div>

                    <div className="mb-5 w-full h-20">
                        <label
                            className=" block content-center h-1/2 font-bold text-base text-[#111928]"
                        >
                            Correo electrónico
                        </label>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Primer Nombre"
                            value={""}
                            className="border border-gray-300 h-1/2 rounded-md w-full px-4"
                        /*onChange={}*/
                        />
                    </div>

                    <div className="w-full text-center content-end h-20">
                        <button
                            type="submit"
                            id=""
                            value={"Enviar"}
                            className="border bg-[#9E9696] border-gray-300 h-1/2 rounded-md w-1/3 mx-auto px-4"
                        /*onClick={}*/
                        >Editar</button>
                    </div>

                </article>
                <article className="bg-white rounded-3xl text-center col-span-3 mt-3 p-8">
                    <div
                        className=" block content-center h-1/6 font-semibold text-2xl text-[#111928]"
                    >
                        Lorem ipsum
                    </div>

                    <div
                        className=" block text-base h-3/4 content-start font-normal text-[#637381]"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis venenatis dui. In eu pellentesque felis, 
                        non consectetur turpis. Vestibulum at consectetur nibh. Quisque risus turpis, facilisis eget nunc sed, luctus 
                        feugiat nulla. Vivamus elementum viverra sapien et hendrerit. Nunc vitae vulputate ante. Donec a interdum justo. 
                        Nam sed lectus posuere, egestas mi sed, luctus sapien.
                    </div>

                    <div className="w-full text-center content-end">
                        <button
                            type="submit"
                            id=""
                            value={"Enviar"}
                            className="border-2 bg-white border-[#9E9696] h-10 rounded-md w-1/2 mx-auto px-4"
                        /*onClick={}*/
                        >Lorem</button>
                    </div>

                </article>
            </div>

        </div>
    )
}
