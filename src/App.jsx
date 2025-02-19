import { useState } from "react";
import "./App.css";

import Mobile from "./Mobile";
// import Tablet from "./Tablet";
import Laptop from "./Laptop";

import MobileView from "./components/mobile/MobileView";

import brokoli from "./assets/img/brokoli.jpg";

function App() {
  // const handleShowMenu = (event, ref) => {
  //   animateStart(ref);
  // handleTouchEnd(event, ref, 200, { preventStart: true });
  // };

  return (
    <>
      <main className="h-screen bg-gradient-to-b from-light to-secondary to-50%">
        <Mobile>
          <MobileView />
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
