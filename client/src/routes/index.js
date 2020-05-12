import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signupPage';
import CommunityPage from '../pages/communityPage';
import CreditsPage from '../pages/creditsPage';
import ProfilesettingPage from '../pages/profilesettingPage';
import WatchcoursePage from '../pages/watchcoursePage';
import WatchplacePage from '../pages/watchplacePage';
import MoreCommunityPage from '../pages/morecommunitiesPage';
import GroupsPage from '../pages/groupsPage';
import AddcoursePage from '../pages/addcoursePage';
import TopicPage from '../pages/topicPage';
import CoursePage from '../pages/coursePage';
import CourseDetailsPage from '../pages/coursedetailsPage';
import EBookPage from '../pages/ebookPage';
import ebookdetailsPage from '../pages/ebookdetailsPage';
import MyPurchasesPage from '../pages/mypurchasesPage';
import Profile from '../components/Profile';
import MyCourses from '../components/MyCourses';
import Messages from '../components/Messages';
export function Routes() {
    return <div>
        <Switch>
        {/* <Route exact path='/community' component={Messages} /> */}
        {/* <Route exact path='/community' component={CommunityPage} /> */}
        <Route exact path='/credits' component={CreditsPage} />
        <Route exact path='/community' component={ProfilesettingPage} />
        <Route exact path='/watchcourses' component={WatchcoursePage} />
        <Route exact path='/watchplace' component={WatchplacePage} />
        <Route exact path='/mycourses' component={MyCourses} />
        <Route exact path='/groups' component={GroupsPage} />
        <Route exact path='/addcourse' component={AddcoursePage} />
        <Route exact path='/morecommunities' component={MoreCommunityPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/inbox' component={Messages} />
        <Route path='/register' component={SignupPage} />
        <Route path='/user/:id/topics' component={TopicPage} />
        <Route path='/courses' component={CoursePage}/>
        <Route path='/coursedetails' component={CourseDetailsPage}/>
        <Route path='/profile' component={()=><Profile ismyProfile={true} />}/>
        <Route path='/otherprofile' component={()=><Profile ismyProfile={false} />}/>
        <Route path='/ebooks' component={EBookPage}/>
        <Route path='/ebookdetails' component={ebookdetailsPage}/>
        <Route path='/mypurchases' component={MyPurchasesPage}/>
        <Route render={() => <Redirect to='/community' />} />
    </Switch>
    </div>
}