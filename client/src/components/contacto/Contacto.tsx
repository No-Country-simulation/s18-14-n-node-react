import { envelope, house, phone } from '@/assets';
import { useNavigate } from "react-router-dom";
import { BotonPrimary } from "../Botones/BotonPrimary";

const Contacto = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full h-screen bg-[#FFFCF9] flex flex-row">
            <div className="flex-col w-1/2 mt-56 ml-48">
                <div className="w-2/3 items-start">
                    <h1 className="text-5xl text-[#2C2C2C] font-bold leading-4 mb-8 text-left">
                        Ponte en contacto con nosotros
                    </h1>
                    <p className="pr-8 text-xl text-[#4D4D4D] text-left mb-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam
                        quis nostrud exercitation ullamco
                    </p>
                </div>
                <div className='flex flex-row w-full mb-8'>
                    <div className="w-20 h-20 items-center bg-[#003D31] rounded-lg">
                        <img src={house} className='m-5 w-9 h-9' />
                    </div>
                    <div className='flex-col ml-6 items-center w-full'>
                        <p className='text-2xl mb-3 text-[#333] text-justify w-3/4 leading-8'>Nuestra ubicación</p>
                        <p className='tracking-[0.5px] text-lg text-[#637381] w-full leading-6'>123, calle sin nombre, Buenos Aires, Argentina</p>
                    </div>
                </div>
                <div className='flex flex-row w-full mb-8'>
                    <div className="w-20 h-20 items-center bg-[#003D31] rounded-lg">
                        <img src={phone} className='m-5 w-9 h-9' />
                    </div>
                    <div className='flex-col ml-6 items-center w-full'>
                        <p className='text-2xl mb-3 text-[#333] text-justify w-3/4 leading-8'>Teléfono</p>
                        <p className='tracking-[0.5px] text-lg text-[#637381] w-full leading-6'>(+54) 11 1231234</p>
                    </div>
                </div>
                <div className='flex flex-row w-full mb-8'>
                    <div className="w-20 h-20 items-center bg-[#003D31] rounded-lg">
                        <img src={envelope} className='m-5 w-9 h-9' />
                    </div>
                    <div className='flex-col ml-6 items-center w-full'>
                        <p className='text-2xl mb-3 text-[#333] text-justify w-3/4 leading-8'>Correo electrónico</p>
                        <p className='tracking-[0.5px] text-lg text-[#637381] w-full leading-6'>info@recetas.com</p>
                    </div>
                </div>
            </div>
            <div className='mt-52 ml-14 w-1/4 h-[550px] bg-[#FFFCFA] pr-32 flex flex-col shadow-md'>
                <input type='text' className="w-full h-auto border border-[#AA2A66] rounded-lg mx-14 mt-12 pl-5 py-3 mb-8 text-lg items-center" placeholder='Nombre' />
                <input type='email' className="w-full h-auto border border-[#AA2A66] rounded-lg mx-14  pl-5 py-3 mb-8 text-lg items-center" placeholder='Correo electrónico' />
                <input type='tel' className="w-full h-auto border border-[#AA2A66] rounded-lg mx-14  pl-5 py-3 mb-8 text-lg items-center" placeholder='Teléfono' />
                <input className="w-full h-1/3 border border-[#AA2A66] rounded-lg mx-14 text-start pl-5 py-3 mb-8 text-lg flex-start" placeholder='Escribe tu mensaje' />
                <BotonPrimary
                    className="!bg-[#005C49] items-center mx-14 py-3 px-4 text-lg text-[#FFF5EE] h-auto w-full mb-10"
                    textBtn="Enviar"
                    action={() => navigate('/')}
                />
            </div>
        </div >
    )
}
export default Contacto;