import React, {  Fragment, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
import axios from 'axios';

function Code() {
    var images = [];
    const [data, setData] = useState("");
    let { id } = useParams();   
   
      axios.get(`http://localhost:5000/api`)
      .then(res => {
        images = res.data.data[id];
        setData(images); 
        console.log("error"); 
      });
  }

  export default Code;