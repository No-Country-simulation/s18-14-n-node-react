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
          "rounded-lg pt-[13px] pr-[18px] pb-[13px] pl-[18px] flex flex-row gap-2.5 items-center justify-center w-[184px] h-[50px] relative overflow-hidden " +
          className
        }
        style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <div
          className="text-negro text-left font-title-medium-bold-font-family text-title-medium-bold-font-size leading-title-medium-bold-line-height font-title-medium-bold-font-weight relative flex items-center justify-start"
          style={{
            letterSpacing: "var(--title-medium-bold-letter-spacing, 0.15px)"
          }}
        >
          {textBtn}
        </div>
      </button>
    );
  };
  