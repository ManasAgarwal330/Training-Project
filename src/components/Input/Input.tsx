import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched: boolean | undefined;
  errors: string | undefined;
  icon?: any;
}

const Input: FC<Props> = ({
  touched,
  errors,
  icon,
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
        {icon}
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

export default memo(Input);
