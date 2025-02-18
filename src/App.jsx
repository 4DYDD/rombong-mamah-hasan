import { useState } from "react";
import "./App.css";

import Mobile from "./Mobile";
// import Tablet from "./Tablet";
import Laptop from "./Laptop";

import MobileView from "./components/mobile/MobileView";

import brokoli from "./assets/img/brokoli.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [isStarted, setIsStarted] = useState(false);

  const handleTouchStart = (event, ref) => {
    if (isButtonDisabled == true) return;

    ref.classList.add("!scale-x-[0.90]");
    ref.classList.add("!scale-y-95");
    ref.classList.add("!text-red-500");

    setIsStarted(true);
  };

  const handleTouchEnd = (event, ref, delayClick) => {
    if (isButtonDisabled == true) return;
    if (isStarted == false) return;

    setMenuOpen(!menuOpen);

    ref.classList.remove("!scale-x-[0.90]");
    ref.classList.remove("!scale-y-95");

    ref.classList.add("animate-squish");
    ref.classList.remove("!text-red-500");

    setIsStarted(false);
    setIsButtonDisabled(true); // Set tombol disabled

    setTimeout(() => {
      ref.classList.remove("animate-squish");
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
          {/* <MobileView
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handleTouchEnd}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          /> */}

          <div className="flex-col h-screen px-16 text-3xl font-bold text-center text-white bg-red-500 flexc">
            <span>UNTUK UKURAN WEBSITE INI BELUM KU BUAT, LAGI MALASSS</span>
            <br />
            <br />
            <div
              style={{
                backgroundImage: `url(${brokoli})`,
              }}
              className="bg-no-repeat bg-cover border-4 border-white rounded-lg bg-center px-[20rem] py-[12rem]"
            ></div>
          </div>
        </Laptop>
      </main>
    </>
  );
}

export default App;
