import { useState } from "react";
import "./App.css";

import Mobile from "./Mobile";
// import Tablet from "./Tablet";
import Laptop from "./Laptop";

import MobileView from "./components/mobile/MobileView";

import brokoli from "./assets/img/brokoli.jpg";
import LaptopView from "./components/LaptopView";

function App() {
  // const handleShowMenu = (event, ref) => {
  //   animateStart(ref);
  // handleTouchEnd(event, ref, 200, { preventStart: true });
  // };

  {
    /* <div className="flex-col h-screen px-16 text-3xl font-bold text-center text-white bg-red-500 flexc">
            <span>UNTUK UKURAN WEBSITE INI BELUM KU BUAT, LAGI MALASSS</span>
            <br />
            <br />
            <div
              style={{
                backgroundImage: `url(${brokoli})`,
              }}
              className="bg-no-repeat bg-cover border-4 border-white rounded-lg bg-center px-[20rem] py-[12rem]"
            ></div>
          </div> */
  }

  return (
    <>
      <main className="h-screen bg-gradient-to-b from-light to-secondary to-50%">
        <Mobile>
          {/* === ADA BUG DI VERSI MOBILENYA === */}
          {/* === ADA BUG DI VERSI MOBILENYA === */}
          {/* === ADA BUG DI VERSI MOBILENYA === */}
          <MobileView />
          {/* === ADA BUG DI VERSI MOBILENYA === */}
          {/* === ADA BUG DI VERSI MOBILENYA === */}
          {/* === ADA BUG DI VERSI MOBILENYA === */}
        </Mobile>
        <Laptop>
          <LaptopView />
        </Laptop>
      </main>
    </>
  );
}

export default App;
