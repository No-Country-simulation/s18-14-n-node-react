import { envelope, house, phone } from '@/assets';
import Button from '../Button.tsx';

const Contacto = () => {

    const handleClick = () => {
        console.log('Mensaje enviado');
    }
    return (
        <div className="bg-background items-center m-auto lg:flex grid grid-rows-1">
            <div className="lg:my-16 w-1/2 lg:mb-16 lg:gap-12 flex m-auto lg:flex-col justify-between">
                <div className="mt-4 items-start text-center lg:flex-col ml-6">
                    <h1 className="lg:text-5xl text-head_text lg:leading-[56px] lg:mr-6 mx-auto text-left font-bold mb-3 text-4xl leading-10">
                        Ponte en contacto con nosotros
                    </h1>
                    <p className="lg:text-[16px] font-normal lg:w-[579px] lg:h-[72px] lg:mr-6 text-subtitle_text leading-6 text-sm text-left lg:mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam
                        quis nostrud exercitation ullamco
                    </p>
                </div>
                <div className='ml-12 lg:w-[441px] m-auto mt-4 w-3/4'>
                    <div className='flex lg:w-full lg:h-auto lg:mb-8 mb-4'>
                        <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] items-center bg-accent70 rounded-[5px]">
                            <img src={house} className='lg:m-[19px] lg:w-8 lg:h-8 w-[18px] h-[18px] m-[10px]' />
                        </div>
                        <div className='ml-6 items-center lg:w-[347px]'>
                            <p className='lg:text-lg text-[16px] lg:mb-3 text-body_text text-justify leading-8'>Nuestra ubicación</p>
                            <p className='tracking-[0.5px] lg:text-[16px] text-[14px] text-primary_text_color lg:w-full lg:leading-6 w-full mr-4 leading-8'>123, calle sin nombre, Buenos Aires, Argentina</p>
                        </div>
                    </div>
                    <div className='flex lg:w-full lg:h-auto lg:mb-8 mb-4'>
                        <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] items-center bg-accent70 rounded-[5px]">
                            <img src={phone} className='lg:m-[19px] lg:w-8 lg:h-8 w-[18px] h-[18px] m-[10px]' />
                        </div>
                        <div className='flex-col ml-6 items-center lg:w-[347px]'>
                            <p className='lg:text-lg text-[16px] lg:mb-3 text-body_text text-justify leading-8'>Teléfono</p>
                            <p className='tracking-[0.5px] lg:text-[16px] text-[14px] text-primary_text_color lg:w-full lg:leading-6 w-full leading-8'>(+54) 11 1231234</p>
                        </div>
                    </div>
                    <div className='flex lg:w-full lg:h-auto lg:mb-9 mb-4'>
                        <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] items-center bg-accent70 rounded-[5px]">
                            <img src={envelope} className='lg:m-[19px] lg:w-8 lg:h-8 w-[18px] h-[18px] m-[10px]' />
                        </div>
                        <div className='flex-col ml-6 items-center lg:w-[347px]'>
                            <p className='lg:text-lg text-[16px] lg:mb-3 text-body_text text-justify leading-8'>Correo electrónico</p>
                            <p className='lg:tracking-[0.5px] lg:text-[16px] text-[14px] text-primary_text_color lg:w-[347px] lg:leading-6 w-[284px] leading-8'>info@recetas.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid-rows-2 items-center'>
                <div className='my-4 lg:w-[470px] mx-auto w-3/4 bg-card_background shadow-lg rounded-lg'>
                    <input type='text' className="lg:w-[370px] lg:h-12 border border-primary50 lg:rounded-lg rounded-md w-10/12 lg:mt-8 mt-3 mx-12 p-2 lg:px-4 lg:py-3 lg:mb-5 lg:text-[16px] text-sm items-center" placeholder='Nombre' />
                    <input type='email' className="lg:w-[370px] lg:h-12 border border-primary50 lg:rounded-lg rounded-md w-10/12 lg:mt-5 mt-3 mx-12  p-2 lg:px-4 lg:py-3 lg:mb-5 lg:text-[16px] text-sm items-center" placeholder='Correo electrónico' />
                    <input type='tel' className="lg:w-[370px] lg:h-12 border border-primary50 lg:rounded-lg rounded-md w-10/12 lg:mt-5 mt-3 mx-12 p-2 lg:px-4 lg:py-3 lg:mb-5 lg:text-[16px] text-sm items-center" placeholder='Teléfono' />
                    <input className="lg:w-[370px] lg:h-28 h-20 w-10/12 border border-primary50 rounded-lg text-start lg:mt-5 mt-3 mx-12 lg:p-4 p-2 lg:text-[16px] text-sm flex-start" placeholder='Escribe tu mensaje' />
                    <Button
                        type="filled"
                        onClick={handleClick}
                        className="bg-accent w-10/12 lg:w-[370px] lg:h-12 mx-12 lg:mt-7 mt-7 text-white lg:text-[16px] text-sm lg:mb-8 mb-6 hover:bg-primary-dark"
                        disabled={false}
                    >
                        Enviar
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Contacto;