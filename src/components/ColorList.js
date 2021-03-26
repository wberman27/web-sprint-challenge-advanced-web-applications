import React, { useState } from "react";
import EditMenu from './EditMenu'
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { v4 as uuid } from 'uuid';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  //on save put request to server to update color
  const saveEdit = e => {
    e.preventDefault();
    console.log(e)
    axiosWithAuth()
    .put('/colors/:id', colorToEdit)
    .then(res =>{
      //res.data (color values)
      //give edited color a new ID, so deleting does NOT delete both new and original color
      res.data.id = uuid();
      updateColors([...colors, res.data])
    })
    .catch(err =>{
      console.log('SAVE COLOR ERROR: ', err, err.response)
    })
  };

  const deleteColor = color => {
    axiosWithAuth()
    .delete(`/colors/${color.id}`)
    .then(res =>{
      //res.data (id)
      //update colors list arrow with everything but the deleted color with id
      updateColors(colors.filter(item => item.id !== color.id))
    })
    .catch(err =>{
      console.log('DELETE ERROR: ', err, err.response)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.