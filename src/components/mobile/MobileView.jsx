import React, { useState, useRef, useEffect } from "react";

import frappe from "../../assets/img/frappe.png";

import Mobile from "../../Mobile";
import Footer from "../Footer";
import Button from "../button/Button";

function MobileView() {
  const [showIce, setShowIce] = useState(false);
  let menuOpenIce = null;
  let setMenuOpenIce = null;

  // const theFrappe = useRef(null);
  // const frappeButton = useRef(null);

  const theIce = useRef(null);

  function munculkan(ref) {
    setShowIce(!showIce);
    ref?.classList.add("animate-squish-barbar");

    setTimeout(() => {
      ref?.classList.remove("animate-squish-barbar");
    }, 120);
  }

  function sembunyikan(ref) {
    ref?.classList.add("animate-squish-barbar-reverse");

    setTimeout(() => {
      setShowIce(!showIce);
      ref?.classList.remove("animate-squish-barbar-reverse");

      setMenuOpenIce(false);
    }, 120);
  }

  function handleShowIce(ref) {
    if (!showIce) {
      munculkan(ref);
    } else {
      sembunyikan(ref);
      console.log(theIce);
    }
  }

  return (
    <>
      <div className="flex-col !justify-between h-[120vh] flexc">
        <section className="flex-[5] flexc relative">
          {/* === TOMBOL MENU === */}
          <div className="absolute select-none transcenter z-[3]">
            <Button
              buttonOpen={
                <>
                  <div className="text-4xl">Rombong</div>
                  <div className="text-xl">Mamah Hasan</div>
                </>
              }
              buttonClose={
                <>
                  <i className="fa-solid fa-xmark"></i>
                </>
              }
              clicked={(samting) => {
                handleShowIce(theIce.current);
              }}
            />

            {/* {showIce && ( */}
            <div
              className={`size-[6rem] transcenter transall hidden !top-[140%] scale-0 ${
                showIce && "!block !scale-100"
              }`}
            >
              <Button
                theRef={theIce}
                className={`size-full`}
                buttonOpen={
                  <>
                    <div className="p-4 text-center bg-white rounded-full select-none flexc size-full transcenter">
                      <img
                        src={frappe}
                        alt="LOGONYA"
                        className="pointer-events-none select-none size-full"
                      />
                    </div>
                  </>
                }
                buttonClose={
                  <>
                    <div className="p-4 text-center rotate-180 bg-white rounded-full select-none flexc size-full transcenter">
                      <img
                        src={frappe}
                        alt="LOGONYA"
                        className="pointer-events-none select-none size-full"
                      />
                    </div>
                  </>
                }
                clicked={({ menuOpen, setMenuOpen }) => {
                  menuOpenIce = menuOpenIce || menuOpen;
                  setMenuOpenIce = setMenuOpenIce || setMenuOpen;
                }}
              />
            </div>
            {/* )} */}
          </div>
          {/* === TOMBOL MENU === */}

          {/* === MENU 1 === */}

          {/* <div
            ref={theFrappe}
            className={`transcenter flex !top-[75%] transall z-[2] opacity-0 ${
              menuOpen && "!opacity-100"
            }`}
          >
            <button
              ref={frappeButton}
              onPointerDown={(event) => {
                handleTouchStart(event, [frappeButton.current]);
                setMenuOpen(true);
              }}
              onPointerLeave={(event) => {
                handleTouchLeave(event, [frappeButton.current], 200);
                setMenuOpen(true);
              }}
              onPointerUp={(event) => {
                handleTouchEnd(event, [frappeButton.current], 200);
                setMenuOpen(true);
              }}
              className={`relative transall overflow-hidden bg-white rounded-full shadow size-20 flexc shadow-primary ${
                menuOpen && ""
              }`}
            >
              <img
                src={frappe}
                alt="LOGONYA"
                className="text-center transcenter size-14"
              />
            </button>
          </div> */}

          {/* === MENU 1 === */}
        </section>

        <Footer className={`flex-[1]`} />
      </div>
    </>
  );
}

export default MobileView;
