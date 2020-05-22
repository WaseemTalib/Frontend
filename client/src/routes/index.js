import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import ProfilesettingPage from '../pages/profilesettingPage';
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signupPage';
import CommunityPage from '../pages/communityPage';
import CreditsPage from '../pages/creditsPage';
import WatchcoursePage from '../pages/watchcoursePage';
import ReadeBookPage from '../pages/readebooksPage';
import WatchplacePage from '../pages/watchplacePage';
import MoreCommunityPage from '../pages/morecommunitiesPage';
import GroupsPage from '../pages/groupsPage';
import AddbooksPage from '../pages/addbooksPage';
import AddcoursePage from '../pages/addcoursePage';
import TopicPage from '../pages/topicPage';
import CoursePage from '../pages/coursePage';
import CoursesCategoriesPage from '../pages/coursescategoriesPage';
import CourseDetailsPage from '../pages/coursedetailsPage';
import EBookPage from '../pages/ebookPage';
import ebookdetailsPage from '../pages/ebookdetailsPage';
import MyPurchasesPage from '../pages/mypurchasesPage';
import Profile from '../components/Profile';
import MyCourses from '../components/MyCourses';
import Messages from '../components/Messages';
import Profilebooks from '../components/profilebooks';
import CommunityPageT from '../pages/communityPageT';
import AddContent from "../components/addcourse/AddContent"
import Addbookcontent from "../components/addbooks/Addbookcontent"
export function Routes() {
    return <div>
        <Switch>
            <Route exact path='/addbooks' component={AddbooksPage} />
            <Route exact path='/profilesetting' component={ProfilesettingPage} />
            <Route exact path='/myebooks' component={Profilebooks} />
            {/* <Route exact path='/' component={CommunityPage} /> */}
            <Route exact path='/community/:tId' component={CommunityPageT} />
            <Route exact path='/credits' component={CreditsPage} />
            <Route exact path='/watchcourses' component={WatchcoursePage} />
            <Route exact path='/readebook' component={ReadeBookPage} />
            <Route exact path='/watchplace' component={WatchplacePage} />
            <Route exact path='/' component={MyCourses} />
            {/* <Route exact path='/mycourses' component={MyCourses} /> */}
            <Route exact path='/groups' component={GroupsPage} />
            <Route exact path='/addcourse' component={AddcoursePage} />
            <Route exact path='/addcontent' component={AddContent} />
            <Route exact path='/addbookcontent' component={Addbookcontent} />
            <Route exact path='/morecommunities' component={MoreCommunityPage} />
            <Route path='/inbox' component={Messages} />
            <Route path='/user/:id/topics' component={TopicPage} />
            <Route path='/courses' component={CoursePage} />
            <Route path='/coursescategories' component={() => <CoursesCategoriesPage course={true} />} />
            <Route path='/ebookscategories' component={() => <CoursesCategoriesPage course={false} />} />
            <Route path='/coursedetails' component={CourseDetailsPage} />
            <Route path='/profile' component={() => <Profile ismyProfile={true} />} />
            <Route path='/otherprofile' component={() => <Profile ismyProfile={false} />} />
            <Route path='/ebooks' component={EBookPage} />
            <Route path='/ebookdetails' component={ebookdetailsPage} />
            <Route path='/mypurchases' component={MyPurchasesPage} />
            <Route render={() => <Redirect to='/' />} />
        </Switch>
    </div>
}

export function PublicRoutes() {
    return <div>
        <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route path='/register' component={SignupPage} />
            <Route render={() => <Redirect to='/login' />} />
        </Switch>
    </div>
}