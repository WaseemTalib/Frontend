import { feedConstants } from '../constants';
import api from '../../utils/api';
//import history from '../../utils/history';
const { FAErr, FAReq, FASuc, FCRErr, FCRReq, RFReq, RFSuc, RFErr, FAReset } = feedConstants;

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

export const getFeeds = (data,count) => async dispatch => {
    try {
        dispatch({ type: FAReq });
        count === 0 && dispatch({ type: FAReset });
        var response = await api.get("/feed/feeds", { params: data, headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.feeds && !response.data.error) {
            dispatch({ type: FASuc, payload: response.data.feeds, counter: 1 });
        }
        else dispatch({ type: FAErr, payload: response.data.error });
    } catch{ dispatch({ type: FAErr, payload: 'Somthing unexpected occured' }); }
}

export const getFeedsAuth = (data, count) => async dispatch => {
    try {
        dispatch({ type: FAReq });
        count === 0 && dispatch({ type: FAReset });
        var response = await api.get("/feed/auth/feeds", { params: data, headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.feeds && !response.data.error) {
            dispatch({ type: FASuc, payload: response.data.feeds, counter: 1, comments: 0, replies: 0 });
        }
        else dispatch({ type: FAErr, payload: response.data.error });
    } catch{ dispatch({ type: FAErr, payload: 'Somthing unexpected occured' }); }
}

export const getComments = (_id) => async dispatch => {
    try {
        var response = await api.get(`feed/comments/${_id}`, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.comments && !response.data.error) {
            dispatch({ type: FASuc, payload: response.data.comments, comments: 0, replies: 0 });
        }
    } catch{ }
}

export const getReplies = (_id) => async dispatch => {
    try {
        dispatch({ type: FCRReq });
        var response = await api.get(`/comment/replies/${_id}`, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.replies && !response.data.error) {
            dispatch({ type: FASuc, payload: feeds, comments: 0, replies: 0 });;
        }
        else dispatch({ type: FCRErr, payload: response.data.error });
    } catch{ dispatch({ type: FCRErr, payload: 'Somthing unexpected occured' }); }
}

export const registerComments = (data) => async dispatch => {
    try {
        var response = await api.post(`/feed/addComment`, data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.comment && !response.data.error) {
            dispatch({ type: FASuc, payload: feeds, comments: 0, replies: 0 });
        }

    } catch{ }
}

export const registerReplies = (data, feedId) => async dispatch => {
    try {
        var response = await api.post(`/comment/addReply`, data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
        if (response.data.reply && !response.data.error) {
            dispatch({ type: FASuc, payload: feeds, comments: 0, replies: 0 });
        }
    } catch{ }
}

//var data = { feedId, commentId }
export const deleteComments = (data) => async dispatch => {
    try {
        await api.post(`/feed/delComment`, data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
    } catch{ }
}

// var data ={replyId, commentId}
export const deleteReplies = (data, feedId) => async dispatch => {
    try {
        await api.post(`/comment/delReply`, data, { headers: { 'authorization': `${localStorage.getItem('token')}` } });
    } catch{ }
}