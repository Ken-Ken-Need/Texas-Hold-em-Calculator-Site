import Display from "@/components/Results";
import Inputbox from "@/components/inputbox";
import { useState } from "react";
import Reload from "@/components/reload";
import InputBoard from "@/components/inputBoard";
import Footer from "@/components/footer";

export default function Home() {
  const [arrayHand, setHand] = useState(["", "", "", ""]);

  const [board, setBoard] = useState([]);

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

      <div className="overflow-y-scroll h-96 flex flex-wrap items-center">
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
      <div className="divider">Any cards flipped?</div>
      {/* The Input boxes for board */}

      <div className="space-y-5">
        <p className="flex flex-col items-center text-2xl font-black">BOARD</p>
        <div className="place-content-center flex flex-row">
          {board.map((content, id) => {
            return (
              <div key={id} className="flex flex-row">
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
        <div className="flex flex-col items-center">
          <button
            className="btn btn-square"
            onClick={() => {
              setBoard([...board, ""]);
            }}
          >
            +
          </button>
        </div>
      </div>

      {/*Calculate and reload button */}
      <div className="divider">ALL SET!!!</div>
      <div className="flex flex-col space-y-5 items-center">
        <Display hands={displayArrayHand} board />
        <Reload />
      </div>

      {/* Footer */}
      <div class="absolute inset-x-0 bottom-0 bg-neutral h-40 ">
        <Footer></Footer>
      </div>
    </div>
  );
}
