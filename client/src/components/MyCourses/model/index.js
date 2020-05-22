import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../../assets/img_avatar.png';
import './style.css';
import { connect } from 'react-redux';
import { registerCourses } from '../../../redux/actions/courseActions';

const btnStyle = { borderRadius: '10px', marginTop: '16px', width: '99%' };


class index extends Component {

    handleSubmit(e) {
        const { registerCourses, profile } = this.props;
        var data = {
            topicId: '', postedBy: profile._id, covervideo: '', coverImage: '', title: '',
            status: '', shortdescription: '', learningoutcomes: '', targetedstudents: ''
        }
        registerCourses(data);
    }

    render() {
        const { topics, profile } = this.props;
        console.log(topics, profile)
        return (
            <section className="popup" id="popup">
            <div className="popup__box">
              <div className="popup__right">
                <h3 style={{ fontSize: "22px", color: "#fff" }}>Create Course</h3>
                <a href="#" className="popup__icon">
                  {" "}
                  <i className="fa fa-times popup__close"></i>
                </a>
              </div>
              <form
                className="books-model-both"
                style={{
                  padding: "2rem",
                  overflowY: "scroll",
                  height: `90vh`,
                  flexDirection: `column`,
                }}
              >
                <label className="label">Title of Course:</label>
                <div className="input-group mb-2" style={{ marginTop: "5px" }}>
                  <input
                    type="text"
                    className="form-control inputStyle"
                    name="title"
                    required
                  />
                </div>
                <label className="label">Price:</label>
                <div className="input-group mb-2" style={{ marginTop: "5px" }}>
                  <input
                    type="number"
                    className="form-control inputStyle"
                    name="price"
                    required
                  />
                </div>
                <label className="label">Choose Category:</label>
                <select id="cars" className="form-control inputStyle mb-2">
                  <option
                    value="volvo"
                    className="option-bgimg"
                    style={{ backgroundImage: `url(${Background})` }}
                  >
                    IT Technology
                  </option>
                  <option value="saab">Graphic Design</option>
                  <option value="opel">PhotoGraphy</option>
                  <option value="audi">Health</option>
                </select>
    
                <label className="label">Short Description:</label>
                <div
                  className="input-group mb-2 description-text"
                  style={{ marginTop: "5px" }}
                >
                  <textarea
                    id="detail"
                    style={{ resize: "none" }}
                    className="form-control inputStyle"
                    name="detail"
                    rows="1"
                    cols="50"
                    required
                  ></textarea>
                </div>
                <Link
                  to="/addcourse"
                  className="btn btn-outline-danger pt-3 pb-3 mr-2"
                  style={btnStyle}
                >
                  Submit
                </Link>
              </form>
            </div>
          </section>
        )
    }
}

export default connect(null, { registerCourses })(index);