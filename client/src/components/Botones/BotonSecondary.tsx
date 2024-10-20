import { MouseEventHandler } from "react";

export interface IBotonSecondaryProps {
    className?: string;
    btnText: string;
    action:MouseEventHandler;
  }
  
  export const BotonSecondary = ({
    className,
    btnText = "",
    action
  }: IBotonSecondaryProps): JSX.Element => {
  
    return (
      <button
        type="submit" onClick={action}
        className={
          "rounded-lg py-3 px-4 flex flex-row items-center justify-center w-1/2 h-[50px] " +
          className
        }
      >
        <div
          className="text-color-secundario flex items-center justify-start"
        >
          {btnText}
        </div>
      </button>
    );
  };
  