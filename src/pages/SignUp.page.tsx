import { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../components/Input/Input";
import { BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import Toggle from "../components/Toggle";
import Button from "../components/Button/Button";
import Footer from "../components/Footer";

interface Props {}

const SignUp: FC<Props> = (props) => {
  const myForm = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required().min(2),
      password: yup.string().required().min(8),
      email: yup.string().required().email(),
    }),
    onSubmit: (data) => {
      console.log(data);
    },
  });

  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="h-full py-3 px-11 flex justify-center w-120">
        <div className="w-full h-full font-display relative ">
          <h1 className="text-4xl text-primaryDark mb-2">
            Get Started with a free account
          </h1>
          <p className="text-sm mb-12 text-primaryDark">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-primary underline">Log In</span>
            </Link>
          </p>
          <form action="" onSubmit={myForm.handleSubmit}>
            <Input
              type="username"
              touched={myForm.touched.username}
              required
              autoComplete="text"
              placeholder="Username"
              {...myForm.getFieldProps("username")}
              errors={myForm.errors.username}
              icon={<BiUser className="h-6 w-6 text-primary mr-2" />}
            />
            <Input
              type="email"
              touched={myForm.touched.email}
              required
              autoComplete="email"
              placeholder="Email"
              {...myForm.getFieldProps("email")}
              errors={myForm.errors.email}
              icon={<AiOutlineMail className="h-6 w-6 text-primary mr-2" />}
            />
            <Input
              type={enabled ? "text" : "password"}
              touched={myForm.touched.password}
              required
              autoComplete="password"
              placeholder="Password"
              {...myForm.getFieldProps("password")}
              errors={myForm.errors.password}
              icon={
                <RiLockPasswordLine className="h-6 w-6 text-primary mr-2" />
              }
            />
            <div className="w-full -mt-2">
              <input type="checkbox" id="check" name="check" className="mr-2" />
              <label
                htmlFor="check"
                className="tracking-wider text-justify text-gray-400"
              >
                I agree to the{" "}
                <Link to="/">
                  <span className="text-primary">terms and conditions</span>
                </Link>
              </label>
            </div>
            <div className="exsm:flex justify-between exsm:mt-4">
              <div className="text-sm mb-3 mt-4 flex">
                <p className="font-display tracking-widest text-primaryDark">
                  Show Password
                </p>
                <Toggle
                  enabled={enabled}
                  setEnabled={setEnabled}
                  className="ml-3"
                />
              </div>
              <div className="mb-20 exsm:mb-0">
                <Button
                  type="submit"
                  disabled={!myForm.isValid}
                  className="px-10"
                >
                  Get Started!
                </Button>
              </div>
            </div>
          </form>
          <Footer className="text-sm font-display text-center tracking-wide leading-relaxed exsm:tracking-widest w-full mt-24 lg:mt-14" />
        </div>
      </div>
    </div>
  );
};

export default memo(SignUp);
