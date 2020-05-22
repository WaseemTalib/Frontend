import React, { Component } from 'react'
import PersonalInfo from '../Profile/PersonalInfo'
import ProfileHeader from '../Profile/ProfileHeader'
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import CoursesComp from './Courses';
import { connect } from 'react-redux';
import { getMyCourses } from '../../redux/actions/courseActions';
import { Link } from 'react-router-dom';

class MyCourses extends Component {

  componentDidMount() {
    const { getMyCourses } = this.props;
    getMyCourses();
  }

  render() {
    const { Courses, profile, TopicList,condition } = this.props;
    return (
      <div className="my_courses_page">
        <Navbar />
        <ProfileHeader condition={condition} index={1} profile={profile} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-md-5 mb-sm-5 personal_info_wrapper" style={{ marginTop: `150px` }}>
              {condition ? <PersonalInfo profile={profile} /> : <div className="info_wrapper"><Link to="/inbox" className="btn text-danger" style={{ width: `100%` }}><i className="fa fa-envelope"></i> Send Message</Link></div>}
            </div>
            <CoursesComp condition={condition} courses={Courses} topics={TopicList} profile={profile} />
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