import { feedConstants } from '../constants';

const { FAErr, FAReq, FASuc, RFReq, RFSuc, RFErr, FAReset } = feedConstants;

export const registerFeedReducer = (state = { isLoading: false, isError: false, isSuccess: false }, action) => {
    switch (action.type) {
        case RFReq: return { ...state, isLoading: true, isError: false, isSuccess: false };
        case RFSuc: return { ...state, isLoading: false, isError: false, isSuccess: true, data: action.payload };
        case RFErr: return { ...state, isError: true, isLoading: false, isSuccess: false, err: action.payload };
        default: return state;
    }
};

export const feedReducer = (state = { isLoading: false, isError: false, isSuccess: false, data: [] }, action) => {
    switch (action.type) {
        case FAReq: return { ...state, isLoading: true, isError: false, isSuccess: false };
        case FASuc: return { ...state, isLoading: false, isError: false, isSuccess: true, data: action.counter === 1 ? state.data.concat(action.payload) : [action.payload].concat(state.data) };
        case FAErr: return { ...state, isError: true, isLoading: false, isSuccess: false, err: action.payload };
        case FAReset: return { ...state, isLoading: false, isError: false, isSuccess: false, data: [] }
        default: return state;
    }
};
