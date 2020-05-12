import React from "react";

const UserMessage = ({name,time,message,active}) => {
  return (
    <div className={`user_messages ${active ? "active_chat" : ""}`}>
      <div className="user_name">{name}</div>
      <div className="time_messages">{time}</div>
      <div className="message">{message}</div>
    </div>
  );
};

export default UserMessage;
