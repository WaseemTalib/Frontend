import React, { Component, Fragment } from 'react'
import ProfileHeader from './ProfileHeader'
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import PersonalInfo from './PersonalInfo';
import PostCard from "../card/PostCard"
import PrivateInfo from './PrivateInfo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Profile extends Component {
  
  state = {
    width: window.innerWidth
  }
  
  componentDidMount() {
    window.addEventListener("resize", () => this.setState({ width: window.innerWidth }))
  }

  renderCoursesLinks = (TopicList) => {
    if (TopicList && TopicList.length > 0)
      return TopicList.slice(0, 5).map(i => {
        return <li key={i._id} className="right-side-item">
          <Link to="" className="right-side-link">
            <img src={i.image} alt="topic" style={{ width: '30px', height: '30px', borderRadius: '1000px', marginRight: '16px' }} />
            <span className="right-side-text">Dummy Course</span>
          </Link>
        </li>
      })
  }

  renderPosts(list){
     return list && list.length > 0 && list.map(item => {
            return <PostCard item={item} handleFeed={this.onhandleFeed} />
        });
  }

  render() {
    const condition = this.props.ismyProfile;
    const { profile} =this.props;
    const obj = {
      postedBy: {
        name: "Texting",
      },
      feed: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestiae qui eveniet consequatur repellendus perspiciatis praesentium reiciendis soluta sit doloremque impedit nesciunt nemo libero voluptas quam, magni rem dolores eum?",
      id: Math.random()
    }
    const TopicList = [
      "ABC",
      "ABC",
      "ABC",
    ]

    return (
      <div>
        <Navbar />
        <ProfileHeader condition={condition} index={0} profile={profile} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 mb-md-5 mb-sm-5 personal_info_wrapper" style={{ marginTop: `150px` }}>
              {condition ? <PersonalInfo profile={profile}/> : <div className="info_wrapper">
                <Link to="/inbox" className="btn text-danger" style={{ width: `100%` }}><i className="fa fa-envelope"></i> Send Message</Link>
              </div>}
            </div>
            {this.state.width < 1000 ? <Fragment>
              <div className="col-lg-3 col-md-12 mb-md-5 mb-sm-5">
                {condition ? <PrivateInfo profile={profile}/> :
                  <div className="right-side" style={{ width: `100%` }}>
                    <div className="right-side-border" style={{ width: `100%` }}>
                      <h2 className="right-side-heading-h">Recommended Courses</h2>
                      <ul className="right-side-list">
                        {this.renderCoursesLinks(TopicList)}
                      </ul>
                    </div>
                  </div>}
              </div>
            </Fragment> : ""}
            <div className="col-lg-6 col-md-12">
              {this.renderPosts([])} // need to call myposts here
            </div>
            {
              this.state.width > 1000 ? <Fragment>
                <div className="col-lg-3">
                  {condition ? <PrivateInfo /> :
                    <div className="right-side" style={{ width: `100%` }}>
                      <div className="right-side-border" style={{ width: `100%` }}>
                        <h2 className="right-side-heading-h">Recommended Courses</h2>
                        <ul className="right-side-list">
                          {this.renderCoursesLinks(TopicList)}
                        </ul>
                      </div>
                    </div>
                  }
                </div>
              </Fragment> : ""
            }
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
        TopicList: state.Topics.data
    }
  }

export default connect(mapStateToProps)(Profile);