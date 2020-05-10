import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const inputStyle = { padding: '24px', outline: 'none !important', fontFamily: `''Montserrat', sans-serif`, boxShadow: 'none !important', fontSize: '16px', marginTop: '12px' };
const btnStyle = { borderRadius: '10px', marginTop: '16px', width: '49%'};


export default class index extends Component {

    render() {
        return (

            <section class="popup" id="popup">
                <div class="popup__box">
        <span className={"fa fa-close"} style={{float:"right", fontSize: "1.5rem", color: "red", marginTop: "3rem", marginRight: "3rem"}}></span>
        <h1></h1>
                    <form className="col-lg-12 col-md-12 col-12 login-card">
        
                        <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                            <input type="number" className="form-control inputStyle" name='email'
                                placeholder="Credit Card Number" required />
                        </div>
                        <div className="input-group mb-3" style={{ marginTop: '12px' }}>
                            <input type="text" className="form-control inputStyle" name='password'
                                placeholder="Card Holder" required />
                        </div>
                        <div className={"credit-info"}>

                        <div class="dropdown">
                        <input type="month" placeholder="Choose date and time" className="inputStyle form-control btn-outline-danger"  name='date'/>
                        </div>
                        <div className="input-group cvc">
                            <input type="number" className="form-control inputStyle" name='password'
                                placeholder="CVC" required />
                        </div>
                        </div>
                        <div className={"buttons"}>
                        <button className="btn btn-outline-danger pt-3 pb-3" type='submit' style={btnStyle}>
                            CheckOut
                        </button>
                        </div>
                    </form>
                </div>
            </section>



        )
    }
}
