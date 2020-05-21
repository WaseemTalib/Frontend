import React from 'react';

const Buttons = ({wrapper,onAdd,add,lectureAdd}) => {
  return (
    lectureAdd ? <div className="buttons_div">
      <button className="fa fa-check add_buttons"></button>
    </div> : <div className="buttons_div">
      <button className="add_buttons fa fa-trash-o"></button>
      <button className="add_buttons fa fa-bars"></button>
      {add ? "" : wrapper ? <button className="add_btn" onClick={onAdd}>+ Add Lecture</button> : ""}
    </div>
  );
};

export default Buttons;