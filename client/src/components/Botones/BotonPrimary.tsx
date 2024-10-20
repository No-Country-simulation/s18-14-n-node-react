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
          "rounded-lg py-3 px-5 flex flex-row items-center justify-center w-1/2 h-[50px] " +
          className
        }
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div
          className="text-color-secundario flex items-center justify-start"
        >
          {textBtn}
        </div>
      </button>
    );
  };
  