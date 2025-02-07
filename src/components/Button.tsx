interface IButtonTypes {
  icon?: React.ReactNode;
  text: string;
  paddingX: "px-5" | "px-6" | "px-7" | "px-8" | "px-9";
  paddingY: "py-3" | "py-5" | "py-6" | "py-7";
  background: "bg-transparent" | "bg-[#DDF247]";
  border?: "border border-black";
  margin?: string;
}

const Button: React.FC<IButtonTypes> = ({
  margin,
  icon,
  text,
  paddingX,
  paddingY,
  background,
  border,
}) => {
  return (
    <button
      className={`${paddingX} ${paddingY} ${background} ${border} ${margin} rounded-full font-medium text-[19px]`}
    >
      {text} {icon && icon}
    </button>
  );
};

export default Button;
