export interface IBotonSecondaryProps {
    className?: string;
    btnText: string;
  }
  
  export const BotonSecondary = ({
    className,
    btnText = ""
  }: IBotonSecondaryProps): JSX.Element => {
  
    return (
      <div
        className={
          "rounded-lg pt-[13px] pr-[18px] pb-[13px] pl-[18px] flex flex-row gap-2.5 items-center justify-center w-[184px] h-[50px] relative overflow-hidden " +
          className
        }
      >
        <div
          className="text-negro text-left font-title-medium-bold-font-family text-title-medium-bold-font-size leading-title-medium-bold-line-height font-title-medium-bold-font-weight relative flex items-center justify-start"
          style={{
            letterSpacing: "var(--title-medium-bold-letter-spacing, 0.15px)",
          }}
        >
          {btnText}
        </div>
      </div>
    );
  };
  