import { FC, memo } from 'react';
import {Switch, Route} from 'react-router-dom';
import AuthSection from '../components/AuthSection';
import LoginPage from './Login.page';
import SignUpPage from './SignUp.page';

interface Props{};

const AuthHero:FC<Props> = (props) => {
  return <>
    <div className='lg:grid lg:grid-cols-2 h-screen'>
        <Switch>
            <Route path='/login'>
                <LoginPage />
            </Route>
            <Route path='/signup'>
                <SignUpPage />
            </Route>
        </Switch>
        <AuthSection />
    </div>
  </>
};

export default memo(AuthHero);