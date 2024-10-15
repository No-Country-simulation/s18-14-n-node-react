import { phone, house, envelope } from '@/assets';

const Contacto = () => {
    return (
        <div className="w-[1440px] h-[1024px] bg-white-300 items-center flex flex-row">
            <div className="flex flex-col mt-[201px] ml-[104px] mb-[353px] items-center">
                <div className="inline-flex w-[600px] items-start p-0">
                    <p className="text-[40px] font-bold leading-[56px] justify-start">
                        Ponte en contacto con nosotros
                    </p>
                </div>
                <div className="w-[571px] mt-[12px] text-[16px] gap-8 mb-[50px]">
                    <p className="w-full text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam
                        quis nostrud exercitation ullamco
                    </p>
                </div>
                <div className='flex flex-row w-[571px] h-[56px] mb-[35px]'>
                    <div className="w-[70px] h-[70px] mb-[35px] items-center">
                        <img src={house} className='m-[19px] w-[32px] h-[32px] mr-[24px]' />
                    </div>
                    <div className='flex-col ml-[24px]'>
                        <p className='text-[22px] mb-[10px] text-justify items-center w-[176px] leading-[32px]'>Nuestra ubicación</p>
                        <p className='tracking-[0.5px] text-[16px] text-gray-500 w-[360px] leading-[24px]'>123, calle sin nombre, Buenos Aires, Argentina</p>
                    </div>
                </div>
                <div className='flex flex-row w-[571px] h-[56px] mb-[35px]'>
                    <div className="w-[70px] h-[70px] mb-[35px] items-center">
                        <img src={phone} className='m-[19px] w-[32px] h-[32px] mr-[24px]' />
                    </div>
                    <div className='flex-col ml-[24px]'>
                        <p className='text-[22px] mb-[10px] text-justify items-center w-[176px] leading-[32px]'>Teléfono</p>
                        <p className='tracking-[0.5px] text-[16px] text-gray-500 w-[360px] leading-[24px]'>(+54) 11 1231234
                        </p>
                    </div>
                </div>
                <div className='flex flex-row w-[571px] h-[56px]'>
                    <div className="w-[70px] h-[70px] mb-[35px] items-center">
                        <img src={envelope} className='m-[19px] w-[32px] h-[32px] mr-[24px]' />
                    </div>
                    <div className='flex-col ml-[24px]'>
                        <p className='text-[22px] mb-[10px] text-justify items-center w-[200px] leading-[32px]'>Correo electrónico</p>
                        <p className='tracking-[0.5px] text-[16px] text-gray-500 w-[360px] leading-[24px]'>info@recetas.com</p>
                    </div>
                </div>
            </div>
            <div className='ml-[200px] w-[470px] h-[530px] bg-white pr-[154px] flex flex-col flex-shrink-0'>
                <div className='w-[370px] h-[50px] border-[1px] rounded-[6px] mt-[50px] flex-row mb-[25px] mx-[50px]'>
                    <input type='text' className="w-[334px] h-[26px] my-[12px] ml-[20px] mr-[16px] text-[16px] items-center" placeholder='Nombre' />
                </div>
                <div className='w-[370px] h-[50px] border-[1px] rounded-[6px] flex-row mb-[25px] mx-[50px]'>
                    <input type='email' className="w-[334px] h-[26px] my-[12px] ml-[20px] mr-[16px] text-[16px] items-center" placeholder='Correo electrónico' />
                </div>
                <div className='w-[370px] h-[50px] border-[1px] rounded-[6px] flex-row mb-[25px] mx-[50px]'>
                    <input type='tel' className="w-[334px] h-[26px] my-[12px] ml-[20px] mr-[16px] text-[16px] items-center" placeholder='Teléfono' />
                </div>
                <div className='w-[370px] h-[130px] border-[1px] rounded-[6px] flex-row mb-[25px] mx-[50px]'>
                    <textarea className="w-[330px] h-[90px] m-[20px] text-[16px] items-center" placeholder='Escribe tu mensaje'>

                    </textarea>
                </div>
                    <button className='bg-[#9E9696] w-[370px] text-center py-[13px] px-[28px] mx-[50px] text-white rounded-[6px]'>
                        Enviar
                    </button>
            </div>
        </div >
    )
}
export default Contacto;
