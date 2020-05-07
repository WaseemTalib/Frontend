import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader'
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import PersonalInfo from './PersonalInfo';
class Profile extends Component {
  render () {
    const condition = true
    return (
      <div>
        <Navbar />
        <ProfileHeader condition={condition} />
        <div className="container-fluid">
        <div className="row">
          {condition ? <PersonalInfo /> : ""}
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}
//https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg
export default Profile