import React from "react";
import { Link } from "react-router-dom";

const UserMessage = ({ name, time, message, active,onClick }) => {
  return (
    <Link onClick={onClick} to="/inbox" data-state="add" data-target="msg_container" className={`user_messages ${active ? "active_chat" : ""}`}>
      <div className="icon_message">H</div>
      <div className="message_user_wrapper">
        <div className="user_name">{name}</div>
        <div className="time_messages">{time}</div>
        <div className="message">{message}</div>
      </div>
    </Link>
  );
};

export default UserMessage;
