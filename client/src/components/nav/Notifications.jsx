import React, { Component } from "react";
import Notification from "./Notification";

class Notifications extends Component {
  render() {
    return (
      <div className="notifications_wrapper">
        <h2>Notifications</h2>
        <Notification isActive={true}  />
        <Notification isActive={false} />
        <Notification isActive={true}  />
        <Notification isActive={false} />
        <Notification isActive={true}  />
        <Notification isActive={false} />
        <Notification isActive={true}  />
        <Notification isActive={false} />
        <Notification isActive={true}  />
        <Notification isActive={false} />
        <Notification isActive={true}  />
      </div>
    );
  }
}

export default Notifications;
