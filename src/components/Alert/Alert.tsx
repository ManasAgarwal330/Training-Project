import { FC, memo } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
  open: boolean;
  onClose: (open: false) => void;
  theme?: "Primary" | "Error" | "Success";
}

const Alert: FC<Props> = ({ open, onClose, theme }) => {
    let addClass = "";
    if(theme === "Primary")
    {
        addClass="text-primary bg-blue-100";
    }
    else if(theme === "Error")
    {
        addClass="text-red-900 bg-red-100";
    }
    else
    {
        addClass="text-yellow-500 bg-yellow-100";
    }
  return (
    <Transition.Root show={open}>
      <Dialog open={open} onClose={onClose}>
        <Transition.Child
          enter="transform transition duration-100 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          entered="opacity-50"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="absolute inset-0" />
        </Transition.Child>
        <Transition.Child
          enter="duration-1000 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`absolute top-0 flex px-2 right-0 left-0 py-2 border-none bg-white text-md 
          tracking-widest justify-between lg:text-lg ${addClass}`}
          >
            <p className="ml-4">{`${theme}! Lorem Ipsum is simply dummy text of the printing.`}</p>
            <button onClick={() => onClose(false)} className="mr-4">
              <AiOutlineClose />
            </button>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

Alert.defaultProps = {
  theme: "Primary",
};

export default memo(Alert);
