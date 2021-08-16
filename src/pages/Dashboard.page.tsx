import { FC, memo, useEffect, useState } from "react";
import { fetchGroup } from "../api/groups";
import Card from "../components/Card";
import { Groups } from "../modals/Groups";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [data, setData] = useState<Groups[] | void>();
  const [query, setQuery] = useState<string|undefined>();
  const [isData, setIsData] = useState(true);

  useEffect(() => {
    fetchGroup({ status: "all-groups", limit: 20, query: query }).then(
      (group) => {
        if (group!.length === 0) {
          setData(undefined);
          return setIsData(false);
        }
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
            setQuery(event.target.value);
          }}
        />
      </div>
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
