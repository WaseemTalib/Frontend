import React, { Component, lazy, Suspense, Fragment } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { registerFeeds, getFeeds, getFeedsAuth } from '../../redux/actions/feedActions';
import { Link } from 'react-router-dom';
const List = lazy(() => import('../community/postList'));
const AddPost = lazy(() => import('../community/addPost'));

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
        const { auth, profile, Feed, TopicList } = this.props;

        return <div className="content">

            <nav className="sidebar ">
                <h6 style={{ width: '100%', backgroundColor: '#f4f2f2', textAlign: 'center', fontWeight: 'bold', color: '#e74c3c', marginBottom: '0px' }} className="p-2"><span className="fa fa-feed mr-2"></span> Communities</h6>
                <ul className="side-nav">
                    {this.renderCommunityLinks(TopicList)}
                </ul>
                <div className="side-more-images">
                    <div alt="topic" className="side-more-img" style={{backgroundColor: "blue"}}>&ensp;</div>
                    <div alt="topic" className="side-more-img" style={{backgroundColor: "green"}}>&ensp;</div>
                    <div alt="topic" className="side-more-img" style={{backgroundColor: "red"}}>+20</div>
                    <Link to="/morecommunities" className="side-more-text" style={{textDecoration:"none"}}>See More +</Link>
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
            </nav>
            <div className="center1">
                {auth && profile && <Suspense fallback={<Fragment />}><AddPost profile={profile} list={TopicList} submit={this.submit} /></Suspense>}
                <Suspense fallback={<Fragment />}>
                    <List list={Feed} />
                </Suspense>
            </div>
            <div className="right-side">
                <div className="right-side-border">
                    <h2 className="right-side-heading-h">Recommended Courses</h2>
                    <ul className="right-side-list">
                        {this.renderCoursesLinks(TopicList)}
                    </ul>
                </div>
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

export default connect(mapStateToProps, { registerFeeds, getFeeds, getFeedsAuth })(index);

