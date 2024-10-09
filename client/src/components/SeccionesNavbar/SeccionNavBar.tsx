export interface ISeccionesNavbarProps {
    className?: string;
    nameSection?: string;
  }
  
  export const SeccionNavBar = ({
    className,
    nameSection
  }: ISeccionesNavbarProps): JSX.Element => {
  
    return (
      <div
        className={
          "w-[184px] h-10 relative " + className
        }
      >
        <div
          className="text-[#9E9696] text-center font-title-medium-bold-font-family text-title-medium-bold-font-size leading-title-medium-bold-line-height font-title-medium-bold-font-weight absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] flex items-center justify-center"
          style={{
            letterSpacing: "var(--title-medium-bold-letter-spacing, 0.15px)",
          }}
        >
          {nameSection}
        </div>
      </div>
    );
  };
  