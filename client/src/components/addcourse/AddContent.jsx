import React, { Component } from "react";
import Header from "../nav";
import Footer from "../footer";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
class AddContent extends Component {
  state={
    add: false,
    dropdownItems: []
  }
  componentDidMount(){
    const items = [1,2,3,4,5,6,7,8,9,10];
    const dropdownItems = items.map(el=> `Chapter ${el}`);
    this.setState({dropdownItems});
  }
  render() {
    return (
      <div className="add_content">
        <Header />
        <div className="content">
          <div className="content_inner">
            <div className="add_content_wrapper" style={{textAlign: `center`,marginBottom: `50px`}}>
              <div className="course add_course" style={{ border: `4px dashed` }}>
                <div className="">
                  <label htmlFor="coursefile">
                    <i className="fa fa-plus-square" aria-hidden="true"></i>{" "}
                    <div className="text_add">Add Thumbnail</div>
                  </label>
                  <input type="file" id="coursefile" style={{ display: `none` }}/>
                </div>
              </div>
              Size: 300 x 300
            </div>
            <div className="price_wrapper input_content_wrapper">
              <p>
                <label htmlFor="title">Title: </label>
                <input style={{border: "none", outline: "none", padding: "0"}} value="My Title" readOnly id="title" type="text" placeholder="Price" />
              </p>
             <p>
                <label htmlFor="category">Category: </label>
                <input style={{border: "none", outline: "none", padding: "0"}} value="Computer" readOnly id="category" type="text" placeholder="Price" />
              </p>
             <p>
                <label htmlFor="short">Short Description: </label>
                <input style={{border: "none", outline: "none", padding: "0"}} value="The file will have its original line endings in your working directory" readOnly id="short" type="text" placeholder="Price" />
              </p>
              <p >
                <label htmlFor="price">Price: </label>
                <input id="price" value="30$" type="text" style={{border: "none", outline: "none", padding: "0"}} placeholder="Price" />
              </p>
             </div>
             <div className="input_content_wrapper">
              <p className="mb-3">
                <label htmlFor="description">Description: </label>
                <textarea  style={{border: "none", outline: "none", padding: "0"}} id="description" value="The file will have its original line endings in your working directory" readOnly rows={5} placeholder="Description"></textarea>
              </p>
              
             </div>
            </div>
          <div className="dropdown_items_wrapper">
          {this.state.add ? "" : <button onClick={()=> this.setState({dropdownItems: [...this.state.dropdownItems,<input className="my_input" placeholder="Chapter Name" type="text"/>],add: true})} className="add_btn">+ Add Chapter</button>}
          <ol type="I">
            {this.state.dropdownItems.map((el,i)=> <li className="dropdown_item"> <Dropdown add={this.state.add && this.state.dropdownItems.length - 1 === i} title={el} /> </li>)}
          </ol>
          </div>
          <div style={{ textAlign: "center",width: `100%` }}>
              <Link to="/addcontent" className="btn btn-outline-danger addcoursebtn btnStyle">Submit</Link>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddContent;
