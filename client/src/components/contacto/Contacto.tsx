import { envelope, house, phone } from '@/assets';
import Button from '../Button.tsx';

const Contacto = () => {

    const handleClick = () => {
        console.log('Mensaje enviado');
    }
    return (
        <div className="w-[1440px] h-[1024px] bg-background flex flex-row">
            <div className="w-[571px] h-[470px] mt-[202px] ml-[104px] gap-12">
                <div className="w-[571px] h-[140px] items-start mb-[50px]">
                    <h1 className="text-5xl text-head_text leading-[56px] mb-3 text-left font-bold">
                        Ponte en contacto con nosotros
                    </h1>
                    <p className="text-[16px] font-normal w-[579px] h-[72px] text-subtitle_text leading-6 text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam
                        quis nostrud exercitation ullamco
                    </p>
                </div>                
                    <div className='flex w-[441px] h-[70px] mb-[35px]'>
                        <div className="w-[70px] h-[70px] items-center bg-accent70 rounded-[5px]">
                            <img src={house} className='m-[19px] w-8 h-8' />
                        </div>
                        <div className='flex-col ml-6 items-center w-[347px]'>
                            <p className='text-lg mb-3 text-body_text text-justify leading-8'>Nuestra ubicación</p>
                            <p className='tracking-[0.5px] text-[16px] text-primary_text_color w-[347px] leading-6'>123, calle sin nombre, Buenos Aires, Argentina</p>
                        </div>
                    </div>
                    <div className='flex w-[441px] h-[70px] mb-[35px]'>
                        <div className="w-[70px] h-[70px] items-center bg-accent70 rounded-[5px]">
                            <img src={phone} className='m-[19px] w-8 h-8' />
                        </div>
                        <div className='flex-col ml-6 items-center w-[347px]'>
                            <p className='text-lg mb-3 text-body_text text-justify leading-8'>Teléfono</p>
                            <p className='tracking-[0.5px] text-[16px] text-primary_text_color w-[347px] leading-6'>(+54) 11 1231234</p>
                        </div>
                    </div>
                    <div className='flex w-[441px] h-[70px] mb-[35px]'>
                        <div className="w-[70px] h-[70px] items-center bg-accent70 rounded-[5px]">
                            <img src={envelope} className='m-[19px] w-8 h-8' />
                        </div>
                        <div className='flex-col ml-6 items-center w-[347px]'>
                            <p className='text-lg mb-3 text-body_text text-justify leading-8'>Correo electrónico</p>
                            <p className='tracking-[0.5px] text-[16px] text-primary_text_color w-[347px] leading-6'>info@recetas.com</p>
                        </div>                    
                </div>
            </div>
            <div className='mt-[202px] ml-[141px] mr-[154px] rounded-[8px] w-[470px] h-[530px] bg-card_background flex-col shadow-md'>
                <div className='w-[370] h-[430] mt-8 mx-12 my-0'>
                    <input type='text' className="w-[370px] h-[50px] border border-primary50 rounded-lg  pl-5 py-3 mb-8 text-lg items-center" placeholder='Nombre' />
                    <input type='email' className="w-[370px] h-[50px] border border-primary50 rounded-lg   pl-5 py-3 mb-8 text-lg items-center" placeholder='Correo electrónico' />
                    <input type='tel' className="w-[370px] h-[50px] border border-primary50 rounded-lg   pl-5 py-3 mb-8 text-lg items-center" placeholder='Teléfono' />
                    <input className="w-[370px] h-[130px] border border-primary50 rounded-lg  text-start pl-5 py-3 mb-8 text-lg flex-start" placeholder='Escribe tu mensaje' />
                    <Button
                        type="filled"
                        onClick={handleClick}
                        className="bg-accent w-[370px] h-[50px] text-white text-lg hover:bg-primary-dark"
                        disabled={false}
                    >
                        Enviar
                    </Button>
                </div>
            </div>
        </div >
    )
}
export default Contacto;