import React, { Component } from 'react'
import PersonalInfo from '../Profile/PersonalInfo'
import ProfileHeader from '../Profile/ProfileHeader'
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import Courses from './Courses';
import { Link } from 'react-router-dom';
class MyCourses extends Component {
  render () {
    const { condition } = this.props
    return (
      <div>
        <Navbar />
        <ProfileHeader condition={condition} index={2} />
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-3 col-md-12 mb-md-5 mb-sm-5 personal_info_wrapper" style={{ marginTop: `150px` }}>
        {condition ? <PersonalInfo /> : <div className="info_wrapper"><Link to="/inbox" className="btn text-danger" style={{ width: `100%` }}><i className="fa fa-envelope"></i> Send Message</Link></div>}
        </div>
          <Courses condition={condition} />
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default MyCourses