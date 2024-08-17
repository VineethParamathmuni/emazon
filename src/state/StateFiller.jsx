// import React from "react";
import { useDispatch } from "react-redux";
import { addToImages } from "./reducer";
import { useEffectAfterMount } from "../components/useEffectAfterMount";

function StateFiller() {
  const dispatch = useDispatch();     

  async function fillData(){        
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=5"
    );
    const data = await response.json();
    if (data && data.length) {                 
      dispatch(addToImages(data)); 
    }
  };

  useEffectAfterMount(() => {
    fillData();
  }, []); 
}

export default StateFiller;
