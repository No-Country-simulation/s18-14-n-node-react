interface IButton {
  type: "bordered" | "filled";
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}


function Button ({ children, type, disabled, onClick, className } : IButton) {
  const typeStyles = type === "bordered"
    ? "border-2 border-black bg-transparent disabled:opacity-60 disabled:border-black disabled:text-black"
    : "disabled:bg-gray-300 disabled:opacity-60 disabled:text-black"

  return (
    <button
      className={`rounded-lg py-3 px-10 font-bold ${typeStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
