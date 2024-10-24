import { envelope, house, phone } from '@/assets';
import Button from '../Button.tsx';

const Contacto = () => {

    const handleClick = () => {
        console.log('Mensaje enviado');
    }
    return (
        <div className="w-full h-screen bg-background flex">
            <div className="w-1/2 mt-56 ml-48 flex flex-col">
                <div className="w-full items-start">
                    <h1 className="text-5xl text-head_text font-bold leading-4 mb-8 text-left">
                        Ponte en contacto con nosotros
                    </h1>
                    <p className="pr-8 text-3xl w-full text-subtitle_text leading-10 text-left mb-16">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam
                        quis nostrud exercitation ullamco
                    </p>
                </div>
                <div className='flex w-full mb-8'>
                    <div className="w-20 h-20 items-center bg-accent70 rounded-lg">
                        <img src={house} className='m-5 w-9 h-9' />
                    </div>
                    <div className='flex-col ml-6 items-center w-full'>
                        <p className='text-2xl mb-3 text-body_text text-justify w-3/4 leading-8'>Nuestra ubicación</p>
                        <p className='tracking-[0.5px] text-lg text-primary_text_color w-full leading-6'>123, calle sin nombre, Buenos Aires, Argentina</p>
                    </div>
                </div>
                <div className='flex flex-row w-full mb-8'>
                    <div className="w-20 h-20 items-center bg-accent70 rounded-lg">
                        <img src={phone} className='m-5 w-9 h-9' />
                    </div>
                    <div className='flex-col ml-6 items-center w-full'>
                        <p className='text-2xl mb-3 text-body_text text-justify w-3/4 leading-8'>Teléfono</p>
                        <p className='tracking-[0.5px] text-lg text-primary_text_color w-full leading-6'>(+54) 11 1231234</p>
                    </div>
                </div>
                <div className='flex w-full mb-8'>
                    <div className="w-20 h-20 items-center bg-accent70 rounded-lg">
                        <img src={envelope} className='m-5 w-9 h-9' />
                    </div>
                    <div className='flex-col ml-6 items-center w-full'>
                        <p className='text-2xl mb-3 text-body_text text-justify w-3/4 leading-8'>Correo electrónico</p>
                        <p className='tracking-[0.5px] text-lg text-primary_text_color w-full leading-6'>info@recetas.com</p>
                    </div>
                </div>
            </div>
            <div className='mt-48 ml-8 w-1/2 h-[650px] bg-card_background pr-32 mr-64 flex-col shadow-md'>
                <input type='text' className="w-full h-auto border border-primary50 rounded-lg mx-14 mt-12 pl-5 py-3 mb-8 text-lg items-center" placeholder='Nombre' />
                <input type='email' className="w-full h-auto border border-primary50 rounded-lg mx-14  pl-5 py-3 mb-8 text-lg items-center" placeholder='Correo electrónico' />
                <input type='tel' className="w-full h-auto border border-primary50 rounded-lg mx-14  pl-5 py-3 mb-8 text-lg items-center" placeholder='Teléfono' />
                <input className="w-full h-1/3 border border-primary50 rounded-lg mx-14 text-start pl-5 py-3 mb-8 text-lg flex-start" placeholder='Escribe tu mensaje' />
                <Button
                    type="filled"
                    onClick={handleClick}
                    className="bg-accent text-white hover:bg-primary-dark mx-14 w-full"
                    disabled={false}
                >
                    Enviar
                </Button>
            </div>
        </div >
    )
}
export default Contacto;