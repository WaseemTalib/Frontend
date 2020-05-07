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
                <img className={"top-img"} src={"data:image/jpeg;base64,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"} alt={"credit card"} />
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
                        <a href="#tours" className="btn btn-outline-danger pt-3 pb-3 mr-2" style={btnStyle}>
                            Cencel
                        </a>
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
