import React, { useEffect, useState } from "react";
import {fetchColors} from '../api/fetchColors'

//Components
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  //on load, get colors data from server and set state
  useEffect(()=>{
    fetchColors()
    .then(res =>{
      //res.data
      //set colorlist to res data
      setColorList(res.data);
    })
    .catch(err =>{
      console.log('GET REQUEST ERROR: ', err, err.response)
    })
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
