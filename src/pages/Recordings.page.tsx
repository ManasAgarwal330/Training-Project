import {FC,memo} from 'react';
import { Link } from 'react-router-dom';

interface Props{};

const Recordings:FC<Props> = (props) => {
  return <>
    <div>This is Recordings Page.</div>
    <div>
          <Link to='/dashboard'><span className='text-blue-500'>Go To Dashboard Page.</span></Link>
      </div>
  </>
};

export default memo(Recordings);