import React from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import InputComment from "./InputComment";
import { addComments } from '../../redux/actions/feedActions';
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const PostCard = (props) => {
  const { item, addComments, profile } = props;
  const [list, setList] = useState([]), [tempId, setTid] = useState(1);

  useEffect(() => {
    setList(item.comments ? item.comments : []);
  }, [item, setList]);

  function renderList(list) {
    return list && list.length > 0 && list.map(i => {
      return <Comment key={i._id} name={i.postedBy && i.postedBy.name ? i.postedBy.name : ' '} replyList={i.replies} isReply={false}>
        {i.comment}
      </Comment>
    });
  }

  function handleComment(e, text) {
    var data = { feedId: item._id, comment: text, postedBy: profile._id };
    addComments(data);
    var tempList = list ? list : [];
    tempList.push({
      _id: tempId,
      postedBy: { image: profile.image, name: profile.name, _id: profile._id },
      replyList: [],
      comment: text
    });
    setTid(tempId + 1);
    setList(tempList);
  }

  return (
    <div className="post col-md-12">
      <div className="post-head">
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "1000px",
            backgroundColor: "#f9ca24",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/otherprofile" style={{ fontWeight: "700", color: "white", marginTop: "3px" }}>
            {item && item.postedBy && item.postedBy.name ? item.postedBy.name[0] : ""}
          </Link>
        </div>
        <div className="post-user-detail">
          <Link to="/otherprofile" className="post-name" style={{ display: `inline` }}>
            {item && item.postedBy ? item.postedBy.name : ""}
          </Link>
          <div class="align-items-center" style={{ display: "inline-flex" }}><div class="post-option"><span class="fa fa-caret-right post-head-icon"></span></div><div class="post-group-ref">{item && item.topicId ? item.topicId.name : ''}</div></div>
          <div className="post-sub-name">
            {item && item.posted ? item.posted : ''}
          </div>
        </div>
        <div className="post-buttons ml-auto">
          <div className="post-option">
            <span className="fa fa-share post-head-icon"></span>
          </div>
          <div className="post-option">
            <span className="fa fa-ellipsis-h post-head-icon"></span>
          </div>
        </div>
      </div>
      <div className="post-body">
        {item && item.feed && <p className="post-body-detail">{item.feed}</p>}
        {item && item.url && <img src={item.url} alt="post" className="post-body-img" />}
      </div>
      <div className="post-footer">
        <h6 className="post-icons">
          {" "}
          <span className="fa fa-check-square-o post-icon"></span>
          <span className="post-icon-text">Approve</span>
        </h6>
        <a href="#comments" style={{ textDecoration: `none`, color: `#555` }} className="post-icons" onClick={e => props.handleFeed(e, item._id)}>
          {" "}
          <span className="fa fa-comments post-icon"></span>
          <span className="post-icon-text">Comment</span>
        </a>
        <h6 className="post-icons">
          {" "}
          <span className="fa fa-share-square post-icon"></span>
          <span className="post-icon-text">Share</span>
        </h6>
      </div>
      <div className="comment_section">
        <div className="comments_wrapper">
          {renderList(list)}
        </div>
        <InputComment placeholder="Write a Comment" onhandleComment={handleComment} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.Profile.data
  }
}

export default connect(mapStateToProps, { addComments })(PostCard);