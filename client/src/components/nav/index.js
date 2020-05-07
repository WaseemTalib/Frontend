import React, { Component } from 'react';
import './style.css';
import Avat from '../../assets/img_avatar.png';
import { logOut } from '../../redux/actions/userActions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const logoName = { fontSize: '18px', fontWeight: 'bold', color: '#c0392b', fontFamily: `'Montserrat', sans-serif` };
const logoNameMob = { fontSize: '20px', fontWeight: 'bold', color: '#c0392b', fontFamily: `'Montserrat', sans-serif` };
class index extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    state = { width: null, height: null, isActive: false };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    renderActiveLink() {
        var { active } = this.props;
        return (
            <React.Fragment>
                <Link to='/community' className={active === 1 ? 'link-nav-active' : 'link-nav'}><span className="fa fa-users" style={{ marginRight: '12px' }}></span>My Community</Link>
                <Link to='/courses' className={active === 2 ? 'link-nav-active' : 'link-nav'}><span className="fa fa-book" style={{ marginRight: '12px' }}></span>Courses</Link>
                <Link to='/ebooks' className={active === 3 ? 'link-nav-active' : 'link-nav'}><span className="fa fa-gg-circle" style={{ marginRight: '12px' }}></span>E-Books</Link>
                <Link to='/mypurchases' className={active === 4 ? 'link-nav-active' : 'link-nav'}><span className="fa fa-credit-card" style={{ marginRight: '12px' }}></span>My Purchases</Link>
            </React.Fragment>
        )
    }

    renderTabActiveLink() {
        var { active } = this.props;
        return (
            <React.Fragment>
                <div className='d-flex flex-row justify-content-between pt-3 pb-3 pl-5 pr-5 col-12'>
                <Link to='/community' className={active === 1 ? 'link-nav-active' : 'link-nav'}><span className="fa fa-users" style={{ marginRight: '12px' }}></span>My Community</Link>
                <Link to='/courses' className={active === 2 ? 'link-nav-active' : 'link-nav'}><span className="fa fa-book" style={{ marginRight: '12px' }}></span>Courses</Link>
                <Link to='/ebooks' className={active === 3 ? 'link-nav-active' : 'link-nav'}><span className="fa fa-gg-circle" style={{ marginRight: '12px' }}></span>E-Books</Link>
                <Link to='/mypurchases' className={active === 4 ? 'link-nav-active' : 'link-nav'}><span className="fa fa-credit-card" style={{ marginRight: '12px' }}></span>My Purchases</Link>
                </div>
            </React.Fragment>
        )
    }
    renderMobActiveLink() {
        var { active } = this.props;
        return (
            <React.Fragment>
                <div className='d-flex flex-column align-items-center justify-content-center col-12'>
                <Link to='/community' className={active === 1 ? 'link-nav-active d-flex flex-column p-2' : 'link-nav d-flex flex-column p-2'}><span className="fa fa-users align-self-center p-1"></span>My Community</Link>
                <Link to='/courses' className={active === 2 ? 'link-nav-active d-flex flex-column p-2' : 'link-nav d-flex flex-column p-2'}><span className="fa fa-book align-self-center p-1"></span>Courses</Link>
                <Link to='/ebooks' className={active === 3 ? 'link-nav-active d-flex flex-column p-2' : 'link-nav d-flex flex-column p-2'}><span className="fa fa-gg-circle align-self-center p-1"></span>E-Books</Link>
                <Link to='/mypurchases' className={active === 4 ? 'link-nav-active d-flex flex-column p-2' : 'link-nav d-flex flex-column p-2'}><span className="fa fa-credit-card align-self-center p-1"></span>My Purchases</Link>
            </div>
            </React.Fragment>
        )
    }

    renderMobileNav() {
        const { isActive } = this.state;
        const { Auth, isError, profile } = this.props;
        return <div className="navbar d-flex flex-column col-12 p-3">
            <div className="d-flex flex-row justify-content-between align-items-center col-12 p-3">
                <h6 style={logoNameMob}>GENIVERSITY</h6>
                <button className="btn btnHam" onClick={(e) => this.setState({ isActive: !isActive })}><span className="fa fa-bars"></span></button>
            </div>
            {isActive && <div className="input-group col-lg-3 col-12 p-3">
                <input type="text" className="form-control" placeholder="Search Geniversity" />
                <div className="input-group-append">
                    <button className="btn btn-outline-danger bg-danger" type="button"><span className="fa fa-search" style={{ color: 'white' }}></span></button>
                </div>
            </div>}
            {isActive && this.renderMobActiveLink()}
            {isActive && <div className="m-2"></div>}
            {isActive && <React.Fragment>{(!Auth || isError || !profile) ? <Link className="btn-login-nav col-lg-1 col-12 p-1" to='login'>Login</Link> :
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <img src={profile.image ? profile.img : Avat} alt="profile" className="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{ width: '30px', height: '30px', marginRight: '8px', borderRadius: '1000px' }} />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">View Profile</button>
                        <button className="dropdown-item" type="button" onClick={(e) => this.props.logOut()}>Logout</button>
                    </div>
            {isActive && <div className="m-2"></div>}
            {isActive && <span className="fa fa-bell link-nav p-3" style={{ fontSize: '20px' }}></span>}
                </div>}</React.Fragment>}
        </div>
    }
    renderTabletNav() {
        const { isActive } = this.state;
        const { Auth, isError, profile } = this.props;
        return <div className="navbar d-flex flex-column col-12 p-3">
            <div className="d-flex flex-row justify-content-between align-items-center col-12 p-3">
                <h6 style={logoNameMob}>GENIVERSITY</h6>
                <button className="btn btnHam" onClick={(e) => this.setState({ isActive: !isActive })}><span className="fa fa-bars"></span></button>
            </div>
            {isActive && <div className="input-group col-lg-3 col-12 p-3">
                <input type="text" className="form-control" placeholder="Search Geniversity" />
                <div className="input-group-append">
                    <button className="btn btn-outline-danger bg-danger" type="button"><span className="fa fa-search" style={{ color: 'white' }}></span></button>
                </div>
            </div>}
            {isActive && this.renderTabActiveLink()}
            {isActive && <div className="m-2"></div>}
            {isActive && <React.Fragment>{(!Auth || isError || !profile) ? <Link className="btn-login-nav col-lg-1 col-12 p-1" to='login'>Login</Link> :
                <div className="col-12 d-flex flex-row justify-content-center align-items-center">
                    <img src={profile.image ? profile.img : Avat} alt="profile" className="dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                        style={{ width: '30px', height: '30px', marginRight: '8px', borderRadius: '1000px' }} />
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button">View Profile</button>
                        <button className="dropdown-item" type="button" onClick={(e) => this.props.logOut()}>Logout</button>
                    </div>
                    {isActive && <div className="m-2"></div>}
                    {isActive && <span className="fa fa-bell link-nav p-3" style={{ fontSize: '20px' }}></span>}
                </div>}</React.Fragment>}
        </div>
    }

    render() {
        const { width } = this.state;
        const { Auth, isError, profile } = this.props;
        if (width && width !== 0 && width >= 992)
            return (
                <div className="navbar d-flex flex-lg-row flex-column col-12 p-4">
                    <h6 style={logoName}>GENIVERSITY</h6>
                    <div className="input-group col-lg-3 col-12">
                        <input type="text" className="form-control" placeholder="Search Geniversity" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-danger bg-danger" type="button"><span className="fa fa-search" style={{ color: 'white' }}></span></button>
                        </div>
                    </div>
                    {this.renderActiveLink()}
                    <span className="fa fa-bell link-nav" style={{ fontSize: '20px' }}></span>
                    {(!Auth || isError) ? <Link className="btn-login-nav col-lg-1 col-12 p-1" to='login'>Login</Link> :
                        <div className="col-lg-1 col-12">
                            <img src={profile.image ? profile.img : Avat} alt="profile" className="dropdown-toggle dropleft" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                style={{ width: '40px', height: '40px', marginRight: '8px', borderRadius: '1000px' }} />
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">View Profile</button>
                                <button className="dropdown-item" type="button" onClick={(e) => this.props.logOut()}>Logout</button>
                            </div>
                        </div>}
                </div>
            )
        else if (width && width !== 0 && width <= 600)  return <React.Fragment>{this.renderMobileNav()}</React.Fragment>
        else return <React.Fragment>{this.renderTabletNav()}</React.Fragment>
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        isError: state.Profile.isError
    }
}

export default connect(mapStateToProps, { logOut })(index);