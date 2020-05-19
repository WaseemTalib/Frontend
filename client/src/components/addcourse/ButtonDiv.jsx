import React from 'react';

const Buttons = ({wrapper}) => {
  return (
    <div className="buttons_div">
      <button className="add_buttons fa fa-trash-o"></button>
      <button className="add_buttons fa fa-bars"></button>
      {wrapper ? <button className="add_btn">+ Add Lecture</button> : ""}
    </div>
  );
};

export default Buttons;