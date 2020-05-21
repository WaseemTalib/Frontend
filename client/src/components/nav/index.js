import React, { Component } from "react";
import "./style.css";
import Avat from "../../assets/img_avatar.png";
import { logOut } from "../../redux/actions/userActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Notifications from "./Notifications";

const logoName = {
  fontSize: "18px",
  textDecoration: "none",
  fontWeight: "bold",
  color: "#c0392b",
  fontFamily: `'Montserrat', sans-serif`,
};

const logoNameMob = {
  fontSize: "20px",
  textDecoration: "none",
  fontWeight: "bold",
  color: "#c0392b",
  fontFamily: `'Montserrat', sans-serif`,
};

const navbar = { position: `sticky`, top: 0, zIndex: 1000 };

class index extends Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  state = {
    width: null,
    height: null,
    isActive: false,
    notification: false
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("click", (e) => {
      if (e.target.id !== "notification") this.setState({ notification: false })
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  renderActiveLink() {
    var { active, profile } = this.props;
    return (
      <React.Fragment>
        <Link
          to="/community"
          className={active === 1 ? "link-nav-active" : "link-nav"}
        >
          <span className="fa fa-users" style={{ marginRight: "12px" }}></span>
          My Community
        </Link>
        <Link
          to="/courses"
          className={active === 2 ? "link-nav-active" : "link-nav"}
        >
          <span className="fa fa-book" style={{ marginRight: "12px" }}></span>
          Courses
        </Link>
        <Link
          to="/ebooks"
          className={active === 3 ? "link-nav-active" : "link-nav"}
        >
          <span
            className="fa fa-gg-circle"
            style={{ marginRight: "12px" }}
          ></span>
          E-Books
        </Link>
        <Link
          to="/mypurchases"
          className={active === 4 ? "link-nav-active" : "link-nav"}
        >
          <span
            className="fa fa-credit-card"
            style={{ marginRight: "12px" }}
          ></span>
          My Purchases
        </Link>
      </React.Fragment>
    );
  }

  renderTabActiveLink() {
    var { active } = this.props;
    return (
      <React.Fragment>
        <div className="d-flex flex-row justify-content-between pt-3 pb-3 pl-5 pr-5 col-12">
          <Link
            to="/community"
            className={active === 1 ? "link-nav-active" : "link-nav"}
          >
            <span
              className="fa fa-users"
              style={{ marginRight: "12px" }}
            ></span>
            My Community
          </Link>
          <Link
            to="/courses"
            className={active === 2 ? "link-nav-active" : "link-nav"}
          >
            <span className="fa fa-book" style={{ marginRight: "12px" }}></span>
            Courses
          </Link>
          <Link
            to="/ebooks"
            className={active === 3 ? "link-nav-active" : "link-nav"}
          >
            <span
              className="fa fa-gg-circle"
              style={{ marginRight: "12px" }}
            ></span>
            E-Books
          </Link>
          <Link
            to="/mypurchases"
            className={active === 4 ? "link-nav-active" : "link-nav"}
          >
            <span
              className="fa fa-credit-card"
              style={{ marginRight: "12px" }}
            ></span>
            My Purchases
          </Link>
        </div>
      </React.Fragment>
    );
  }

  renderMobActiveLink() {
    var { active } = this.props;
    return (
      <React.Fragment>
        <div className="d-flex flex-column align-items-center justify-content-center col-12">
          <Link
            to="/community"
            className={
              active === 1
                ? "link-nav-active d-flex flex-column p-2"
                : "link-nav d-flex flex-column p-2"
            }
          >
            <span className="fa fa-users align-self-center p-1"></span>My
            Community
          </Link>
          <Link
            to="/courses"
            className={
              active === 2
                ? "link-nav-active d-flex flex-column p-2"
                : "link-nav d-flex flex-column p-2"
            }
          >
            <span className="fa fa-book align-self-center p-1"></span>Courses
          </Link>
          <Link
            to="/ebooks"
            className={
              active === 3
                ? "link-nav-active d-flex flex-column p-2"
                : "link-nav d-flex flex-column p-2"
            }
          >
            <span className="fa fa-gg-circle align-self-center p-1"></span>
            E-Books
          </Link>
          <Link
            to="/mypurchases"
            className={
              active === 4
                ? "link-nav-active d-flex flex-column p-2"
                : "link-nav d-flex flex-column p-2"
            }
          >
            <span className="fa fa-credit-card align-self-center p-1"></span>My
            Purchases
          </Link>
        </div>
      </React.Fragment>
    );
  }

  renderMobileNav() {
    const { isActive } = this.state;
    const { Auth, isError, profile } = this.props;
    return (
      <div className="navbar d-flex flex-column col-12" style={navbar}>
        <div className="d-flex flex-row justify-content-between align-items-center col-12 p-0">
          <Link to="/" style={logoNameMob}>
            GENIVERSITY
          </Link>
          <button
            className="btn btnHam"
            onClick={(e) => this.setState({ isActive: !isActive })}
          >
            <span className="fa fa-bars"></span>
          </button>
        </div>
        {isActive && (
          <div className="input-group col-lg-3 col-12 p-3 p-lg-3 p-md-3 p-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Geniversity"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-danger bg-danger">
                <span
                  className="fa fa-search"
                  style={{ color: "white" }}
                ></span>
              </button>
            </div>
          </div>
        )}
        {isActive && this.renderMobActiveLink()}
        {isActive && <div className="m-2"></div>}
        {isActive && (
          <React.Fragment>
            {!Auth || isError || !profile ? (
              <Link className="btn-login-nav col-lg-1 col-12 p-1" to="login">
                Login
              </Link>
            ) : (
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img
                    src={profile.image ? profile.img : Avat}
                    alt="profile"
                    className="dropdown-toggle"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "8px",
                      borderRadius: "1000px",
                    }}
                  />
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <Link
                      to="/profile"
                      style={{ fontWeight: `bold`, position: `relative` }}
                      className="dropdown-item"
                    >
                      <div className="icon_message">{profile.name ? profile.name[0] : ''}</div>
                      {profile.name}
                      <i
                        className="fa fa-chevron-right"
                        style={{
                          position: `absolute`,
                          bottom: "10px",
                          right: "20px",
                        }}
                        aria-hidden="true"
                      ></i>
                    </Link>
                    <hr />
                    <Link to="/watchcourses" className="dropdown-item">
                      My Courses
                  </Link>
                    <Link to="/readebook" className="dropdown-item">
                      My E-Books
                  </Link>
                    <Link to="/morecommunities" className="dropdown-item">
                      Communities
                  </Link>
                    <Link to="/credits" className="dropdown-item">
                      Gineversity Credits
                  </Link>
                    <Link to="/profilesetting" className="dropdown-item">
                      Settings
                  </Link>
                    <Link to="/inbox" className="dropdown-item">
                      Inbox
                  </Link>
                    <button
                      className="dropdown-item"
                      onClick={(e) => this.props.logOut()}
                    >
                      Logout
                  </button>
                    <hr />
                    <Link to="/" className="dropdown-item">
                      About Us
                  </Link>
                    <Link to="/" className="dropdown-item">
                      Contact Us
                  </Link>
                    <Link to="/" className="dropdown-item">
                      Terms &#38; Conditions
                  </Link>
                    <Link to="/" className="dropdown-item">
                      Privacy Policy
                  </Link>
                  </div>
                  {isActive && (
                    <div>
                      <i onClick={() => this.setState({ notification: !this.state.notification })} className="fa fa-bell link-nav" id="notification" style={{ fontSize: "20px", margin: `0 20px` }}></i>
                    </div>
                  )}
                </div>
              )}
          </React.Fragment>
        )}
        {this.state.notification ? <Notifications /> : ""}
      </div>
    );
  }
  renderTabletNav() {
    const { isActive } = this.state;
    const { Auth, isError, profile } = this.props;
    return (
      <div className="navbar d-flex flex-column col-12" style={navbar}>
        <div className="d-flex flex-row justify-content-between align-items-center col-12">
          <Link to="/" style={logoNameMob}>
            GENIVERSITY
          </Link>
          <button
            className="btn btnHam"
            onClick={(e) => this.setState({ isActive: !isActive })}
          >
            <span className="fa fa-bars"></span>
          </button>
        </div>
        {isActive && (
          <div className="input-group col-lg-3 col-12 p-3 p-lg-3 p-md-3 p-sm-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Geniversity"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-danger bg-danger">
                <span
                  className="fa fa-search"
                  style={{ color: "white" }}
                ></span>
              </button>
            </div>
          </div>
        )}
        {isActive && this.renderTabActiveLink()}
        {isActive && <div className="m-2"></div>}
        {isActive && (
          <React.Fragment>
            {!Auth || isError || !profile ? (
              <Link className="btn-login-nav col-lg-1 col-12 p-1" to="login">
                Login
              </Link>
            ) : (
                <div className="col-12 d-flex flex-row justify-content-around align-items-center">
                  <img
                    src={profile.image ? profile.img : Avat}
                    alt="profile"
                    className="dropdown-toggle"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "8px",
                      borderRadius: "1000px",
                    }}
                  />
                  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <Link to="/profile" className="dropdown-item">
                      View Profile
                  </Link>
                    <Link
                      to="/profile"
                      style={{ fontWeight: `bold`, position: `relative` }}
                      className="dropdown-item"
                    >
                      <div className="icon_message">{profile.name ? profile.name[0] : ''}</div>
                      {profile.name}
                      <i
                        className="fa fa-chevron-right"
                        style={{
                          position: `absolute`,
                          bottom: "10px",
                          right: "20px",
                        }}
                        aria-hidden="true"
                      ></i>
                    </Link>
                    <hr />
                    <Link to="/watchcourses" className="dropdown-item">
                      My Courses
                  </Link>
                    <Link to="/readebook" className="dropdown-item">
                      My E-Books
                  </Link>
                    <Link to="/morecommunities" className="dropdown-item">
                      Communities
                  </Link>
                    <Link to="/credits" className="dropdown-item">
                      Gineversity Credits
                  </Link>
                    <Link to="/profilesetting" className="dropdown-item">
                      Settings
                  </Link>
                  <Link to="/inbox" className="dropdown-item">
                      Inbox
                  </Link>
                    <button
                      className="dropdown-item"
                      onClick={(e) => this.props.logOut()}
                    >
                      Logout
                  </button>
                    <hr />
                    <Link to="/" className="dropdown-item">
                      About Us
                  </Link>
                    <Link to="/" className="dropdown-item">
                      Contact Us
                  </Link>
                    <Link to="/" className="dropdown-item">
                      Terms &#38; Conditions
                  </Link>
                    <Link to="/" className="dropdown-item">
                      Privacy Policy
                  </Link>
                  </div>
                  {isActive && (
                      <i onClick={() => this.setState({ notification: !this.state.notification })} className="fa fa-bell link-nav" id="notification" style={{ fontSize: "20px" }}></i>
                  )}
                </div>
              )}
          </React.Fragment>
        )}
        {this.state.notification ? <Notifications /> : ""}
      </div>
    );
  }

  render() {
    const { width } = this.state;
    const { Auth, isError, profile } = this.props;
    if (width && width !== 0 && width >= 992)
      return (
        <div className="navbar d-flex flex-lg-row flex-column" style={navbar}>
          <Link to="/" style={logoName}>
            GENIVERSITY
          </Link>
          <div className="input-group col-lg-3 col-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search Geniversity"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-danger bg-danger">
                <span
                  className="fa fa-search"
                  style={{ color: "white" }}
                ></span>
              </button>
            </div>
          </div>
          {this.renderActiveLink()}
            <i onClick={() => this.setState({ notification: !this.state.notification })} className="fa fa-bell link-nav" id="notification" style={{ fontSize: "20px" }}></i>
          {!Auth || isError ? (
            <Link className="btn-login-nav col-lg-1 col-12 p-1" to="login">
              Login
            </Link>
          ) : (
              <div className="col-lg-1 col-12">
                <img
                  src={profile.image ? profile.img : Avat}
                  alt="profile"
                  className="dropdown-toggle dropleft"
                  id="dropdownMenu2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "8px",
                    borderRadius: "1000px",
                  }}
                />
                <div
                  className="dropdown-menu navbar_dropdown dropdown-menu-right"
                  style={{ width: `250px` }}
                  aria-labelledby="dropdownMenu2"
                >
                  <Link
                    to="/profile"
                    style={{ fontWeight: `bold`, position: `relative` }}
                    className="dropdown-item"
                  >
                    <div className="icon_message">H</div>
                    Hello World
                  <i
                      className="fa fa-chevron-right"
                      style={{
                        position: `absolute`,
                        bottom: "10px",
                        right: "20px",
                      }}
                      aria-hidden="true"
                    ></i>
                  </Link>
                  <hr />
                  <Link to="/watchcourses" className="dropdown-item">
                    My Courses
                </Link>
                  <Link to="/readebook" className="dropdown-item">
                    My E-Books
                </Link>
                  <Link to="/morecommunities" className="dropdown-item">
                    Communities
                </Link>
                  <Link to="/credits" className="dropdown-item">
                    Gineversity Credits
                </Link>
                  <Link to="/profilesetting" className="dropdown-item">
                    Settings
                </Link>
                <Link to="/inbox" className="dropdown-item">
                      Inbox
                  </Link>
                  <button
                    className="dropdown-item"
                    onClick={(e) => this.props.logOut()}
                  >
                    Logout
                </button>
                  <hr />
                  <Link to="/" className="dropdown-item">
                    About Us
                </Link>
                  <Link to="/" className="dropdown-item">
                    Contact Us
                </Link>
                  <Link to="/" className="dropdown-item">
                    Terms &#38; Conditions
                </Link>
                  <Link to="/" className="dropdown-item">
                    Privacy Policy
                </Link>
                </div>
              </div>
            )}
          {this.state.notification ? <Notifications /> : ""}
        </div>
      );
    else if (width && width !== 0 && width <= 600)
      return <React.Fragment>{this.renderMobileNav()}</React.Fragment>;
    else return <React.Fragment>{this.renderTabletNav()}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    Auth: state.Auth.auth,
    profile: state.Profile.data,
    isError: state.Profile.isError,
  };
};

export default connect(mapStateToProps, { logOut })(index);