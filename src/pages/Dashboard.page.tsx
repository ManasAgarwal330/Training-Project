import {FC,memo} from 'react';

interface Props{};

const Dashboard:FC<Props> = (props) => {
  return <>
    <div>This is dashboard page.</div>
  </>
};

export default memo(Dashboard);