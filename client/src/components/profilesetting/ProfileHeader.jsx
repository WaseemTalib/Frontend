import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileHeader extends Component {
  render() {
    const buttons = ["My Profile","Posted Courses", "Posted E-Books"];
    const pages =["/profile","/mycourses","myebooks"]
    return (
      <div>
        <div className="profile_header_wrapper">
          <div className="cover_image" style={{backgroundImage: `url(https://i.pinimg.com/originals/bf/4f/62/bf4f62d290b0e1e44a325068ed9043c3.jpg)`}}>
          {
            this.props.condition ?
            <div className=""><input type="file" name="aa" id="background" style={{display: `none`}} />
            <label htmlFor="background" className="btn btn-light"><i className="fa fa-camera"></i> {window.innerWidth < 600 ? "" : "Change"} </label></div> :
            ""
          }
          </div>
          <div className="profile_image_wrapper" style={{zIndex: 1000}}>
            <div className="profile_image"  style={{backgroundImage: `url(https://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Nice-Whatsapp-Dp-Profile-Images-101-300x300.jpg)`}}>
              {this.props.condition ? <div className=""><input type="file" name="aa" id="profile" style={{display: `none`}} />
              <label htmlFor="profile" className="btn btn-danger"><i className="fa fa-camera"></i></label></div> : ""}
            </div>
            <h3>Testing </h3>
          </div>
        </div>
        <div className="container-fluid m_top_200">
          <div className="row">
            <div className="col-lg-9" style={{marginLeft: `auto`}}>
              <div className="p-3">
                {this.props.condition ? buttons.map((el,i)=> i=== this.props.index ? <button key={i} className="pagination_profile page_active"> {el} </button> : <Link key={i} to={pages[i]} className="pagination_profile"> {el} </Link>) : <h5>Timeline</h5>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;