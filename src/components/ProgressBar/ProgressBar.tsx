import { FC, memo } from "react";

interface Props {
  color?: "blue" | "yellow" | "black";
  percentage: number;
}

const ProgressBar: FC<Props> = ({ percentage, color }) => {
  let value = "";
  if (percentage < 0) {
    value = "0%";
    console.error("Percentage cannot be less than 0");
  } else if (percentage > 100) {
    value = "100%";
    console.error("Percentage cannot be greater than 100");
  } else {
    value = `${percentage}%`;
  }
  return (
    <>
      <div className="bg-lightGray rounded-lg h-5">
        <div
          className={`${
            color === "blue"
              ? "bg-blue-700"
              : color === "yellow"
              ? "bg-yellow-500"
              : "bg-black"
          } h-5 rounded-lg`}
          style={{ width: value }}
        ></div>
      </div>
    </>
  );
};

ProgressBar.defaultProps = {
  color: "blue",
  percentage: 100,
};
export default memo(ProgressBar);
