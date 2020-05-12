import React, { Component, lazy, Suspense, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { registerFeeds, getFeeds, getFeedsAuth } from '../../redux/actions/feedActions';
import { Link } from 'react-router-dom';
import List from './courseList';
import Model from './model'
class index extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        const { profile, getFeeds, getFeedsAuth } = this.props;
        var data;
        if (profile && profile._id) {
            data = { limit: 0, _id: profile._id };
            getFeedsAuth(data, 0);
        } else {
            data = { limit: 0 };
            getFeeds(data, 0);
        }
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
                    <Link to="" className="right-side-link">
                        <img src={i.image} alt="topic" className="right-side-img" />
                        <span className="right-side-text">Dummy Course</span>
                    </Link>
                </li>
            })
    }

    render() {
        const { TopicList } = this.props;

        return <div className="content">

            <nav className="sidebar ">
                <a href="#popup" className="left-side-popup-button">+ Suggest Community</a>
                <h6 onClick={() => window.innerWidth < 1000 ? this.refs.dropdown.classList.toggle("display_on_short") : ""} className={"sidebar-heading"} style={{fontSize: ".9rem"}}>Recommended Courses</h6>
                <div className={`hide_on_click ${window.innerWidth < 1000 ? "display_on_short" : ""}`} ref="dropdown">
                    <ul className="side-nav">
                        {this.renderCoursesLinks(TopicList)}
                    </ul>
                    <div className="side-more-images">
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "blue" }}>&ensp;</div>
                        <div alt="topic" className="side-more-img" style={{ backgroundColor: "green" }}>&ensp;</div>
                        <div alt="topic" className="side-more-img last_listitem" style={{ backgroundColor: "red" }}>+20</div>
                        <Link to="/morecommunities" className="side-more-text" style={{ textDecoration: "none" }}>See More</Link>
                    </div>
                    <hr className="side-nav-hr" />
                    <div className="side-social">
                        <p className="side-list-heading">Follow us on</p>
                        <ul className="side-social-list">
                            <li className="side-social-item"><a className="side-social-link" href="#">Instagram</a></li>
                            <li className="side-social-item"><a className="side-social-link" href="#"> Twitter</a></li>
                            <li className="side-social-item"><a className="side-social-link" href="#">Facebook</a></li>
                        </ul>
                        <p className="side-list-heading">Download our App</p>
                        <ul className="side-social-list">
                            <li className="side-social-item"><a className="side-social-link" href="#"> App Store</a></li>
                            <li className="side-social-item"><a className="side-social-link" href="#"> Google Play Store</a></li>
                        </ul>
                    </div>
                    <Model></Model>
                </div>
                {window.innerWidth < 1000 ? <div style={{ width: `100%` }}>
                    <div className="right-side-border">
                        <h2 className="right-side-heading-h" onClick={() => window.innerWidth < 1000 ? this.refs.courses.classList.toggle("display_on_short") : ""}><span className="fa fa-feed mr-2"></span>Communities</h2>
                        <ul ref="courses" className={`right-side-list ${window.innerWidth < 1000 ? "display_on_short" : ""}`}>
                            {this.renderCommunityLinks(TopicList)}
                        </ul>
                    </div>
                </div> : ""}
            </nav>
            <div className="center1">
                <List />
            </div>
            {window.innerWidth > 1000 ? <div className="right-side">
                <div className="right-side-border">
                    <h2 className="right-side-heading-h"><span className="fa fa-feed mr-2"></span>Communities</h2>
                    <ul className="right-side-list">
                        {this.renderCommunityLinks(TopicList)}
                    </ul>
                </div>
            </div> : ""}
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

export default connect(mapStateToProps, { registerFeeds, getFeeds, getFeedsAuth })(index);

