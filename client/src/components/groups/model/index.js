import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const btnStyle = { borderRadius: '10px', marginTop: '16px', width: '99%' };


export default class index extends Component {

    render() {
        return (

            <section className="popup" id="popup">
                <div className="popup__box">
                    <div className="popup__right">
                    <h3 className="modeltitle">Suggest Community</h3>
                        <a href="#" className="popup__icon"> <i className="fa fa-times popup__close"></i></a>
                    </div>

                    <form className="col-lg-12 col-md-12 col-12 login-card">

                        <label className="label">Suggest Name:</label>
                        <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                            <input type="text" className="form-control inputStyle" name='email'
                                 required />
                        </div>
                        <label className="label">Add Description:</label>
                        <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                            <textarea id="detail" className="form-control inputStyle" name="detail" rows="4" cols="50"  required>
                            </textarea>
                        </div>
                        <Link to="/groups" className="btn btn-outline-danger pt-3 pb-3 mr-2" style={btnStyle}>
                            Submit
                        </Link>

                    </form>
                </div>
            </section>



        )
    }
}
