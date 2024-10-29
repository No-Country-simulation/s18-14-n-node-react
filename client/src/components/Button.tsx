type variants = "filled-primary" | "filled-secondary" | "filled-white" | "bordered-white" | "bordered-primary" | "card";

interface IButton {
  variant: variants;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

type VariantStyles = Record<variants, string>


function Button ({ children, variant, disabled, onClick, className } : IButton) {
  const disabledStyles: string = "disabled:bg-[#A8A8A8] disabled:text-white";
  const disabledBorderStyles: string = "disabled:border-[#A8A8A8] disabled:text-[#A8A8A8] disabled:bg-transparent";

  const variantStyles: VariantStyles = {
    "filled-primary": `bg-primary text-white hover:bg-primary50 hover:text-black ${disabledStyles}`,
    "filled-secondary": `bg-accent text-white hover:bg-accent50 hover:text-head_text ${disabledStyles}`,
    "filled-white": `bg-secondary hover:bg-accent50 hover:text-head_text ${disabledStyles}`,
    "bordered-white": `border-2 border-secondary text-white hover:bg-primary50 hover:text-black hover:border-primary50 ${disabledBorderStyles}`,
    "bordered-primary": `border-2 border-primary70 text-primary hover:border-primary50 hover:text-primary50 ${disabledBorderStyles}`,
    "card": `bg-accent50 text-white hover:bg-primary ${disabledStyles}`,
  }

  return (
    <button
      className={`py-3 px-10 font-bold shadow-custom rounded-lg transition-colors duration-100 text-nowrap ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
