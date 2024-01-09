import { useState } from "react";
const InputBoard = ({ setFunction }) => {
  return (
    <div>
      <input
        className="input input-primary m-5 h-20 text-center rounded-lg"
        placeholder="Input your board"
        onChange={(e) => {
          setFunction(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default InputBoard;
