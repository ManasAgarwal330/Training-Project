import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

interface Props {}

const Login: FC<Props> = (props) => {
  const [enabled, setEnabled] = useState(false);
  const myForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div className='flex justify-center'>
      <div className="h-full py-3 px-11 flex justify-center w-120">
        <div className="w-full font-display relative">
          <h1 className="text-4xl mb-2">
            Log In to <span className="text-primary"> CORK </span>
          </h1>
          <p className="text-sm mb-12 text-primaryDark">
            New Here?{" "}
            <Link to="/signup">
              <span className="text-primary underline">Create an account</span>
            </Link>
          </p>
          <form action="" onSubmit={myForm.handleSubmit}>
            <Input
              type="email"
              touched={myForm.touched.email}
              required
              autoComplete="email"
              placeholder="Email"
              {...myForm.getFieldProps("email")}
              errors={myForm.errors.email}
              Icon={BiUser}
            />
            <Input
              type={enabled ? "text" : "password"}
              touched={myForm.touched.password}
              required
              autoComplete="password"
              placeholder="Password"
              {...myForm.getFieldProps("password")}
              errors={myForm.errors.password}
              Icon={RiLockPasswordLine}
            />
            <div className="exsm:flex justify-between">
              <div className="text-sm mb-7 flex">
                <p className="font-display tracking-widest text-primaryDark">
                  Show Password
                </p>
                <Toggle
                  enabled={enabled}
                  setEnabled={setEnabled}
                  className="ml-3"
                />
              </div>
              <div className="mb-5">
                <Button type="submit" disabled={!myForm.isValid}>
                  Log In
                </Button>
              </div>
            </div>
            <div className="w-full text-center">
              <input
                type="checkbox"
                id="check"
                name="check"
                className="mr-2 shadow-sm"
              />
              <label htmlFor="check" className="tracking-wider">
                Keep me logged in
              </label>
            </div>
            <div className="mt-4 w-full text-center">
              <Link to="#">
                <span className="tracking-widest text-sm text-primary font-semibold">
                  Forgot Password?
                </span>
              </Link>
            </div>
          </form>
          <Footer className="text-sm font-display tracking-widest leading-relaxed w-full text-center mt-24 relative bottom-0" />
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
