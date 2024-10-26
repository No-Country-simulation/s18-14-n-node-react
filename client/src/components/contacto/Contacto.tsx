import { envelope, house, phone } from '@/assets';
import Button from '../Button.tsx';

const Contacto = () => {

    const handleClick = () => {
        console.log('Mensaje enviado');
    }
    return (
        <div className="lg:w-[1440px] lg:h-[1024px] bg-background w-[834px] h-[942px] lg:flex grid grid-rows-1">
            <div className="lg:w-[571px] lg:h-[470px] lg:mt-[202px] lg:ml-[104px] lg:gap-[50px] m-[50px] flex lg:flex-col justify-between">
                <div className="lg:w-[571px] lg:h-[140px] items-start w-[361px] lg:flex-col">
                    <h1 className="lg:text-5xl text-head_text lg:leading-[56px] text-left font-bold mb-3 text-4xl h:[80px] leading-[40px]">
                        Ponte en contacto con nosotros
                    </h1>
                    <p className="lg:text-[16px] font-normal lg:w-[579px] lg:h-[72px] text-subtitle_text lg:leading-6 w-full h-auto leading-8 mr:auto text-sm text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam
                        quis nostrud exercitation ullamco
                    </p>
                </div>
                <div className='ml-[60px]'>
                    <div className='flex lg:w-[441px] lg:h-[70px] mb-[35px]'>
                        <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] items-center bg-accent70 rounded-[5px]">
                            <img src={house} className='lg:m-[19px] lg:w-8 lg:h-8 w-[18px] h-[18px] m-[10px]' />
                        </div>
                        <div className='flex-col ml-6 items-center lg:w-[347px] '>
                            <p className='lg:text-lg text-[16px] lg:mb-3 text-body_text text-justify leading-8'>Nuestra ubicación</p>
                            <p className='lg:tracking-[0.5px] lg:text-[16px] text-[14px] text-primary_text_color lg:w-[347px] lg:leading-6 w-[284px] leading-8'>123, calle sin nombre, Buenos Aires, Argentina</p>
                        </div>
                    </div>
                    <div className='flex lg:w-[441px] lg:h-[70px] mb-[35px]'>
                        <div className="lg:w-[70px] lg:h-[70px] w-[40px] h-[40px] items-center bg-accent70 rounded-[5px]">
                            <img src={phone} className='lg:m-[19px] lg:w-8 lg:h-8 w-[18px] h-[18px] m-[10px]' />
                        </div>
                        <div className='flex-col ml-6 items-center lg:w-[347px]'>
                            <p className='lg:text-lg text-[16px] lg:mb-3 text-body_text text-justify leading-8'>Teléfono</p>
                            <p className='lg:tracking-[0.5px] lg:text-[16px] text-[14px] text-primary_text_color lg:w-[347px] lg:leading-6 w-[284px] leading-8'>(+54) 11 1231234</p>
                        </div>
                    </div>
                    <div className='flex lg:w-[441px] lg:h-[70px] mb-[35px]'>
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
            <div className='grid-rows-2 items-center mx-auto mb-[40px]'>
                <div className='lg:mt-[202px] w-[470px] h-[530px] bg-card_background shadow-lg rounded-lg'>
                    <input type='text' className="w-[370px] h-[50px] border border-primary50 rounded-lg mt-[50px] mx-[50px] px-4 py-3 mb-[25px] text-[16px] items-center" placeholder='Nombre' />
                    <input type='email' className="w-[370px] h-[50px] border border-primary50 rounded-lg mx-[50px] px-4 py-3 mb-[25px] text-[16px] items-center" placeholder='Correo electrónico' />
                    <input type='tel' className="w-[370px] h-[50px] border border-primary50 rounded-lg mx-[50px] px-4 py-3 mb-[25px] text-[16px] items-center" placeholder='Teléfono' />
                    <input className="w-[370px] h-[130px] border border-primary50 rounded-lg text-start mx-[50px] p-5 mb-[25px] text-[16px] flex-start" placeholder='Escribe tu mensaje' />
                    <Button
                        type="filled"
                        onClick={handleClick}
                        className="bg-accent w-[370px] h-[50px] mx-[50px] text-white text-[16px] mb-[50px] hover:bg-primary-dark"
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