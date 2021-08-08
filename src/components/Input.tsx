import { FC, InputHTMLAttributes, memo } from "react";
import { IconType } from "react-icons/lib";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched: boolean | undefined;
  errors: string | undefined;
  Icon: IconType;
}

const Input: FC<Props> = ({
  touched,
  errors,
  Icon,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <>
      <div>
        <label htmlFor="email" className="sr-only">
          {placeholder}
        </label>
      </div>
      <div className="flex text-sm pt-2 pb-2 border-b border-gray-300">
        {Icon && <Icon className="h-6 w-6 text-primary mr-2" />}
        <input
          {...rest}
          placeholder={placeholder}
          className={"outline-none text-gray-500 w-full"}
        />
      </div>
      <div className={"mb-6 text-red-700 min-h-6 w-full font-display h-auto lg:mb-4"}>
        {touched && errors}
      </div>
    </>
  );
};
Input.defaultProps = {
};

export default memo(Input);
