import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../../assets/img_avatar.png'
import './style.css'

const btnStyle = { borderRadius: '10px', marginTop: '16px', width: '99%' };


export default class index extends Component {

    render() {
        return (

            <section className="popup" id="popup">
                <div className="popup__box">
                    <div className="popup__right">
                        <h3 style={{ fontSize: "22px", color: "#fff" }}>Add New E-Books</h3>
                        <a href="#" className="popup__icon"> <i className="fa fa-times popup__close"></i></a>
                    </div>
                    <form className="books-model-both" style={{padding: "2rem", overflowY: "scroll",height: `70vh`,flexDirection:`column`}}>
                        
                        <div style={{display: 'flex'}}>
                        <div className="books-model-left">
                                <a className="course add_course" style={{ height: "300px", border: `4px dashed` }}>
                                    <div className="" >
                                        <label htmlFor="coursefile" style={{cursor: "pointer"}}><i className="fa fa-plus-square" aria-hidden="true"></i> <div className="text_add">Add cover Photo</div></label>
                                        <input type="file" id="coursefile" style={{ display: `none` }} accept="image/x-png,image/png,image/gif,image/jpeg,image/jpg" />
                                    </div>
                                </a>
                            </div>
                            <div className="books-model-right">
                                <label className="label">Title of Book:</label>
                                <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                                    <input type="text" className="form-control inputStyle" name='email'
                                        required />
                                </div>
                                <label className="label">Author of Book:</label>
                                <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                                    <input type="text" className="form-control inputStyle" name='email'
                                        required />
                                </div>
                                <label className="label">Choose Category:</label>
                                <select id="cars" className="form-control inputStyle mb-3" >
                                    <option value="volvo" className="option-bgimg" style={{ backgroundImage: `url(${Background})` }}>History</option>
                                    <option value="saab">Technology</option>
                                    <option value="opel">Religious</option>
                                    <option value="audi">Health</option>
                                </select>
                            </div>
                        </div>

                        <div className="d-flex">
                            <span style={{flex: "0 0 49%", marginRight: "2%"}}>
                                <label className="label">Price:</label>
                                <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                                    <input type="text" className="form-control inputStyle" name='email'
                                        required />
                                </div>
                            </span>
                            <span style={{flex: "0 0 49%"}}>
                                <label className="label">No. of pages:</label>
                                <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                                    <input type="text" className="form-control inputStyle" name='email'
                                        required />
                                </div>
                            </span>
                        </div>
                        <span>
                            <label className="label">Language:</label>
                            <select id="cars" className="form-control inputStyle mb-3" >
                                <option value="volvo" className="option-bgimg" style={{ backgroundImage: `url(${Background})` }}>History</option>
                                <option value="saab">English</option>
                                <option value="opel">Urdu</option>
                                <option value="audi">Hindi</option>
                            </select>
                        </span>

                        <label className="label">Add Description:</label>
                        <div className="input-group mb-3 description-text" style={{ marginTop: '12px' }}>
                            <textarea id="detail" style={{ resize: "none" }} className="form-control inputStyle" name="detail" rows="1" cols="50" required>
                            </textarea>
                        </div>
                        <Link to="/addbooks" className="btn btn-outline-danger pt-3 pb-3 mr-2" style={btnStyle}>
                            Submit
                        </Link>

                    </form>
                </div>
            </section>



        )
    }
}
