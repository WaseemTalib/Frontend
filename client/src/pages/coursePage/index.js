import React, { Component } from 'react';
import Navbar from '../../components/nav';
import { connect } from 'react-redux';
import Header from '../../components/courses/header';
import Courses from '../../components/courses/courseList';
import RecomendedCategories from '../../components/courses/Categories';
import Footer from '../../components/footer';

class index extends Component {
    render() {
        const { TopicList } = this.props;
        const titles= ["Recommended Courses","ABC"]
        return <div className="container-fluid p-0" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                <Navbar active={2} />
                <Header />
                {TopicList && TopicList.length > 0 && <RecomendedCategories link="coursescategories" heading="Categories" list={[...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList,...TopicList]} />}
                {TopicList && TopicList.length > 0 && titles.map(el=> <Courses list={TopicList.slice(0, TopicList.length > 5 ? 5 : TopicList.length)} title={el} />)}
                {TopicList && TopicList.length > 0 && <Courses title="Intrested Courses" list={TopicList.slice(0, TopicList.length > 5 ? 5 : TopicList.length)}  />}
                <Footer/>
                </div>
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        isError: state.Profile.isError,
        RegisterFeed: state.RegFeed,
        TopicList: state.Topics.data
    }
}

export default connect(mapStateToProps)(index);;