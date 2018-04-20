/**
 * Created by user on 4/20/18.
 */
import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const  userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const login = (credentials) => (dispatch) =>
    api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));