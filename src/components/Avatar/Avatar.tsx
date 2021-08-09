import { FC, memo } from "react";

interface Props {
  imageUrl?: string;
  online?: boolean;
}

const Avatar: FC<Props> = ({ imageUrl, online }) => {
  return (
    <>
      <ul className="flex items-center">
        <li className="relative mr-2">
          <img
            src={imageUrl}
            alt="face Image"
            className="h-40 w-40 rounded-full"
          />
          <div
            className={`h-8 w-8 rounded-full absolute border-4 border-white right-6 bottom-1 ${
              online ? "bg-green-600" : "bg-gray-500"
            }`}
          ></div>
        </li>
        <li className="relative mr-2">
          <img
            src={imageUrl}
            alt="face Image"
            className="h-32 w-32 rounded-full"
          />
          <div
            className={`h-6 w-6 rounded-full absolute border-4 border-white right-5 bottom-1 ${
              online ? "bg-green-600" : "bg-gray-500"
            }`}
          ></div>
        </li>
        <li className="relative mr-2">
          <img
            src={imageUrl}
            alt="face Image"
            className="h-24 w-24 rounded-full"
          />
          <div
            className={`h-5 w-5 rounded-full absolute border-4 border-white right-2 bottom-1 ${
              online ? "bg-green-600" : "bg-gray-500"
            }`}
          ></div>
        </li>
        <li className="relative mr-2">
          <img
            src={imageUrl}
            alt="face Image"
            className="h-16 w-16 rounded-full"
          />
          <div
            className={`h-4 w-4 rounded-full absolute border-4 border-white right-2 bottom-0 ${
              online ? "bg-green-600" : "bg-gray-500"
            }`}
          ></div>
        </li>
      </ul>
    </>
  );
};

Avatar.defaultProps = {
  imageUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzude1zoDBGF5R_JQMzivx9JZ0q47u1w7qA&usqp=CAU",
  online: true,
};

export default memo(Avatar);
