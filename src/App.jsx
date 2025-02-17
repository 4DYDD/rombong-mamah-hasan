import { useState } from "react";
import "./App.css";

import Mobile from "./Mobile";
// import Tablet from "./Tablet";
import Laptop from "./Laptop";

import MobileView from "./components/mobile/MobileView";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [isStarted, setIsStarted] = useState(false);

  const handleTouchStart = (event, ref) => {
    if (isButtonDisabled) return;

    setIsStarted(true);

    event.preventDefault(); // Tambahkan ini

    ref.classList.add("!scale-95");
    ref.classList.add("!text-red-500");
  };

  const handleTouchEnd = (event, ref, delayClick) => {
    if (isButtonDisabled) return;
    if (!isStarted) return;

    event.preventDefault(); // Tambahkan ini

    setMenuOpen(!menuOpen);

    setIsButtonDisabled(true); // Set tombol disabled
    ref.classList.remove("!scale-95");
    ref.classList.remove("!text-red-500");

    setIsStarted(false);

    setTimeout(() => {
      setIsButtonDisabled(false); // Aktifkan tombol kembali
    }, delayClick);
  };

  return (
    <>
      <main className="h-screen bg-gradient-to-b from-light to-secondary to-50%">
        <Mobile>
          <MobileView
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handleTouchEnd}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </Mobile>
        <Laptop>
          <MobileView
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handleTouchEnd}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        </Laptop>
      </main>
    </>
  );
}

export default App;
