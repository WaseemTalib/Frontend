import React, { useState } from "react";
import Buttons from "./ButtonDiv";

const Dropdown = ({ title,add:lectureAdd }) => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const [dropdownItems, setItems] = useState(
    items.map((el) => `Lecture ${el}`)
  );
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const onAdd = () => {
    setAdd(true);
    setItems((i) => [...i,<input placeholder="Lecture Name" className="my_input" type="text" />]);
    setOpen(true);
  };
  return (
    <div>
      <div className="chapter_wrapper">
        <div
          className="dropdown_button"
          onClick={(e) =>
            e.target.localName === "button" ||
            e.target.parentNode.localName === "button" ||
            e.target.classList.contains("my_input")
              ? "" : setOpen((o) => !o)
          }
        >
          {title}{" "}
          <button
            className="add_buttons fa fa-pencil-square-o"
            aria-hidden="true"
          ></button>
          <Buttons wrapper={true} onAdd={onAdd} lectureAdd={lectureAdd} add={add} />
        </div>
        <ol type="i">
          {open
            ? dropdownItems.map((el, i) => (
                <li className="nested_dropdown_item">
                  {" "}
                  {el}{" "}
                  {add && dropdownItems.length - 1 === i
                    ? ""
                    : `${Math.floor(Math.random() * 24)}:${Math.floor(
                        Math.random() * 24
                      )}:${Math.floor(Math.random() * 24)}`}{" "}
                  {add && dropdownItems.length - 1 === i ? "" : <button className="add_buttons fa fa-pencil-square-o"></button>}{" "}
                  <Buttons
                    lectureAdd={add && dropdownItems.length - 1 === i}
                    wrapper={false}
                  />
                  {add && dropdownItems.length - 1 === i
                    ? 
                    <div className="course add_course" style={{ border: `4px dashed` }}>
                    <div className="">
                      <label htmlFor="coursefile">
                        <i className="fa fa-plus-square" aria-hidden="true"></i>{" "}
                        <div className="text_add">Upload Video</div>
                      </label>
                      <input type="file" id="coursefile" style={{ display: `none` }}/>
                    </div>
                  </div> : ""
                  }
                </li>
              ))
            : ""}
        </ol>
      </div>
    </div>
  );
};

export default Dropdown;
