import { visibilityOff, visibilityOn } from "@/assets";
import { useState } from "react";

interface InputProps {
    type?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    error?: string;
}

function Input({ type = "text", name, value, onChange, placeholder, disabled, error }: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => setIsVisible(!isVisible);


  return (
    <div>
      <div className="border-[1px] border-primary rounded-md px-5 py-3 flex gap-2.5">
        <input
          type={type === "password" ? (isVisible ? "text" : "password") : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="text-body_text w-full focus:outline-none bg-transparent"
        />
        {type === "password" && (
          <img
            src={isVisible ? visibilityOff : visibilityOn}
            alt="mostrar contraseña"
            height={24}
            width={24}
            onClick={changeVisibility}
          />
        )}
      </div>
      {error &&
        <p className="text-primary text-sm">{error}</p>
      }
    </div>
  );

}

export default Input;
