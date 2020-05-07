import { userConstants } from '../constants';
import api from '../../utils/api';
import history from '../../utils/history';
const { SSuc, SErr, SReq, LErr, LReq, LSuc, Current_User_Suc, Current_User_Err, GUPE, GUPR, GUPS, GUPC } = userConstants;

export const RegisterUser = (data) => async dispatch => {
    try {
        dispatch({ type: SReq });
        var response = await api.post("/account/register", data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.user && !response.data.error) {
            dispatch({ type: SSuc });
            history.push('/login');
        }
        else dispatch({ type: SErr, payload: 'User wih this email already exists' });
    } catch{ dispatch({ type: SErr, payload: 'Somthing unexpected occured' }); }
}

export const loginUser = (data) => async dispatch => {
    dispatch({ type: LReq });
    try {
        var response = await api.post('/account/auth', data);
        if (response.data && !response.data.error && response.data.token) {
            dispatch(setCurrentUser(response.data.token));
            dispatch({ type: LSuc });
        } else { dispatch({ type: LErr, payload: response.data.error }); }
    } catch { dispatch({ type: LErr, payload: 'Email or password is incorrect' }); };
};

const setCurrentUser = (token) => dispatch => {
    localStorage.setItem("token", token);
    dispatch(getCurrentUser());
};

export const getCurrentUser = () => dispatch => {
    if (localStorage.getItem('token') === null) {
        dispatch({ type: Current_User_Err });
    } else {
        dispatch(getProfile());
    }
};

export const logOut = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: Current_User_Err });
    dispatch({ type: GUPC })
    history.push('/login');
};

export const updateTopics = (data) => async dispatch => {
    try {
        dispatch({ type: GUPR });
        if (localStorage.getItem('token') !== null) {
            var response = await api.post("/account/updateTopics", data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
            if (response.data.user && !response.data.error) {
                dispatch({ type: GUPS, payload: response.data.user });
                if (!response.data.user.firstSignup) history.push(`/user/${response.data.user._id}/community`);
                else history.push(`/user/${response.data.user._id}/topics`);
            }
            else dispatch({ type: GUPE });
        } else dispatch({ type: GUPE });
    } catch{ dispatch({ type: GUPE }); };
};

export const getProfile = () => async dispatch => {
    try {
        dispatch({ type: GUPR });
        if (localStorage.getItem('token') !== null) {
            var response = await api.get("/account/profile", { headers: { 'authorization': `${localStorage.getItem('token')}` } });
            if (response.data.user && !response.data.error) {
                dispatch({ type: GUPS, payload: response.data.user });
                dispatch({ type: Current_User_Suc });
                history.push('/community');
            }
            else dispatch({ type: GUPE });
        } else dispatch({ type: GUPE });
    } catch{ dispatch({ type: GUPE }); }
}
