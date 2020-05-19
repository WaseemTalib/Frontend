import { feedConstants } from '../constants';
import api from '../../utils/api';
//import history from '../../utils/history';
const { FAErr, FAReq, FASuc, RFReq, RFSuc, RFErr, FAReset, FErr, FReq, FSuc } = feedConstants;

var feeds = [];

export const registerFeeds = (data) => async dispatch => {
    try {
        dispatch({ type: RFReq });
        var response = await api.post("/feed/register", data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.feed && !response.data.error) {
            dispatch({ type: RFSuc });
            dispatch({ type: FASuc, payload: response.data.feed, counter: 0 });
        }
        else dispatch({ type: RFErr, payload: response.data.error });
    } catch{ dispatch({ type: RFErr, payload: 'Somthing unexpected occured' }); }
}

export const getFeedsTopic = (data, count) => async dispatch => {
    try {
        dispatch({ type: FAReq });
        count === 0 && dispatch({ type: FAReset });
        var response = await api.get("/feed/feedsbytopic", { params: data, headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.feeds && !response.data.error) {
            dispatch({ type: FASuc, payload: response.data.feeds, counter: 1 });
        }
        else dispatch({ type: FAErr, payload: response.data.error });
    } catch{ dispatch({ type: FAErr, payload: 'Somthing unexpected occured' }); }
}

export const getFeedById = (_id) => async dispatch => {
    try {
        dispatch({ type: FReq });
        var response = await api.get(`/feed/feed/${_id}`, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.feed && !response.data.error) dispatch({ type: FSuc, payload: response.data.feed });
        else dispatch({ type: FErr, payload: response.data.error });
    } catch{ dispatch({ type: FErr, payload: 'Somthing unexpected occured' }); }
}

export const getFeeds = (limit, count) => async dispatch => {
    try {
        dispatch({ type: FAReq });
        count === 0 && dispatch({ type: FAReset });
        var response = await api.get("/feed/auth/feeds", { params: { limit: limit }, headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.feeds && !response.data.error) {
            dispatch({ type: FASuc, payload: response.data.feeds, counter: 1 });
        }
        else dispatch({ type: FAErr, payload: response.data.error });
    } catch{ dispatch({ type: FAErr, payload: 'Somthing unexpected occured' }); }
}

export const addComments = (data) => async dispatch => {
    try {
        await api.post(`/feed/addComment`, data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
    } catch{ }
}

export const addReplies = (data) => async dispatch => {
    try {
        await api.post(`/comment/addReply`, data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
    } catch{ }
}

export const deleteComments = (data) => async dispatch => {
    try {
        await api.post(`/feed/delComment`, data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
    } catch{ }
}

export const deleteReplies = (data) => async dispatch => {
    try {
        await api.post(`/comment/delReply`, data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
    } catch{ }
}