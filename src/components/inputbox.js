import { useEffect, useState } from "react";

const Inputbox = ({ setFunction }) => {
  return (
    <div>
      <input
        className="input input-primary m-5 w-96 h-20 text-center rounded-lg"
        placeholder="Please insert your hand"
        onChange={(e) => {
          setFunction(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default Inputbox;
