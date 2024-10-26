import { Link, useNavigate } from "react-router-dom";
import { verduras, logoAuth, dottedShape } from "@/assets";
import axios from 'axios';
import { ResponseErrorMessage, UserLoginResponse } from "@/models";
import { login } from "@/services/auth";
import { useState } from "react";
import { isEmailValid } from "@/helpers/format";
import {ERROR_RESPONSE} from "@/constants";
import useAuthStore from "@/store/authStore";

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

        const { setToken, logout } = useAuthStore.getState();


        try {
            setIsLoading(true);
            const data: { data: UserLoginResponse } = await login(user);
            console.log(data);
            setIsLoading(false);
            setToken(data.data.accessToken);
            navigate("/navigation/Profile")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (Array.isArray(error.response?.data)) {
                    error.response?.data.forEach(e => {
                        setForm(prevForm => ({
                            ...prevForm,
                            [e.validation[0]]: {
                                ...prevForm[e.validation[0] as InputTypes],
                                error: ERROR_RESPONSE[e.message as ResponseErrorMessage]
                            }
                        }));
                    })
                }
                console.log(error.response?.data)
                alert(ERROR_RESPONSE[error.response?.data.description as ResponseErrorMessage]);
            }
            logout();
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="w-screen flex h-screen items-center">
                <div className="flex mx-auto lg:mx-auto lg:shadow-md">
                    <div className="bg-card_background flex-shrink-0 items-start gap-10 max-w-[500px] lg:shadow-md relative">
                        <div className="absolute end-0 lg:hidden">
                            <img src={dottedShape} />
                        </div>
                        <div className="lg:items-center lg:hidden">
                            <img src={logoAuth} className="lg:w-28 lg:h-28 mx-auto" />
                        </div>
                        <div className="flex-col mx-20 lg:mx-16 lg:mb-6 items-start gap-10">
                            <p className="w-full text-4xl font-semibold pt-10 text-head_text lg:text-xl">
                                Iniciar sesión
                            </p>
                            <p className="h-8 w-full gap-2 text-subtitle_text mt-10 lg:mt-6 text-xl lg:text-md">
                                Email o nombre de usuario
                            </p>
                            <input
                                name="email"
                                onChange={handleChange}
                                value={form.email.value}
                                type="email"
                                className="h-12 w-full border py-3 pl-5 pr-4 items-center gap-3 rounded-md border-primary mt-2 flex-1 flex-shrink-0 basis-0"
                                placeholder="Ej: maled o male12@gmail.com">
                            </input>
                            <p className="h-8 w-full gap-2 text- mt-10 md:mt-6 text-xl md:text-lg">
                                Contraseña
                            </p>
                            <input
                                type='password'
                                name="password"
                                onChange={handleChange}
                                value={form.password.value}
                                className="h-12 w-full border py-3 pl-5 pr-4 items-center gap-3 rounded-md border-primary mt-2 flex-1 flex-shrink-0 basis-0"
                                placeholder="Nueva contraseña">
                            </input>
                            <button className='bg-accent w-full h-12 text-center py-2 px-20 text-white mt-6 rounded-md' onClick={() => onSubmit()}>
                                {isLoading ? "Cargando..." : "Iniciar sesión"}
                            </button>
                            <Link to='/recuperarContraseña' className="w-full">
                                <p className="text-body_text text-center mt-10">  Olvidaste tu contraseña?</p>
                            </Link>
                            <div className="w-full flex-row mt-4 text-center mb-16">
                                <p className="text-">Aun no eres miembro?
                                    <Link to='/Register'>
                                        <span className="text-accent pl-2 mb-16">Registrate</span>
                                    </Link>
                                </p>
                            </div>
                            <div className="absolute bottom-[-20px] left-[-20px] lg:hidden">
                                <img src={dottedShape} className="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0 hidden lg:block">
                        <img src={verduras} className="w-full h-full rounded-xl" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
