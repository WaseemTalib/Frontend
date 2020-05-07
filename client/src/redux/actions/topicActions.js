import { topicConstants } from '../constants';
import api from '../../utils/api';
//import history from '../../utils/history';
const { TSuc, TReq, TErr } = topicConstants;

export const getTopics = () => async dispatch => {
    try {
        dispatch({ type: TReq });
        var response = await api.get("/topic/topics", { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.topics && !response.data.error) {
            dispatch({ type: TSuc, payload: response.data.topics });
        }
        else dispatch({ type: TErr, payload: response.data.error });
    } catch{ dispatch({ type: TErr, payload: 'Somthing unexpected occured' }); }
}