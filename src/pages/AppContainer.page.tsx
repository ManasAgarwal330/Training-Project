import {FC,memo} from 'react';
import {Switch, Route} from 'react-router-dom';
import DashboardPage from './Dashboard.page';
import RecordingsPage from './Recordings.page';
import SideBar from '../components/SideBar';

interface Props{};

const AppContainer:FC<Props> = (props) => {
  return <>
    <div className='h-screen flex'>
        <SideBar />
        <Switch>
            <Route path='/dashboard'>
                <DashboardPage />
            </Route>
            <Route path='/recordings/:batchNumber/:lectureNumber'>
                <RecordingsPage />
            </Route>
        </Switch>
    </div>
  </>
};

export default memo(AppContainer);