import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";
import Toggle from "../components/Toggle";
import Footer from '../components/Footer';

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
    <>
      <div className="flex-grow py-3 px-11  flex justify-center">
        <div className="w-full font-display ">
          <h1 className="text-4xl mb-2">
            Log In to <span className="text-primary"> CORK </span>
          </h1>
          <p className="text-sm mb-12 text-primaryDark">
            New Here?{" "}
            <Link to="/signup">
              <span className="text-primary underline">Create an account</span>
            </Link>
          </p>
          <form action="">
            <div className="mt-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
              </div>
              <div className="flex text-sm pt-2 pb-2 border-b border-gray-300">
                <BiUser className="h-6 w-6 text-primary mr-2" />
                <input
                  type="email"
                  {...myForm.getFieldProps("email")}
                  id="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className="outline-none text-gray-500"
                />
              </div>
              {console.log(myForm.touched.email)}
              <div className={"mb-6 text-red-700 h-auto w-full font-display"}>
                {myForm.touched.email && myForm.errors.email}
              </div>
            </div>
            <div className="mt-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
              </div>
              <div className="flex text-sm pt-2 pb-2 border-b border-gray-300">
                <RiLockPasswordLine className="h-6 w-6 text-primary mr-2" />
                <input
                  type="password"
                  {...myForm.getFieldProps("password")}
                  id="password"
                  required
                  autoComplete="password"
                  placeholder="Password"
                  className="outline-none text-gray-500"
                />
              </div>
              {console.log(myForm.touched.password)}
              <div className={"mb-6 text-red-700 h-auto w-full font-display"}>
                {myForm.touched.email && myForm.errors.password}
              </div>
            </div>
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
              <button
                className="font-display text-sm text-white bg-primary py-2 px-5 rounded-md border-none
              shadow-2xl drop-shadow-xl"
              >
                Log In
              </button>
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
          <Footer className='mt-20 text-center' />
        </div>
      </div>
    </>
  );
};

export default memo(Login);
