import React, { Component } from 'react'
import ProfileHeader from '../Profile/ProfileHeader'
import PersonalInfo from '../Profile/PersonalInfo';
import Adddetail from "./adddetail"
import { registerCourses } from '../../redux/actions/courseActions';
import { connect } from 'react-redux';

class Profile extends Component {

  handleSubmit(e) {
    const { registerCourses, profile } = this.props;
    var data = { topicId: '', postedBy: profile._id, covervideo: '', coverImage: '', title: '',
      status: '', shortdescription: '', learningoutcomes: '', targetedstudents: ''
    }
    registerCourses(data);
  }

  render() {
    const { profile, TopicList } = this.props;
    return (
      <div>
        <ProfileHeader condition={true} index={1} profile={profile} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-md-5 mb-sm-5" style={{ marginTop: `150px` }}>
              <PersonalInfo profile={profile} />
            </div>
            <div className="col-lg-9 col-md-12">
              <Adddetail profile={profile} topics={TopicList} onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    Auth: state.Auth.auth,
    profile: state.Profile.data,
    TopicList: state.Topics.data
  }
}

export default connect(mapStateToProps, { registerCourses })(Profile);