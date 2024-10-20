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
          "rounded-xl py-3 px-5 flex flex-row items-center justify-center w-1/2 h-[50px] shadow-custom" +
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
  