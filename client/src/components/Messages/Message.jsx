import React from 'react';

const Message = ({className,message}) => {
  return (
    <div className={className + " message_m"}>
      <div className="icon_message">H</div>
      <div className="message_container">
        <p> {message} </p>
      </div>
    </div>
  );
};

export default Message;