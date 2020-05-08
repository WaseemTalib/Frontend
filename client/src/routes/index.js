import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from '../pages/loginPage';
import SignupPage from '../pages/signupPage';
import CommunityPage from '../pages/communityPage';
import MoreCommunityPage from '../pages/morecommunitiesPage';
import GroupsPage from '../pages/groupsPage';
import TopicPage from '../pages/topicPage';
import CoursePage from '../pages/coursePage';
import EBookPage from '../pages/ebookPage';
import ebookdetailsPage from '../pages/ebookdetailsPage';
import MyPurchasesPage from '../pages/mypurchasesPage';
export function Routes() {
    return <div>
        <Switch>
        <Route exact path='/community' component={CommunityPage} />
        <Route exact path='/morecommunities' component={MoreCommunityPage} />
        <Route exact path='/groups' component={GroupsPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={SignupPage} />
        <Route path='/user/:id/topics' component={TopicPage} />
        <Route path='/courses' component={CoursePage}/>
        <Route path='/ebooks' component={EBookPage}/>
        <Route path='/ebookdetails' component={ebookdetailsPage}/>
        <Route path='/mypurchases' component={MyPurchasesPage}/>
        <Route render={() => <Redirect to='/community' />} />
    </Switch>
    </div>
}