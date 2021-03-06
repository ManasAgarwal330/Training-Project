import { FC, memo, useState } from "react";
import { IconType } from "react-icons";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import DropdownList from "./DropdownList";

interface Props {
  title: string;
  Icon: IconType;
  isArrow?: boolean;
  itemsArray?: string;
  content?:string[],
}

const ListItem: FC<Props> = ({ Icon, title, isArrow,content }) => {
  const [openListItem, setOpenListItem] = useState(false);
  return (
    <>
      <button
        className={`flex items-center mb-2 w-full py-2 rounded-md px-1 cursor-pointer ${
          openListItem ? "bg-white shadow-md" : ""
        } hover:bg-gray-300 hover:shadow-md`}
        onClick={() => setOpenListItem((state) => !state)}
      >
        <Icon className="h-5 w-5 text-primaryDark mr-2" />
        <span className="text-black text-lg font-display">{title}</span>
        {isArrow && (
          <span className="flex-grow flex justify-end">
            {openListItem ? (
              <IoMdArrowDropdown className="h-5 w-5" />
            ) : (
              <IoMdArrowDropright className="h-5 w-5" />
            )}
          </span>
        )}
      </button>
      {isArrow && <DropdownList open={openListItem} title={content}/>}
    </>
  );
};

ListItem.defaultProps = {
  isArrow: false,
};

export default memo(ListItem);
