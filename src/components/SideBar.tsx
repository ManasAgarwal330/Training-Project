import {FC,memo} from 'react';

interface Props{};

const SideBar:FC<Props> = (props) => {
  return <>
    <div className='w-52 bg-gray-400 h-screen'>
        This is SideBar.
    </div>
  </>
};

export default memo(SideBar);