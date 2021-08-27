import { FC, memo, useEffect} from "react";
import { useDispatch } from "react-redux";
import { groupsQuery, groupsQueryCompleted } from "../actions/groups.actions";
import { fetchGroup } from "../api/groups";
import Card from "../components/Card";
import { useAppSelector } from "../store";

interface Props {}

const Dashboard: FC<Props> = () => {
  const query = useAppSelector((state) => state.groups.query);
  const groups = useAppSelector((state) => {
    const groupIds = state.groups.queryMap[state.groups.query] || [];
    const groups = groupIds.map(id => state.groups.byId[id]);
    return groups;
  })
  const dispatch = useDispatch();

  useEffect(() => {
    fetchGroup({ status: "all-groups", limit: 20, query: query }).then(
      (group) => {
        return dispatch(groupsQueryCompleted(group,query));
      }
    );
    // eslint-disable-next-line
  }, [query]); 
  return (
    <div className="h-full px-4 border bg-white">
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search Groups..."
          className="border outline-none border-black py-2 px-4 w-full rounded-lg bg-transparent"
          onChange={(event) => {
            dispatch(groupsQuery(event.target.value));
          }}
        />
      </div>
      {groups &&
        groups.map((item: any, index: number) => (
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
