import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Background from '../../../assets/img_avatar.png'
import './style.css'

const btnStyle = { borderRadius: '10px', marginTop: '16px', width: '99%' };


export default class index extends Component {

    render() {
        return (

            <section class="popup" id="popup">
                <div class="popup__box">
                    <div class="popup__right">
                        <h3 style={{ fontSize: "22px", color: "#fff" }}>Create E-Books</h3>
                        <a href="#" class="popup__icon"> <i class="fa fa-times popup__close"></i></a>
                    </div>
                    <form className="col-lg-12 col-md-12 col-12 login-card">

                        <label className="label">Title of Book:</label>
                        <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                            <input type="text" className="form-control inputStyle" name='email'
                                required />
                        </div>
                        <label className="label">Choose Category:</label>
                        <select id="cars" className="form-control inputStyle mb-3" >
                            <option value="volvo" className="option-bgimg" style={{backgroundImage: `url(${Background})`}}>History</option>
                            <option value="saab">Technology</option>
                            <option value="opel">Religious</option>
                            <option value="audi">Health</option>
                        </select>

                        <label className="label">Add Description:</label>
                        <div className="input-group mb-3 description-text" style={{marginTop: '12px' }}>
                            <textarea id="detail" style={{resize: "none"}} className="form-control inputStyle" name="detail" rows="1" cols="50" required>
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
