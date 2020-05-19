import React, { Component } from 'react'
import PersonalInfo from '../Profile/PersonalInfo'
import ProfileHeader from '../Profile/ProfileHeader'
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import CoursesComp from './Courses';
import { connect } from 'react-redux';
import { getMyCourses } from '../../redux/actions/courseActions';

class MyCourses extends Component {

  componentDidMount() {
    const { getMyCourses } = this.props;
    getMyCourses();
  }

  render() {
    const { Courses, profile, TopicList } = this.props;
    return (
      <div>
        <Navbar />
        <ProfileHeader condition={true} index={1} profile={profile} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-md-5 mb-sm-5 personal_info_wrapper" style={{ marginTop: `150px` }}>
              <PersonalInfo profile={profile} />
            </div>
            <CoursesComp courses={Courses} topics={TopicList} profile={profile} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    Auth: state.Auth.auth,
    profile: state.Profile.data,
    Courses: state.CourseList.data,
    isSuccess: state.CourseList.isSuccess,
    isLoading: state.CourseList.isLoading, // If you want to show a loader until feeds load
    RegLoad: state.RegCourse.isLoading,// REG Course TO CONRTOL FEED LOADING ERROS ETC
    RegSuc: state.RegCourse.isSuccess,
    RegErr: state.RegCourse.isError,
    TopicList: state.Topics.data
  }
}

export default connect(mapStateToProps, { getMyCourses })(MyCourses);