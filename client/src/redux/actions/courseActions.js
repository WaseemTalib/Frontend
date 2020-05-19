import { coursesConstants } from '../constants';
import api from '../../utils/api';

const { CFErr, CFReq, CFSuc, CAErr, CAReq, CASuc } = coursesConstants;

var feeds = [];

export const registerCourses = (data) => async dispatch => {
    try {
        dispatch({ type: CFReq });
        var response = await api.post("/courses/register", data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.course && !response.data.error) {
            dispatch({ type: CFSuc });
            dispatch({ type: CASuc, payload: response.data.course, counter: 0 });
        }
        else dispatch({ type: CFErr, payload: response.data.error });
    } catch{ dispatch({ type: CFErr, payload: 'Somthing unexpected occured' }); }
}

export const getMyCourses = () => async dispatch => {
    try {
        dispatch({ type: CAReq });
        var response = await api.get("/courses/coursesbyuser", { headers: { 'authorization': `${localStorage.getItem('token')}` } })
        if (response.data.courses && !response.data.error) {
            dispatch({ type: CASuc, payload: response.data.courses, counter: 1 });
        }
        else dispatch({ type: CAErr, payload: response.data.error });
    } catch{ dispatch({ type: CAErr, payload: 'Somthing unexpected occured' }); }
}
