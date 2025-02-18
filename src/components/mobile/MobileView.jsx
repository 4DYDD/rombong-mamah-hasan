import React, { useState, useRef, useEffect } from "react";

import frappe from "../../assets/img/frappe.png";

import Mobile from "../../Mobile";
import Footer from "../Footer";

function MobileView({
  handleTouchStart,
  handleTouchEnd,
  menuOpen,
  setMenuOpen,
}) {
  const menuButton = useRef(null);
  const theFrappe = useRef(null);

  return (
    <>
      <div className="flex-col !justify-between h-[120vh] flexc">
        <section className="flex-[5] flexc relative">
          {/* === TOMBOL MENU === */}
          <div className="absolute select-none transcenter z-[3]">
            <button
              ref={menuButton}
              onPointerDown={(event) => {
                handleTouchStart(event, menuButton.current);
              }}
              onPointerUp={(event) => {
                handleTouchEnd(event, menuButton.current, 200);
              }}
              className="relative flex-col overflow-hidden scale-x-100 scale-y-100 rounded-full shadow select-none shadow-primary text-light bg-primary size-48 flexc transall font-gagalin"
            >
              {/* === TEXTNYA === */}
              <div
                className={`opacity-100 bg-primary rounded-full size-full flexc flex-col transcenter transall ${
                  menuOpen && "!opacity-0"
                }`}
              >
                <div className="text-4xl">Rombong</div>
                <div className="text-xl">Mamah Hasan</div>
              </div>
              {/* === TEXTNYA === */}

              {/* === X NYA === */}
              <div
                className={`text-[5rem] transall bg-primary rounded-full size-full flexc flex-col !ease-in-out transcenter scale-0 ${
                  menuOpen && "!scale-100"
                }`}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
              {/* === X NYA === */}
            </button>
          </div>
          {/* === TOMBOL MENU === */}

          {/* === MENU 1 === */}
          <div
            ref={theFrappe}
            className={`transcenter !top-[72%] scale-0 transall z-[2] ${
              menuOpen && "!scale-100"
            }`}
          >
            <button
              onClick={() => {
                alert("menu minuman belum tersedia!");
              }}
              className={`relative overflow-hidden bg-white rounded-full shadow size-20 flexc shadow-primary ${
                menuOpen && "animate-squish-barbar"
              }`}
            >
              <img
                src={frappe}
                alt="LOGONYA"
                className="text-center transcenter size-14"
              />
            </button>
          </div>
          {/* === MENU 1 === */}
        </section>

        <Footer className={`flex-[1]`} />
      </div>
    </>
  );
}

export default MobileView;
