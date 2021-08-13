import { Transition } from "@headlessui/react";
import { FC, memo } from "react";
import { BsCircleFill } from "react-icons/bs";

interface Props {
  title?: string[];
  open: boolean;
}

const DropdownList: FC<Props> = ({ title, open }) => {
  return (
    <>
      <Transition.Root show={open}>
        {title!.map((item: string, index: number) => {
          return (
            <ul className="" key={index}>
                <button className="flex my-1 items-center text-lg font-display  hover:text-blue-600 w-full">
                  <div className=" flex-grow-0 flex justify-center">
                    <BsCircleFill className="h-2 w-2" />
                  </div>
                  <span className="flex-grow border ml-2">{item}</span>
                </button>
             
            </ul>
          );
        })}
     </Transition.Root>
    </>
  );
};

export default memo(DropdownList);
