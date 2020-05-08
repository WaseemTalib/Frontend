import React, { Component } from 'react'
import ProfileHeader from './ProfileHeader'
import Navbar from '../../components/nav';
import Footer from '../../components/footer';
import PersonalInfo from './PersonalInfo';
import PostCard from "../card/PostCard"
import PrivateInfo from './PrivateInfo';
import { Link } from 'react-router-dom';
class Profile extends Component {
  renderCoursesLinks=(TopicList)=> {
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
  render () {
    const condition = this.props.ismyProfile;
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
      "ABC",
      "ABC",
      "ABC",
      "ABC",
      "ABC"
    ]

    return (
      <div>
        <Navbar />
        <ProfileHeader condition={condition} index={0} />
        <div className="container-fluid" style={{zIndex: -1}}>
        <div className="row" style={{zIndex: -1}}>
          {condition ? <PersonalInfo /> : <div className="col-lg-3" style={{marginTop: `150px`}}><div className="info_wrapper"><Link to="/" className="btn text-danger" style={{width: `100%`}}><i className="fa fa-envelope"></i> Send Message</Link></div></div>}
          <div className="col-lg-6 col-md-12">
            <PostCard {...obj}/>
            <PostCard {...obj}/>
            <PostCard {...obj}/>
          </div>
          {condition ? <PrivateInfo /> :
          <div className="col-lg-3">
            <div className="right-side" style={{width: `100%`}}>
              <div className="right-side-border" style={{width: `100%`}}>
                <h2 className="right-side-heading-h">Recommended Courses</h2>
                <ul className="right-side-list">
                  {this.renderCoursesLinks(TopicList)}
                </ul>
              </div>
            </div>
          </div>}
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Profile