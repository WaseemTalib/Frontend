import { combineReducers } from 'redux';
import { loginReducer, registerReducer, CurrentUser, userProfile } from './userReducer';
import { topicReducer } from './topicReducer';
import { registerFeedReducer, feedReducer, feedIReducer } from './feedReducer';
import { registerCourseReducer, courseListReducer } from './courseReducer';

export default combineReducers({
    Login: loginReducer,
    Register: registerReducer,
    Auth: CurrentUser,
    Topics: topicReducer,
    Profile: userProfile,
    RegFeed : registerFeedReducer,
    Feed : feedReducer,
    FeedS: feedIReducer,
    RegCourse: registerCourseReducer,
    CourseList: courseListReducer 
});