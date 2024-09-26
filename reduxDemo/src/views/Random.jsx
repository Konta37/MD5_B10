import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Random() {
  const random = useSelector((state) => state.random);
  const dispath = useDispatch();
  console.log(random);

  const handleAdd = () =>{
      dispath({
        type:"random",
        payload: Math.ceil(Math.random()*10),
      })
  }
  return (
    <div>
      <button onClick={handleAdd}>Add value</button>
      <h1>Random: {JSON.stringify(random)}</h1>
    </div>
  );
}
