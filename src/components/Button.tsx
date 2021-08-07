import { ButtonHTMLAttributes, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{}

const Button: FC<Props> = ({className,type,children,disabled}) => {
  return (
    <>
      <button
      disabled={disabled}
        type={type}
        className={`font-display text-sm 
        text-white py-2 px-5 rounded-md border-none
        shadow-2xl drop-shadow-xl ${disabled ? 'bg-blue-400' : 'bg-primary'}`}
      >
        {children}
      </button>
    </>
  );
};

export default memo(Button);
