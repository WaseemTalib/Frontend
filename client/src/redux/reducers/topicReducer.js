import { topicConstants } from '../constants';
const { TErr, TReq, TSuc } = topicConstants;

export const topicReducer = (state = { isError: false, isLoading: false }, action) => {
    switch (action.type) {
        case TReq: return { ...state, isLoading: true, isError: false };
        case TSuc: return { ...state, isLoading: false, isError: false, data: action.payload };
        case TErr: return { ...state, isError: true, isLoading: false, data: action.payload };
        default: return state;
    }
};