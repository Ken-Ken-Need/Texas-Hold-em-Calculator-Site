import Display from "@/components/Results";
import Inputbox from "@/components/inputbox";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  return (
    <div>
      <div className="flex">
        <Inputbox />
        <Inputbox />
        <button className="text-4xl">+</button>
      </div>
      <Display
        hands={[
          ["As", "Kh"],
          ["Kd", "Qs"],
        ]}
        board={[]}
      />
    </div>
  );
}
