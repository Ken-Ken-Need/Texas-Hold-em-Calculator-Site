import Display from "@/components/Results";
import Inputbox from "@/components/inputbox";
import { useState } from "react";
import Reload from "@/components/reload";

export default function Home() {
  const [array, setArray] = useState(["", "", "", ""]);

  const displayArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index % 2 === 0) {
      displayArray.push([array[index], array[index + 1]]);
    }
  }
  return (
    // Inputbox display
    // and the button for adding players
    <div data-theme="dark" className="flex, felx-col, space-y-5">
      <div className="flex flex-wrap items-center">
        {array.map((content, id) => {
          return (
            <div key={id} className="flex flex-row items-center">
              {id % 2 === 0 && <p>Player {id / 2 + 1}</p>}
              <Inputbox
                setFunction={(str) => {
                  array[id] = str;
                  setArray([...array]);
                }}
              />
            </div>
          );
        })}
        <button
          className="btn btn-square"
          onClick={() => {
            setArray([...array, "", ""]);
          }}
        >
          +
        </button>
      </div>

      {/*Calculate and reload button */}
      <div className="flex flex-col space-y-5 items-center">
        <Display hands={displayArray} board={[]} />
        <Reload />
      </div>
    </div>
  );
}
