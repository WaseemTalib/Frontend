import React from "react";

const PostCard = (item) => {
  return (
    <div key={item._id} className="post col-md-12">
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
          <h4 style={{ fontWeight: "700", color: "white", marginTop: "3px" }}>
            {item.postedBy && item.postedBy.name ? item.postedBy.name[0] : ""}
          </h4>
        </div>
        <div className="post-user-detail">
          <div className="post-name" style={{display: `inline`}}>
            {item.postedBy ? item.postedBy.name : ""}
          </div>
          <div class="align-items-center" style={{display: "inline-flex"}}><div class="post-option"><span class="fa fa-caret-right post-head-icon"></span></div><div class="post-group-ref">Computers</div></div>
          <div className="post-sub-name">
            12:35AM
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
        {item.feed && <p className="post-body-detail">{item.feed}</p>}
        
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSky6u4ARSU9V-SdIC4__iA_GQjpiaQBVTNxIxPWiWJl8C_ysEp&usqp=CAU" alt="post" className="post-body-img" />
        
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