import { useState } from "react";
import "./App.css";

// import Mobile from "./Mobile";
// import Tablet from "./Tablet";
// import Laptop from "./Laptop";

import MobileView from "./components/mobile/MobileView";

function App() {
  const handleTouchStart = (event, ref) => {
    event.preventDefault(); // Tambahkan ini

    // alert(ref.classList.contain("scale-100"));

    ref.classList.add("!scale-95");
  };
  const handleTouchEnd = (event, ref, delayClick) => {
    event.preventDefault(); // Tambahkan ini

    ref.classList.remove("!scale-95");

    ref.classList.add("pointer-events-none");
    setTimeout(() => {
      ref.classList.remove("pointer-events-none");
    }, delayClick);
  };

  return (
    <>
      <main className="h-screen bg-gradient-to-b from-light to-secondary to-50%">
        <MobileView
          handleTouchStart={handleTouchStart}
          handleTouchEnd={handleTouchEnd}
        />
      </main>
    </>
  );
}

export default App;
