import React, { Component, lazy, Suspense, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { registerFeeds, getFeeds } from '../../redux/actions/feedActions';
import { Link } from 'react-router-dom';
import Model from './model';
import List from "../community/postList"
const AddPost = lazy(() => import('../community/addPost'));

class index extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        const { getFeeds } = this.props;
        getFeeds(0, 0);
    }

    submit(data) {
        this.props.registerFeeds(data);
    }

    renderCommunityLinks(TopicList) {
        if (TopicList && TopicList.length > 0)
            return TopicList.map(i => {
                return <li key={i._id} className="side-item side-item-hotel">
                    <Link to="/" href="dangerouslySetInnerHTML" className="side-link">
                        <img className="side-img" src={i.image} alt="topic" />
                        <span className="side-text">{i.name}</span>
                    </Link>
                </li>
            })
    }

    renderCoursesLinks(TopicList) {
        if (TopicList && TopicList.length > 0)
            return TopicList.slice(0, 2).map(i => {
                return <li key={i._id} className="right-side-item">
                    <div alt="topic" className="member-img">W</div>
                    <span className="right-side-text">Focal Person</span>
                </li>
            })
    }

    render() {
        const { auth, profile, Feed, TopicList } = this.props;

        return <div className="groups_page">
<div className="content">
            <Model />
            <nav className="sidebar ">
                <div style={{ position: `sticky`, top: `100px` }}>
                    <h2 className="page-heading">Freelancer of Upwork Fiverr and PeoplePerHour</h2>
                    <h6 onClick={() => window.innerWidth < 1000 ? this.refs.dropdown.classList.toggle("display_on_short") : ""} className={"sidebar-heading"}>Communities You're In</h6>
                    <div className={`hide_on_click ${window.innerWidth < 1000 ? "display_on_short" : ""}`} ref="dropdown">
                        <ul className="side-nav">
                            {this.renderCommunityLinks(TopicList)}
                        </ul>
                        <div className="side-more-images">
                            <div alt="topic" className="side-more-img" style={{ backgroundColor: "blue" }}>&ensp;</div>
                            <div alt="topic" className="side-more-img" style={{ backgroundColor: "green" }}>&ensp;</div>
                            <div alt="topic" className="side-more-img last_listitem" style={{ backgroundColor: "red" }}>+20</div>
                            <Link to="/groups" className="side-more-text" style={{ textDecoration: "none" }}>See More</Link>
                        </div>
                    </div>
                    {/*////////////////////////////// code for mobile view start with auth //////////////////////// */}
                    {window.innerWidth < 1000 ? <div style={{ width: `100%` }}>
                        <div className="left-side-border">
                            <h2 className="sidebar-heading" onClick={() => window.innerWidth < 1000 ? this.refs.courses.classList.toggle("display_on_short") : ""}>People That Are Following</h2>
                            <ul ref="courses" className={`right-side-list ${window.innerWidth < 1000 ? "display_on_short" : ""}`}>
                                {this.renderCoursesLinks(TopicList)}
                                <li><div className="side-more-images">
                                    <div alt="topic" className="side-more-img" style={{ backgroundColor: "blue" }}>&ensp;</div>
                                    <div alt="topic" className="side-more-img" style={{ backgroundColor: "green" }}>&ensp;</div>
                                    <div alt="topic" className="side-more-img last_listitem" style={{ backgroundColor: "red" }}>+20</div>
                                    <Link to="/groups" className="side-more-text" style={{ textDecoration: "none" }}>See More</Link>
                                </div></li>
                            </ul>

                        </div>
                        {auth && profile ?
                            <span>
                                {window.innerWidth < 1000 ?
                                    <div className="right-side-border">
                                        <h6 onClick={() => window.innerWidth < 1000 ? this.refs.recommend.classList.toggle("display_on_short") : ""} className={"sidebar-heading"}>Recommended to You</h6>
                                        <div className={`hide_on_click ${window.innerWidth < 1000 ? "display_on_short" : ""}`} ref="recommend">
                                            <ul className="side-nav">
                                                {this.renderCommunityLinks(TopicList)}
                                            </ul>
                                        </div>
                                    </div> : ""}
                            </span>
                            : <div>
                                {window.innerWidth < 1000 ? <div style={{ width: `100%` }}>
                                    <div className="right-side-border">
                                        <h2 className="sidebar-heading" onClick={() => window.innerWidth < 1000 ? this.refs.about.classList.toggle("display_on_short") : ""}>About Community</h2>
                                        <h4 ref="about" className="about-text">Hire someone or Get hired Post your Work and Assignments.</h4>
                                    </div>
                                </div> : ""}
                            </div>}
                    </div> : ""}
                </div>
                {/* ////////////////////// code for mobile view end with auth  /////////////////////*/}
            </nav>
            <div className="center1">
                <div className="card" style={{ width: "100%", marginBottom: "2rem" }}>
                    <img className="card-img-top" src={"https://specials-images.forbesimg.com/imageserve/5d9182dc6c7c8f000990b672/960x0.jpg?fit=scale"} style={{ height: "40vh" }} alt="Card image cap" />
                    <div style={{flex: "1 1 flex", display: "flex", minHeight: "1px", padding: "1.25rem 0"}}>
                        <button type="button" style={{  marginLeft: "2rem" }} className="btn btn-outline-danger mr-3"><i className=" fa fa-check-square"></i> Following </button>
                        {auth && profile ?
                            <a href="#popup" type="button" className="btn btn-outline-danger mr-3"><i className=" fa fa-plus"></i> Suggest Topic </a>
                            :
                            <button className="btn btn-outline-danger mr-3" id="dropdown-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" type="button" style={{ width: "20%" }} ><i className=" fa fa-ellipsis-h "></i> More </button>
                        }
                        <div className="dropdown-menu" aria-labelledby="dropdown-menu">
                            <button className="dropdown-item" style={{ color: "#000" }} type="button">Unfollow Group</button>
                            <button className="dropdown-item" style={{ color: "#000" }} type="button">Report Group</button>
                            <a href="#popup" className="dropdown-item" type="button">Suggest Topic</a>
                        </div>
                    </div>
                </div>
                {/*?///////////////////////////// else info only //////////////////////////*/}
                {auth && profile ? "" :
                    <div className="groupinfo">
                        <h4 >About this group</h4>
                        <hr />
                        <div className="groupinfo-heading">Name of Group</div>
                        <div className="groupinfo-text">Freelancer of Upwork Fiverr and PeoplePerHour</div>
                        <div className="groupinfo-heading">Description</div>
                        <div className="groupinfo-text">Hire Someone or Get hired Post your Work and Assignments</div>
                        <div className="groupinfo-heading">Category</div>
                        <div className="groupinfo-text">IT &amp; Technology</div>
                        <div className="groupinfo-heading">Group Create On</div>
                        <div className="groupinfo-text">12/JUN/2020</div>
                    </div>
                }
                {/* /////////////////// if auth add post and list //////////////////// */}

                <div> {auth && profile && <Suspense fallback={<Fragment />}><AddPost profile={profile} list={TopicList} submit={this.submit} /></Suspense>}</div>
                <List list={[1, 2, 3, 4]} />
            </div>
            {/* /////////////////// normal view start  /////////////////////////////////////// */}
            {window.innerWidth > 1000 ? <div className="right-side" style={{ overflow: `visible` }}>
                <div className="right-side-border" ref="upper_container" style={{ position: `sticky`, top: `103.36805725097656px` }}>
                    <h2 className="sidebar-heading member-margin">Members</h2>
                    <ul className="right-side-list">
                        {this.renderCoursesLinks(TopicList)}
                    </ul>
                    <div className="side-more-images" style={{ paddingTop: ".5rem", paddingBottom: ".5rem", backgroundColor: "#fff" }}>
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "blue" }}>&ensp;</div>
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "green" }}>&ensp;</div>
                        <div alt="topic" className="side-more-img last_listitem" style={{ backgroundColor: "red" }}>+20</div>
                        <Link to="/courses" className="side-more-text" style={{ textDecoration: "none" }}>See More</Link>
                    </div>
                </div>
                {/* ////////////////////// Extra div used to avoide error  /////////////////////*/}

                {/* ///////////////////// if auth  displays recommended //////////////// */}
                {auth && profile ?
                    <div style={{ position: `sticky`, top: `298.38543701171875px` }}> {window.innerWidth > 1000 ? <div className="left-side about-section">
                        <div className="left-side-border">
                            <h6 className="sidebar-heading" style={{ padding: "12px 60px" }} >Recommended to You</h6>
                            <ul className="side-nav">
                                {this.renderCommunityLinks(TopicList)}
                            </ul>
                        </div>
                    </div>
                        : ""}</div>
                    // {/* ////////////////// else about box //////////////////////////////// */}
                    : <div style={{ position: `sticky`, top: `298.38543701171875px` }}>
                        {window.innerWidth > 1000 ? <div className="left-side about-section">
                            <div className="left-side-border">
                                <h2 className="sidebar-heading">About Community</h2>
                                <h4 className="about-text">Hire someone or Get hired Post your Work and Assignments.</h4>
                            </div>
                        </div> : ""}
                    </div>
                }
            </div> : ""}
            {/* /////////////////// normal view end  /////////////////////////////////////// */}

        </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        Auth: state.Auth.auth,
        profile: state.Profile.data,
        Feed: state.Feed.data,
        isSuccess: state.Feed.isSuccess,
        isLoading: state.Feed.isLoading, // If you want to show a loader until feeds load
        RegLoad: state.RegFeed.isLoading,// REG FEED TO CONRTOL FEED LOADING ERROS ETC
        RegSuc: state.RegFeed.isSuccess,
        RegErr: state.RegFeed.isError,
        TopicList: state.Topics.data
    }
}

export default connect(mapStateToProps, { registerFeeds, getFeeds})(index);

