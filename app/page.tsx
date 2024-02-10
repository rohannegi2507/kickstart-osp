import Image from "next/image";
import LeftBar from "./src/component/LeftBar";

export default function Home() {
  return (
    <div className="grid grid-cols-4 min-h-dvh">
      <div className="border"><LeftBar /> </div>
      <main className="border col-span-3">Main</main>
    </div>
  );
}
