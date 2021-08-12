import { FC, memo } from "react";

interface Props {
  name?: string;
  description?: string;
  url?: string;
  index:number,
}

const Card: FC<Props> = (props) => {
  return (
    <>
      <div className={`flex my-3 py-4 px-4 rounded-lg w-full border shadow-md ${(props.index % 2===0) ? 'bg-gray-500' : ''}`}>
        <div className="h-20 w-20">
          <img src={props.url} alt="Group" className="rounded-lg"/>
        </div>
        <div className='ml-2 font-display text-lg'>
          <span>{props.name}</span>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  name: "Manas",
  description: "He is a good boy",
  url:
    "data:image/jpeg;base64,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",
};

export default memo(Card);
