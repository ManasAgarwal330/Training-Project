import {FC,memo} from 'react';

interface Props{};

const AuthSection:FC<Props> = (props) => {
  return <>
    <div className='flex-grow bg-black hidden lg:block'>
        <p>This section contains the logo of the website.</p>
    </div>
  </>
};

export default memo(AuthSection);