import React, { Component } from 'react';
import { RegisterUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const heading = { fontSize: '28px', fontWeight: '500', color: '#2f3542', textAlign: 'center', fontFamily: `''Montserrat', sans-serif`, width: '100%' };
const inputStyle = { padding: '24px 24px 24px 24px', borderLeft: "hidden", overflow: "hidden", outline: 'none !important', fontFamily: `''Montserrat', sans-serif`, boxShadow: 'none !important', fontSize: '16px' };
const btnStyle = { borderRadius: '20px', marginTop: '16px' };
const gStyle = { color: '#c0392b', marginRight: '12px', fontSize: '24px' };

class index extends Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    state = { name: '', email: '', password: '' };

    handleInput(event) { this.setState({ [event.target.name]: event.target.value }); }

    handleSubmit(event) {
        const { name, email, password } = this.state;
        const { RegisterUser } = this.props;
        event.preventDefault();
        if (name && email && password) {
            var data = { name: name, email: email, password: password };
            RegisterUser(data);
        }
    }

    render() {
        const { name, email, password } = this.state;
        const { err, isError, isLoading } = this.props;
        return (
            <form className="col-lg-5 col-md-7 col-sm-9 col-11" onSubmit={(e) => this.handleSubmit(e)}>
                <h3 style={heading}>Get started absolutely free</h3>
                
                <div className="input-group mt-5">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{padding: "0 15px 0 15px", backgroundColor: "transparent", borderRight: "none" }}><span className="fa fa-user"></span></span>
                    </div>
                    <input type="text" className="form-control" style={inputStyle} name='name' value={name}
                        placeholder="Your Name" onChange={this.handleInput} required />
                </div>

                <div className="input-group mt-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{padding: "0 15px 0 15px", backgroundColor: "transparent", borderRight: "none" }}><span className="fa fa-envelope"></span></span>
                    </div>
                    <input type="text" className="form-control" style={inputStyle} name='email' value={email}
                        placeholder="Email Address" onChange={this.handleInput} required />
                </div>

                <div className="input-group mt-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{padding: "0 15px 0 15px", backgroundColor: "transparent", borderRight: "none" }}><span className="fa fa-lock"></span></span>
                    </div>
                    <input type="password" className="form-control" name='password' value={password} style={inputStyle}
                        onChange={this.handleInput} placeholder="Enter Password" required />
                </div>


                {isError && <h6 style={{ width: '100%', textAlign: 'center', marginTop: '16px', color: 'red', fontSize: '12px !important' }}>
                    {err}
                </h6>}
                <button className="btn btn-block btn-register" style={btnStyle} type='submit'>
                    {!isLoading && `Get started`}
                    {isLoading && <div className="spinner-border ml-1" style={{ width: '1em', height: '1em' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                </button>
                <p style={{ width: '100%', textAlign: 'center', marginTop: '16px', color: 'grey', fontSize: '12px !important' }}>Do You have an account?
                 <Link className="link-blue" to='/login'>  Sign In</Link></p>
                <div className="col-12 p-0 d-flex flex-row align-items-center" style={{ marginTop: '24px' }}>
                    <div className="col-5 p-0" style={{ borderTop: '1px solid #ced6e0' }}></div>
                    <h6 className="col-2 p-0" style={{ textAlign: 'center', fontWeight: '600', color: '#747d8c' }}>OR</h6>
                    <div className="col-5 p-0" style={{ borderTop: '1px solid #ced6e0' }}></div>
                </div>
                <button type="button" className="btn btn-block p-2 d-flex align-items-center justify-content-center btn-google" style={btnStyle}>
                    <span className="fa fa-google" style={gStyle}></span>
                    Sign up with google
                </button>

            </form>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.Register);
    return {
        isError: state.Register.isError,
        isLoading: state.Register.isLoading,
        err: state.Register.data
    }
}
export default connect(mapStateToProps, { RegisterUser })(index);