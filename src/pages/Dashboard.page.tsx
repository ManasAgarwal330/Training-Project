import { FC, memo, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { fetchGroup } from "../api/groups";
import Card from "../components/Card";
import { Groups } from "../modals/Groups";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [data, setData] = useState<Groups[] | void>();
  const [query, setQuery] = useState<string|undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isData, setIsData] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchGroup({ status: "all-groups", limit: 20, query: query }).then(
      (group) => {
        console.log(group)
        if (group!.length === 0) {
          setData(undefined);
          setIsLoading(false);
          return setIsData(false);
        }
        setIsLoading(false);
        setIsData(true);
        return setData(group);
      }
    );
  }, [query]);
  return (
    <div className="h-full px-4 border bg-white">
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search Groups..."
          className="border outline-none border-black py-2 px-4 w-full rounded-lg bg-transparent"
          onChange={(event) => {
            setIsLoading(true);
            setQuery(event.target.value);
          }}
        />
      </div>
      {isLoading && (
        <div className="mt-28 flex items-center justify-center">
          <FaSpinner className="h-14 w-14 animate-spin text-primary" />
        </div>
      )}
      {!isData && (
        <div className="w-full flex justify-center mt-10 font-display">
          No Results Found
        </div>
      )}
      {data &&
        data.map((item: any, index: number) => (
          <Card
            key={index}
            index={index}
            name={item.name}
            description={item.description}
            url={item.url}
          />
        ))}
    </div>
  );
};

export default memo(Dashboard);
