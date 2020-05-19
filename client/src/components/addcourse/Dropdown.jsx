import React, {useState} from 'react';
import Buttons from './ButtonDiv';

const Dropdown = ({i}) => {
  const dropdownItems = [1,2,3,4,5,6,7];
  const [open,setOpen] = useState(false)
  return (
    <div>
      <div className="chapter_wrapper">
        <div className="dropdown_button" onClick={()=>setOpen(o=>!o)}>
          Chapter {i} <button className="add_buttons fa fa-pencil-square-o" aria-hidden="true"></button>
          <Buttons wrapper={true} />
        </div>
        <ol type="i">
          {open ? dropdownItems.map(i=> <li className="nested_dropdown_item"> Lecture {i} ({Math.floor(Math.random()* 24)}:{Math.floor(Math.random()* 24)}:{Math.floor(Math.random()* 24)}) <button className="add_buttons fa fa-pencil-square-o" aria-hidden="true"></button> <Buttons wrapper={false} /> </li>) : ""}
        </ol>
      </div>
    </div>
  );
};

export default Dropdown;