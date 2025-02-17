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
              onTouchStart={(event) => {
                handleTouchStart(event, menuButton.current);
              }}
              onTouchEnd={(event) => {
                handleTouchEnd(event, menuButton.current, 500);
              }}
              onMouseDown={(event) => {
                handleTouchStart(event, menuButton.current);
              }}
              onMouseUp={(event) => {
                handleTouchEnd(event, menuButton.current, 500);
              }}
              className="relative flex-col overflow-hidden scale-100 border-4 border-white rounded-full shadow-lg select-none text-light bg-primary size-48 flexc transall font-gagalin"
            >
              {/* === TEXTNYA === */}
              <div
                className={`opacity-100 bg-primary rounded-full size-full flexc flex-col transcenter transall !duration-500 ${
                  menuOpen && "!opacity-0"
                }`}
              >
                <div className="text-4xl">Rombong</div>
                <div className="text-xl">Mamah Hasan</div>
              </div>
              {/* === TEXTNYA === */}

              {/* === X NYA === */}
              <div
                className={`text-[5rem] transall bg-primary rounded-full size-full flexc flex-col !duration-500 !ease-in-out rotate-[0deg] transcenter scale-0 ${
                  menuOpen && "!scale-100 !rotate-[360deg]"
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
            className={`transcenter transall !duration-300 z-[2] ${
              menuOpen && "curve-down"
            }`}
          >
            <button
              onClick={() => {
                alert("menu minuman belum tersedia!");
              }}
              className="relative overflow-hidden bg-white border-2 rounded-full shadow size-20 flexc border-primary"
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
