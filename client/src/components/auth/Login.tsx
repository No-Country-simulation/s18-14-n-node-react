import { Link, useNavigate} from "react-router-dom";
import { verduras } from "@/assets";
import axios from 'axios';
import { UserLoginResponse } from "@/models";
import { login } from "@/services/auth";
import { useState } from "react";
import { isEmailValid } from "@/helpers/format";

interface InputValues {
    value: string;
    error: string;
}

type InputTypes =
    | "username"
    | "email"
    | "password"

type FormValues = Record<InputTypes, InputValues>

const defaultValue: InputValues = {
    value: "",
    error: "",
}

const defaultValues: FormValues = {
    username: defaultValue,
    email: defaultValue,
    password: defaultValue
}


export const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState<FormValues>(defaultValues);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: {
                value: value,
            }
        });
    }

    const onSubmit = async () => {

        const email = isEmailValid(form.email.value);

        const user = email ?
            {
                email: form.email.value ? form.email.value : '',
                password: form.password.value,
            }
            :
            {
                username: form.email.value ? form.email.value : '',
                password: form.password.value,
            }


        try {
            setIsLoading(true);
            const data : { data: UserLoginResponse } = await login(user);
            console.log(data);
            setIsLoading(false);
            navigate("/navigation/Profile")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
            }
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="w-screen flex h-screen items-center">
                <div className="flex flex-row mx-auto">
                    <div className="bg-colorAuth flex-shrink-0 items-start gap-10">
                        <div className="flex-col mx-20 items-start gap-10">
                            <p className="w-full text-4xl font-semibold pt-10 text-colorencabezados">
                                Iniciar sesión
                            </p>
                            <p className="h-8 w-full gap-2 text-colortextosubtitulos mt-10 text-xl">
                                Email o nombre de usuario
                            </p>
                            <input
                                name="email"
                                onChange={handleChange}
                                value={form.email.value}
                                type="email"
                                className="h-12 w-full border py-3 pl-5 pr-4 items-center gap-3 rounded-md border-colorprimario mt-2 flex-1 flex-shrink-0 basis-0"
                                placeholder="Ej: maled o male12@gmail.com">
                            </input>

                            <p className="h-8 w-full gap-2 text-colortextosubtitulos mt-10 text-xl">
                                Contraseña
                            </p>

                            <input
                                type='password'
                                name="password"
                                onChange={handleChange}
                                value={form.password.value}
                                className="h-12 w-full border py-3 pl-5 pr-4 items-center gap-3 rounded-md border-colorprimario mt-2 flex-1 flex-shrink-0 basis-0"
                                placeholder="Nueva contraseña">
                            </input>
                            
                            
                                <button className='bg-colorbutton w-full h-12 text-center py-2 px-20 text-white mt-6 rounded-md' onClick={()=>onSubmit()}>
                                    {isLoading? "Cargando..." : "Iniciar sesión"}
                                </button>
                            

                            <Link to='/recuperarContraseña' className="w-full">
                                <p className="text-colortextogeneral text-center mt-10">  Olvidaste tu contraseña?</p>
                            </Link>
                            <div className="w-full flex-row mt-4 text-center">
                                <p className="text-colortextosubtitulos">Aun no eres miembro?
                                    <Link to='/Register'><span className="text-colorbutton pl-2">Registrate</span></Link></p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-shrink-0">
                        <img src={verduras} className="w-full h-full rounded-xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;