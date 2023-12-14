import { Inter } from "next/font/google";
import Display from "@/components/Results";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
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
