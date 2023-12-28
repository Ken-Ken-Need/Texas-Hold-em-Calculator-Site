import Display from "@/components/Results";
import Inputbox from "@/components/inputbox";
import { useState } from "react";
import Reload from "@/components/reload";
import InputBoard from "@/components/inputBoard";

export default function Home() {
  const [arrayHand, setHand] = useState(["", "", "", ""]);

  const [board, setBoard] = useState(["", "", ""]);

  const displayArrayHand = [];
  const displayArrayBoard = [];

  for (let index = 0; index < arrayHand.length; index++) {
    if (index % 2 === 0) {
      displayArrayHand.push([arrayHand[index], arrayHand[index + 1]]);
    }
  }
  for (let index = 0; index < board.length; index++) {
    displayArrayBoard.push([board[index]]);
  }
  return (
    // Inputbox display
    // and the button for adding players
    <div data-theme="dark" className="flex, felx-col, space-y-5">
      <p className="flex flex-col items-center text-2xl font-black mt-10 ">
        HAND
      </p>

      <div className="flex flex-wrap items-center">
        {arrayHand.map((content, id) => {
          return (
            <div key={id} className="flex flex-row items-center">
              {id % 2 === 0 && <p>Player {id / 2 + 1}</p>}
              <Inputbox
                setFunction={(str) => {
                  arrayHand[id] = str;
                  setHand([...arrayHand]);
                }}
              />
            </div>
          );
        })}
        <button
          className="btn btn-square"
          onClick={() => {
            setHand([...arrayHand, "", ""]);
          }}
        >
          +
        </button>
      </div>

      {/*The Input boxes for board*/}

      <div>
        <p className="flex flex-col items-center text-2xl font-black">BOARD</p>
        {board.map((content, id) => {
          return (
            <div key={id} className="flex flex-col items-center">
              <InputBoard
                setFunction={(str) => {
                  board[id] = str;
                  setBoard([...board]);
                }}
              />
            </div>
          );
        })}
      </div>

      {/*Calculate and reload button */}
      <div className="flex flex-col space-y-5 items-center">
        <Display hands={displayArrayHand} board />
        <Reload />
      </div>
    </div>
  );
}
