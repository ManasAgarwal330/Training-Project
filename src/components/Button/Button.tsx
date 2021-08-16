import { useContext } from "react";
import { ButtonHTMLAttributes, FC, memo } from "react";
import { User } from "../../modals/User";
import UserContext from "../../UserContext";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "danger" | "success";
  disabled?: boolean;
  appearance?: "primary" | "outline";
  type?: "submit" | "button" | "reset" | undefined;
  click : (u:User) => void;
}
const Button: FC<Props> = ({
  appearance,
  theme,
  className,
  type,
  children,
  disabled,
  click
}) => {
  let addClass = "";
  if (appearance === "primary") {
    if (theme === "primary") {
      addClass = `${disabled ? "bg-blue-900" : "bg-primary"} hover:bg-blue-500`;
    } else if (theme === "danger") {
      addClass = `${disabled ? "bg-red-900" : "bg-red-600"} hover:bg-red-500`;
    } else {
      addClass = `${disabled ? "bg-green-900" : "bg-green-600"} hover:bg-green-500`;
    }
  } else {
    if (theme === "primary") {
      addClass = `border border-primary hover:bg-primary text-primary hover:text-white`;
    } else if (theme === "danger") {
      addClass = `border border-red-600 hover:bg-red-600 text-red-600 hover:text-white`;
    } else {
      addClass = `border border-green-600 hover:bg-green-600 text-green-600 hover:text-white`;
    }
  }
  const { user } = useContext(UserContext);

  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`font-display text-sm transition-all ease-in-out duration-1000
        text-white py-2 px-5 rounded-md
        shadow-2xl drop-shadow-xl ${addClass} ${className}`}
        onClick={() => click(user!)}
      >
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  theme: "primary",
  disabled: false,
  appearance: "primary",
  type: "button",
};

export default memo(Button);
