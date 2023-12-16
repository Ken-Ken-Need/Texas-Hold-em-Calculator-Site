import Display from "@/components/Results";
import Inputbox from "@/components/inputbox";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useState } from "react";

export default function Home() {
  const [hand, setHand] = useState([]);
  const [array, setArray] = useState(["", ""]);

  const displayArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index % 2 === 0) {
      displayArray.push([array[index], array[index + 1]]);
    }
  }
  return (
    <div>
      <div className="flex flex-wrap items-center">
        {array.map((content, id) => {
          return (
            <div className="flex flex-row items-center">
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

      {JSON.stringify(array)}

      <Display hands={displayArray} board={[]} />
      {JSON.stringify(displayArray)}
    </div>
  );
}
