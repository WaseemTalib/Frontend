import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PrivateInfo extends Component {
  render() {
    return (
      <div className="col-lg-12">
        <div style={{ backgroundColor: "#fff", marginTop: "3rem", marginBottom: "3rem", boxShadow: "0 5px 5px #777", borderRadius: "5px", overflow: "hidden" }}>
          <div className="popup__right">
            <h3 style={{ fontSize: "22px", color: "#fff" }}>Course Details</h3>
          </div>
          <form className="col-lg-12 col-md-12 col-12 login-card">
            <div style={{ marginBottom: "1.5rem", fontSize: "14px" }}>
              <label className="label">What Student Learn from your course?</label>
              <div className="input-group" style={{ marginTop: '12px' }}>
                <textarea id="detail" style={{ resize: "none", borderRadius: "10px 10px 0px 0" }} className="form-control inputStyle" name="detail" rows="4" cols="50" required></textarea>
              </div>
              <div style={{ border: "1px solid #ced4da", borderRadius: "0px 0px 10px 10px", borderTop: "hidden" }}>
                <button style={{ backgroundColor: "#fff", outline: "none", border: "none", borderRight: "1px solid #ced4da", padding: "10px 20px", borderRadius: "0 0 0 10px" }}><span className="fa fa-list"></span></button>
                <button style={{ backgroundColor: "#fff", outline: "none", border: "none", borderRight: "1px solid #ced4da", padding: "10px 20px" }}><span className="fa fa-bold"></span></button>
              </div>
              <div style={{ padding: "0 1.5rem" }}>
                <p style={{ display: "inline", fontSize: "12px" }}>Please Add Minimum 6 Points</p>
                <p style={{ float: "right", fontSize: "12px" }}>0/2000</p>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem", fontSize: "14px" }}>
              <label className="label">What are the Basic Requirements of the Course?</label>
              <div className="input-group" style={{ marginTop: '12px' }}>
                <textarea id="detail" style={{ resize: "none", borderRadius: "10px 10px 0px 0" }} className="form-control inputStyle" name="detail" rows="4" cols="50" required></textarea>
              </div>
              <div style={{ border: "1px solid #ced4da", borderRadius: "0px 0px 10px 10px", borderTop: "hidden" }}>
                <button style={{ backgroundColor: "#fff", outline: "none", border: "none", borderRight: "1px solid #ced4da", padding: "10px 20px", borderRadius: "0 0 0 10px" }}><span className="fa fa-list"></span></button>
                <button style={{ backgroundColor: "#fff", outline: "none", border: "none", borderRight: "1px solid #ced4da", padding: "10px 20px" }}><span className="fa fa-bold"></span></button>
              </div>
              <div style={{ padding: "0 1.5rem" }}>
                <p style={{ display: "inline", fontSize: "12px" }}>Please Add Minimum 3 Points</p>
                <p style={{ float: "right", fontSize: "12px" }}>0/2000</p>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label className="label">Please Write Long Description</label>
              <div className="input-group" style={{ marginTop: '12px' }}>
                <textarea id="detail" style={{ resize: "none", borderRadius: "10px 10px 0px 0" }} className="form-control inputStyle" name="detail" rows="4" cols="50" required></textarea>
              </div>
              <div style={{ border: "1px solid #ced4da", borderRadius: "0px 0px 10px 10px", borderTop: "hidden" }}>
                <button style={{ backgroundColor: "#fff", outline: "none", border: "none", borderRight: "1px solid #ced4da", padding: "10px 20px", borderRadius: "0 0 0 10px" }}><span className="fa fa-list"></span></button>
                <button style={{ backgroundColor: "#fff", outline: "none", border: "none", borderRight: "1px solid #ced4da", padding: "10px 20px" }}><span className="fa fa-bold"></span></button>
              </div>
              <div style={{ padding: "0 1.5rem" }}>
                <p style={{ display: "inline", fontSize: "12px" }}>Please Add Minimum 3 Points</p>
                <p style={{ float: "right", fontSize: "12px" }}>0/200</p>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label className="label">Who this Course is for?</label>
              <div className="input-group" style={{ marginTop: '12px' }}>
                <textarea id="detail" style={{ resize: "none", borderRadius: "10px 10px 0px 0" }} className="form-control inputStyle" name="detail" rows="4" cols="50" required></textarea>
              </div>
              <div style={{ border: "1px solid #ced4da", borderRadius: "0px 0px 10px 10px", borderTop: "hidden" }}>
                <button style={{ backgroundColor: "#fff", outline: "none", border: "none", borderRight: "1px solid #ced4da", padding: "10px 20px", borderRadius: "0 0 0 10px" }}><span className="fa fa-list"></span></button>
                <button style={{ backgroundColor: "#fff", outline: "none", border: "none", borderRight: "1px solid #ced4da", padding: "10px 20px" }}><span className="fa fa-bold"></span></button>
              </div>
              <div style={{ padding: "0 1.5rem" }}>
                <p style={{ display: "inline", fontSize: "12px" }}>&ensp;</p>
                <p style={{ float: "right", fontSize: "12px" }}>0/200</p>
              </div>
            </div>

            <div className="col-lg-12">
              <a className="course add_course" style={{ border: `4px dashed` }}>
                <div className="">
                  <label htmlFor="coursefile"><i className="fa fa-plus-square" aria-hidden="true"></i> <div className="text_add">Add Introductory's Video</div></label>
                  <input type="file" id="coursefile" style={{ display: `none` }} accept="image/x-png,image/png,image/gif,image/jpeg,image/jpg" />
                </div>
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to="/addcontent" className="btn btn-outline-danger addcoursebtn btnStyle">Submit for Preview</Link>
            </div>
          </form>
        </div>

      </div>
    )
  }
}

export default PrivateInfo