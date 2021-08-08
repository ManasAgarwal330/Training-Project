import Button from "./Button";
import "../../index.css";

export default {
  title: "Button",
  component: Button,
};

export const Main = (args: any) => <Button {...args}></Button>;

Main.args = {
  children: "Log In",
  type: "submit",
  theme: "primary",
  appearance: "primary",
};
