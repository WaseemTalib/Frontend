import React, { Component } from 'react';

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <div className="profile_header_wrapper">
          <div className="cover_image" style={{backgroundImage: `url(https://i.pinimg.com/originals/bf/4f/62/bf4f62d290b0e1e44a325068ed9043c3.jpg)`}}>
          {
            this.props.condition ?
            <div className=""><input type="file" name="aa" id="background" style={{display: `none`}} />
            <label htmlFor="background" className="btn btn-light"><i className="fas fa-camera"></i> Change</label></div> :
            ""
          }
          </div>
          <div className="profile_image_wrapper">
            <div className="profile_image"  style={{backgroundImage: `url(https://www.goodmorningimagesdownload.com/wp-content/uploads/2019/10/Nice-Whatsapp-Dp-Profile-Images-101-300x300.jpg)`}}>
              {this.props.condition ? <div className=""><input type="file" name="aa" id="profile" style={{display: `none`}} />
              <label htmlFor="profile" className="btn btn-danger"><i className="fas fa-camera"></i></label></div> : ""}
            </div>
            <h3>ADEEB AHMAD</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;