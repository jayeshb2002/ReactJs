import { useState, useEffect } from "react";
import axios from "axios";

export const useData = (url) => {
  const [data, setData] = useState([]);  

    const fetchData = async () => {
      console.log('fetchData called')
      const response = await axios.get(url); 
      setData(response.data); 
  };

  useEffect(() => {
      fetchData();  
      console.log('useData useEffect called')
  },[]);  
  return [data];  
};

