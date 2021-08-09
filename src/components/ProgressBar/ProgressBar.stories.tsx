import ProgressBar from "./ProgressBar";
import "../../index.css";

export default {
  title: "ProgressBar",
  component: ProgressBar,
  argTypes: {
    percentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
};

export const Main = (args: any) => <ProgressBar {...args}></ProgressBar>;

Main.args = {
  percentage: 0,
  color: "blue",
};
