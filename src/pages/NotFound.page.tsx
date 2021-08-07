import {FC,memo} from 'react';

interface Props{};

const NotFound:FC<Props> = (props) => {
  return <>
    <div>This is Not Found Page.</div>
  </>
};

export default memo(NotFound);