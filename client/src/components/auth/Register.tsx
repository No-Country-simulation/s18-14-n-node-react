import { dottedShape, facebook, twitter, google } from '@/assets';
import { isEmailValid, isPasswordValid, isUsernameValid } from '@/helpers/format';
import { useState } from 'react';
import { register } from '@/services/auth';
import { ERROR_RESPONSE } from '@/constants';
import { ResponseErrorMessage, UserRegisterResponse } from '@/models';
import axios from 'axios';
import Button from "@/components/Button";



interface InputValues {
    value: string;
    error: string;
}

type InputTypes = 
    | "username"
    | "email"
    | "password"
    | "confirmPassword"

type FormValues = Record<InputTypes, InputValues>


const defaultValue: InputValues = {
    value: "",
    error: "",
}

const defaultValues: FormValues = {
    username: defaultValue,
    email: defaultValue,
    password: defaultValue,
    confirmPassword: defaultValue,
}


const hasValueError = (value: string, type: InputTypes) => {
    if (type === "username") {
        const message = "El nombre de usuario debe tener entre 6 y 20 caracteres";
        return !isUsernameValid(value) ? message : "";
    }
    if (type === "email") {
        const message = "Email invalido";
        return !isEmailValid(value) ? message : "";
    }

    if (type === "password" || type === "confirmPassword") {
        const message = "La contraseña debe tener entre 6 y 30 caracteres" ;
        return !isPasswordValid(value) ? message : "";
    }

    return "";
}
    

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState<FormValues>(defaultValues);
    const valuesEmpty = (Object.keys(form) as InputTypes[]).filter(
        (key: InputTypes) => form[key].value.length === 0
    );
    const valuesError = (Object.keys(form) as InputTypes[]).filter(
        (key: InputTypes) => form[key].error
    );
    const isSendDisabled = valuesEmpty.length > 0 || valuesError.length > 0;


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: {
                value: value,
                error: hasValueError(value, name as InputTypes),
            } 
        });
    }
    
    const passwordsAreEqual = () => {
      if (form.password.value !== form.confirmPassword.value) {
        setForm({
          ...form,
          confirmPassword: {
            ...form.confirmPassword,
            error: "Las contraseñas no coinciden"
          }
        });
        return false;
      }
      return true;
    }

    const onSubmit = async () => {
        if (!passwordsAreEqual()) return;

        const user = {
            username: form.username.value,
            email: form.email.value,
            password: form.password.value,
        }

        try {
            setIsLoading(true);
            const { data }: {data: UserRegisterResponse} = await register(user);
            console.log(data);
            setIsLoading(false);
            alert(data.message);

        } catch(error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
                if (error.response?.status === 409) {
                    alert("El email ya está en uso");
                }
                else if (Array.isArray(error.response?.data)) {
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
                else {
                    alert('Error al registrar el usuario');
                    console.log(error)
                }
            }
            setIsLoading(false);
        }
    }



    return (
        <div className="w-screen h-screen items-center m-auto flex bg-slate-200">
            <div className="w-[520px] h-[618px] flex-shrink-0 bg-white m-auto flex-col items-center gap-10">
                <div className="relative m-0">
                    <img src={dottedShape} className="absolute top-0 right-1" />
                </div>
                <div className="w-[400px] h-[454px] mx-auto items-center">
                    <div className="w-full mt-[60px] items-center">
                        <div className="w-[291px] h-[87.1px] mb-[40px] flex mx-auto items-center text-center py-auto bg-slate-300 px-auto" >
                            <p className="items-center flex-col mx-auto text-black">LOGO</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <Input
                                type="text"
                                placeholder="Nombre de usuario"
                                name="username"
                                onChange={handleChange}
                                value={form.username.value}
                                error={form.username.error}
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={form.email.value}
                                error={form.email.error}
                            />
                            <Input
                                type="password"
                                placeholder="Contraseña"
                                name="password"
                                onChange={handleChange}
                                value={form.password.value}
                                error={form.password.error}
                            />
                            <Input
                                type="password"
                                placeholder="Confirmar contraseña"
                                name="confirmPassword"
                                onChange={handleChange}
                                value={form.confirmPassword.value}
                                error={form.confirmPassword.error}
                            />
                            <Button
                                type="filled"
                                className="w-full bg-[#005C49] text-white"
                                onClick={() => onSubmit()}
                                disabled={isSendDisabled || isLoading}
                            >
                                {isLoading ? "Procesando..." : "Registrarse"}
                            </Button>
                        </div>
                        <div className="flex items-center mt-[35px]">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500">O registrarte con</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className="flex flex-row mt-[25px]">
                            <button className="w-[120px] h-[40px] mr-[20px] bg-slate-300 rounded-lg">
                                <img src={facebook} className="mx-auto" />
                            </button>
                            <button className="w-[120px] h-[40px] mr-[20px] bg-slate-300 rounded-lg">
                                <img src={twitter} className="mx-auto" />
                            </button>
                            <button className="w-[120px] h-[40px] bg-slate-300 rounded-lg">
                                <img src={google} className="mx-auto" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="relative mt-[100px]">
                    <img src={dottedShape} className="absolute bottom-1 left-1" />
                </div>
            </div>
        </div>
    )
}

export default Register;


interface InputProps {
    type: string;
    placeholder: string;
    name: InputTypes;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    error?: string;
}

function Input({ type, placeholder, name, onChange, value, error }: InputProps) {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className="py-[12px] p-5 w-full border border-gray-400 rounded-lg"
            />
            {error && 
                <p className="text-red-500 text-sm mt-1">{error}</p>
            }
        </div>
    );
}
