import { MouseEventHandler } from "react";

export interface IBotonPrimaryProps {
    className?: string;
    textBtn?: string;
    action:MouseEventHandler;
  }
  
  export const BotonPrimary = ({
    className,
    textBtn,
    action
  }: IBotonPrimaryProps): JSX.Element => {
  
    return (
      <button
        type="submit" onClick={action}
        className={
          "rounded-lg py-3 px-5 border border-colorprimario flex flex-row items-center justify-center w-1/2 md:w-1/2 h-[50px]" +
          className
        }
      >
        <div
          className="text-colorsecundario flex items-center justify-start"
        >
          {textBtn}
        </div>
      </button>
    );
  };
  