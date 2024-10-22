import { dottedShape, logoAuth } from '@/assets';
import Button from "@/components/Button";
import { ERROR_RESPONSE } from '@/constants';
import { isEmailValid, isPasswordValid, isUsernameValid } from '@/helpers/format';
import { ResponseErrorMessage, UserRegisterResponse } from '@/models';
import { register } from '@/services/auth';
import axios from 'axios';
import { useState } from 'react';

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
        const message = "La contraseña debe tener entre 6 y 30 caracteres";
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
            const { data }: { data: UserRegisterResponse } = await register(user);
            console.log(data);
            setIsLoading(false);
            alert(data.message);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error)
                if (error.response?.status === 409) {
                    alert(`${error.response?.data.message} / ${error.response?.data.description}`);
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
        <div className="w-screen h-max py-1 items-center flex">
            <div className="w-1/3 h-auto flex-shrink-0 bg-card_background mx-auto shadow-md items-center rounded-md">
                <div className="m-0 flex h-min justify-end">
                    <img src={dottedShape} className="w-16 h-16 top-0 right-0 " />
                </div>
                <div className="w-full h-min px-12 mx-auto items-center">
                    <div className="w-full items-center">
                        <img src={logoAuth} className="w-52 h-32 mb-5 flex mx-auto items-center text-center" />
                        <div className="flex flex-col gap-5 ">
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
                                className="w-full bg-accent text-white rounded-md"
                                onClick={() => onSubmit()}
                                disabled={isSendDisabled || isLoading}
                            >
                                {isLoading ? "Procesando..." : "Registrarse"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex m-0 justify-start items-end">
                    <img src={dottedShape} className="w-auto h-auto bottom-0 left-0 rotate-180" />
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
                className="py-3 p-5 w-full border border-colorprimario rounded-md"
            />
            {error &&
                <p className="text-colorprimario text-sm mt-1">{error}</p>
            }
        </div>
    );
}
