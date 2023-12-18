import { useEffect, useState } from "react";

import { calculateEquity } from "poker-odds";
// const hands = [['As', 'Kh'], ['Kd', 'Qs']]
// const board = ['Td', '7s', '8d']
// const iterations = 100000 // optional
// const exhaustive = false // optional

const Display = ({ hands, board }) => {
  const [result, setResult] = useState(null);
  try {
    return (
      <div className="flex flex-col">
        {result &&
          result.map((player, index) => {
            return (
              <div key={index} className="font-mono text-xl flex space-y-5">
                <p>Chances of winning for player {index + 1}: </p>
                {player.wins / player.count}
              </div>
            );
          })}
        <button
          className="btn btn-primary"
          onClick={() => {
            setResult(calculateEquity(hands, board, 100000, false));
          }}
        >
          Calculate
        </button>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>Invalid Input!!!</p>
      </div>
    );
  }
};

export default Display;
