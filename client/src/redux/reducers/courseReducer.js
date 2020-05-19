import { coursesConstants } from '../constants';

const { CFErr,CFSuc,CFReq,CASuc,CAReset,CAReq,CAErr } = coursesConstants;

export const registerCourseReducer = (state = { isLoading: false, isError: false, isSuccess: false }, action) => {
    switch (action.type) {
        case CFReq: return { ...state, isLoading: true, isError: false, isSuccess: false };
        case CFSuc: return { ...state, isLoading: false, isError: false, isSuccess: true, data: action.payload };
        case CFErr: return { ...state, isError: true, isLoading: false, isSuccess: false, err: action.payload };
        default: return state;
    }
};

export const courseListReducer = (state = { isLoading: false, isError: false, isSuccess: false, data: [] }, action) => {
    switch (action.type) {
        case CAReq: return { ...state, isLoading: true, isError: false, isSuccess: false };
        case CASuc: return { ...state, isLoading: false, isError: false, isSuccess: true, data: action.counter ===1 ? action.payload : action.counter === 2 ? state.data.concat(action.payload) : [action.payload].concat(state.data) };
        case CAErr: return { ...state, isError: true, isLoading: false, isSuccess: false, err: action.payload };
        case CAReset: return { ...state, isLoading: false, isError: false, isSuccess: false, data: [] }
        default: return state;
    }
};
