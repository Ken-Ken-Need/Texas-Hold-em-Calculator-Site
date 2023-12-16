import { useEffect, useState } from "react";

import { calculateEquity } from "poker-odds";
// const hands = [['As', 'Kh'], ['Kd', 'Qs']]
// const board = ['Td', '7s', '8d']
// const iterations = 100000 // optional
// const exhaustive = false // optional

const Display = ({ hands, board }) => {
  const [result, setResult] = useState(null);

  return (
    <div className="flex gap-[100px]">
      {result &&
        result.map((player, index) => {
          return (
            <div key={index} className="font-mono text-8xl">
              <p className="text-5xl">Chances of winning</p>
              {player.wins / player.count}
            </div>
          );
        })}
      <button
        className="btn btn-primary m-5"
        onClick={() => {
          setResult(calculateEquity(hands, board, 100000, false));
        }}
      >
        Calculate
      </button>
    </div>
  );
};

export default Display;
