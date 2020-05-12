import React from "react";

const ListItems = () => {
  return (
    <ul className="items_list">
      <li className="list_content">
        <h6>
          <i className="fa fa-volume-control-phone phone_no_icon "></i>
          <span className="detail">+92 300 000 0000 </span>
        </h6>
      </li>
      <li className="list_content">
        <h6>
          <i className="fa fa-envelope envalope_icon"></i>
          <span className="detail"> gmail@email.com </span>
        </h6>
      </li>
      <li className="list_content">
        <h6>
          <i className="fa fa-map-marker location_icon"></i>
          <span className="detail"> N/A </span>
        </h6>
      </li>
    </ul>
  );
};

export default ListItems;
