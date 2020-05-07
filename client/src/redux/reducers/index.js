import { combineReducers } from 'redux';
import { loginReducer, registerReducer, CurrentUser, userProfile } from './userReducer';
import { topicReducer } from './topicReducer';
import { registerFeedReducer, feedReducer } from './feedReducer';

export default combineReducers({
    Login: loginReducer,
    Register: registerReducer,
    Auth: CurrentUser,
    Topics: topicReducer,
    Profile: userProfile,
    RegFeed : registerFeedReducer,
    Feed : feedReducer
});