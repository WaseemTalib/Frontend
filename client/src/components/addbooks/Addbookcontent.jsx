import React, { Component } from "react";
import Header from "../nav";
import Footer from "../footer";
import { Link } from "react-router-dom";
class AddContent extends Component {
  state = {
    add: false,
    dropdownItems: [],
  };
  componentDidMount() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const dropdownItems = items.map((el) => `Chapter ${el}`);
    this.setState({ dropdownItems });
  }
  render() {
    return (
      <div className="add_content">
        <Header />
        <div className="content">
          <div className="content_inner">
            <div
              className="add_content_wrapper"
              style={{
                textAlign: `center`,
                marginBottom: `50px`,
                width: "30%",
              }}
            >
              <div
                className="course add_course"
                style={{ border: `4px dashed` }}
              >
                <div className="">
                  <label htmlFor="coursefile">
                    <i className="fa fa-plus-square" aria-hidden="true"></i>{" "}
                    <div className="text_add">Add Cover Photo</div>
                  </label>
                  <input
                    type="file"
                    id="coursefile"
                    style={{ display: `none` }}
                  />
                </div>
              </div>
              Size: 150 x 300
            </div>
            <div className="price_wrapper input_content_wrapper">
              <p>
                <label htmlFor="title">Title: </label>
                <input
                  // style={{ border: "none", outline: "none", padding: "0" }}
                  value="Title"
                   
                  id="title"
                  type="text"
                  placeholder="title"
                />
              </p>
              <p>
                <label htmlFor="price">Genre: </label>
                <input
                  // style={{ border: "none", outline: "none", padding: "0" }}
                  value="Computer"
                   
                  id="price"
                  type="text"
                  placeholder="Price"
                />
              </p>
              <p>
                <label htmlFor="price">Set Price: </label>
                <input
                  // style={{ border: "none", outline: "none", padding: "0" }}
                  id="price"
                  value="30$"
                   
                  type="text"
                  placeholder="30$"
                />
              </p>
            </div>
            <div className="input_content_wrapper">
              <p className=" mb-2">
                <label htmlFor="description">Synosis: </label>
                <textarea
                  // style={{ border: "none", outline: "none", padding: "0" }}
                  id="description"
                  value="The file will have its original line endings in your working directory"
                   
                  rows={5}
                  placeholder="Description"
                ></textarea>
              </p>
              <p className="mb-5">
                <label>Upload PDF:</label>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    borderRadius: "3px",
                    margin: "0 auto",
                    width: "max-content",
                    border: "1px solid #ced4da",
                  }}
                >
                  <img
                    htmlFor="bookpdf"
                    src="https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/24-512.png"
                    width="50px"
                    height="50px"
                  />
                  <label style={{ cursor: "pointer", width: "auto", margin: "0" }}>
                    {" "}
                    <div
                      style={{
                        fontFamily: "Open Sans",
                        fontSize: "1.2rem",
                        color: "gray",
                      }}
                    >
                      {" "}
                      No File selected{" "}
                    </div>
                    <input
                      type="file"
                      id="bookpdf"
                      accept="application/pdf,application/vnd.ms-excel"
                    />
                  </label>
                </div>
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", width: `100%` }}>
            <Link
              to="/addcontent"
              className="btn btn-outline-danger addcoursebtn btnStyle"
            >
              Submit
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddContent;
