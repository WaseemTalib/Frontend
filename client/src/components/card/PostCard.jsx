import React from "react";

const PostCard = (item) => {
  return (
    <div key={item._id} className="post col-12">
      <div className="post-head">
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "1000px",
            backgroundColor: "#f9ca24",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4 style={{ fontWeight: "700", color: "white", marginTop: "3px" }}>
            {item.postedBy && item.postedBy.name ? item.postedBy.name[0] : ""}
          </h4>
        </div>
        <div className="post-user-detail">
          <div className="post-name">
            {item.postedBy ? item.postedBy.name : ""}
          </div>
          <div className="post-sub-name">
            {item.topicId ? item.topicId.name : ""}
          </div>
        </div>
        <div className="post-buttons">
          <div className="post-option">
            <span className="fa fa-share post-head-icon"></span>
          </div>
          <div className="post-option">
            <span className="fa fa-ellipsis-h post-head-icon"></span>
          </div>
        </div>
      </div>
      <div className="post-body">
        {item.feed && <p className="post-body-detail">{item.feed}</p>}
        {item.url && (
          <img src={item.url} alt="post" className="post-body-img" />
        )}
      </div>
      <div className="post-footer">
        <h6 className="post-icons">
          {" "}
          <span className="fa fa-check-square-o post-icon"></span>
          <span className="post-icon-text">Approve</span>
        </h6>
        <h6 className="post-icons">
          {" "}
          <span className="fa fa-comments post-icon"></span>
          <span className="post-icon-text">Comment</span>
        </h6>
        <h6 className="post-icons">
          {" "}
          <span className="fa fa-share-square post-icon"></span>
          <span className="post-icon-text">Share</span>
        </h6>
      </div>
    </div>
  );
};

export default PostCard;
