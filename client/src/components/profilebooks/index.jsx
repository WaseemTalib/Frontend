import React, { Component } from 'react'
import PersonalInfo from '../Profile/PersonalInfo'
import ProfileHeader from '../Profile/ProfileHeader'
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import Courses from './Courses';
class MyCourses extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <ProfileHeader condition={true} index={2} />
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-3 col-md-12 mb-md-5 mb-sm-5 personal_info_wrapper" style={{ marginTop: `150px` }}>
          <PersonalInfo />
        </div>
          <Courses />
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MyCourses