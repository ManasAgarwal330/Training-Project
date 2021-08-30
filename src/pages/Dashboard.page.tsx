import { FC, memo } from "react";
import { fetchGroups } from "../middlewares/groups.middleware";
import Card from "../components/Card";
import {
  groupLoadingSelector,
  groupQuerySelector,
  groupSelector,
} from "../selectors/groups.selectors";
import { useAppSelector } from "../store";
import { FaSpinner } from "react-icons/fa";

interface Props {}

const Dashboard: FC<Props> = () => {
  const query = useAppSelector(groupQuerySelector);
  const groups = useAppSelector(groupSelector);
  const loading = useAppSelector(groupLoadingSelector);

  return (
    <div className="h-full px-4 border bg-white">
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search Groups..."
          value={query}
          className="border outline-none border-black py-2 px-4 w-full rounded-lg bg-transparent"
          onChange={(event) => {
            fetchGroups({
              status: "all-groups",
              limit: 20,
              query: event.target.value,
            });
          }}
        />
      </div>
      {loading && (
        <div
          className={`w-full items-center justify-center mt-10 ${
            loading ? "flex" : "hidden"
          }`}
        >
          <FaSpinner className="animate-spin text-primary h-14 w-14 sm:h-8 sm:w-8" />
        </div>
      )}
      {
        groups.map((item: any, index: number) => (
          <Card
            key={index}
            index={index}
            name={item.name}
            description={item.description}
            url={item.url}
          />
        ))}
      {!loading && groups.length === 0 && (
        <div className="w-full flex flex-col items-center">
          <img
            src="https://cdn.dribbble.com/users/3005912/screenshots/12003163/media/3f9413e9dc5736a539ae7f426dfe7832.jpg?compress=1&resize=400x300"
            alt="No data found"
            className="exsm:h-96 w-auto h-56"
          />
          <span className="exsm:-mt-20 font-display text-xl text-gray-600 -mt-10">
            No Data Found
          </span>
        </div>
      )}
    </div>
  );
};

export default memo(Dashboard);
