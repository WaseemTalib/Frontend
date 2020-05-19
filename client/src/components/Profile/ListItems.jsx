import React from "react";

const ListItems = (props) => {
  const { profile } = props;
  return (
    <ul className="items_list">
      <li className="list_content">
        <h6>
          <i className="fa fa-volume-control-phone phone_no_icon "></i>
          <span className="detail">{profile && profile.phone ? profile.phone : ''}</span>
        </h6>
      </li>
      <li className="list_content">
        <h6>
          <i className="fa fa-envelope envalope_icon"></i>
          <span className="detail">{profile && profile.email ? profile.email : ''}</span>
        </h6>
      </li>
      <li className="list_content">
        <h6>
          <i className="fa fa-map-marker location_icon"></i>
          <span className="detail">{profile && profile.country ? profile.country : ''}</span>
        </h6>
      </li>
    </ul>
  );
};

export default ListItems;