import React, { Component } from 'react'
import PersonalInfo from '../Profile/PersonalInfo'
import ProfileHeader from '../Profile/ProfileHeader'
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import Courses from './Courses';
class MyCourses extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <ProfileHeader condition={true} index={1} />
        <div className="container-fluid">
        <div className="row">
          <PersonalInfo />
          <Courses />
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MyCourses