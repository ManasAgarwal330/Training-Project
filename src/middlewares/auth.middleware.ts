import { authActions } from '../actions/auth.actions';
import {me as meApi} from '../api/auth';
import { User } from '../modals/User';

export const me = () => {
    meApi().then((user:User) => authActions.login(user))
}