import { userConstants } from '../constants';
const { LErr, LReq, LSuc, SErr, SReq, SSuc, Current_User_Err, Current_User_Suc, GUPS, GUPR, GUPE ,GUPC} = userConstants;

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LReq: return { ...state, isLoading: true, isError: false };
        case LSuc: return { ...state, isLoading: false, isError: false };
        case LErr: return { ...state, isError: true, isLoading: false, data: action.payload };
        default: return state;
    }
};

export const registerReducer = (state = { isLoading: false, isError: false }, action) => {
    switch (action.type) {
        case SReq: return { ...state, isLoading: true, isError: false };
        case SSuc: return { ...state, isLoading: false, isError: false };
        case SErr: return { ...state, isError: true, isLoading: false, data: action.payload };
        default: return state;
    }
};

export const CurrentUser = (state = { auth: false }, action) => {
    switch (action.type) {
        case Current_User_Err: return { ...state, auth: false };
        case Current_User_Suc: return { ...state, auth: true };
        default: return state
    }
};

export const userProfile = (state = { isLoading: false, isError: false }, action) => {
    switch (action.type) {
        case GUPR: return { ...state, isLoading: true, isError: false };
        case GUPE: return { ...state, isLoading: false, isError: true, data: action.payload };
        case GUPS: return { ...state, isLoading: false, isError: false, data: action.payload };
        case GUPC: return { ...state, isLoading: false, isError: false, data: null }
        default: return state
    }
};