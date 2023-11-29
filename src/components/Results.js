import { useEffect, useState } from "react";

const po = require("poker-odds");

// const hands = [['As', 'Kh'], ['Kd', 'Qs']]
// const board = ['Td', '7s', '8d']
// const iterations = 100000 // optional
// const exhaustive = false // optional

const Display = ({ hands, board }) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    setResult(po.calculateEquity(hands, board, 100000, false));
  }, [hands, board]);

  return (
    <div className="flex gap-[100px]">
      {result &&
        result.map((player, index) => {
          return (
            <div key={index} className="font-mono text-8xl">
              {player.wins / player.count}
            </div>
          );
        })}
    </div>
  );
};

export default Display;
