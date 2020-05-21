import React from 'react';
import Message from "../Messages/UserMessage"
const Notification = ({isActive,message}) => {
  return (
    <div className="notification">
      <Message active={isActive} message={message || "Ismail has commented on your post"} name="Ismail Sheikh" time={new Date().toLocaleTimeString()} />
    </div>
  );
};

export default Notification;