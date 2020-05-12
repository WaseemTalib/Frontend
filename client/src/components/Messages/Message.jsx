import React from 'react';

const Message = ({className,message}) => {
  return (
    <div className={className}>
      <div className="message_container">
        <p> {message} </p>
      </div>
    </div>
  );
};

export default Message;