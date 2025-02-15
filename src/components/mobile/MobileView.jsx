import React, { useState, useRef } from "react";

import frappe from "../../assets/img/frappe.png";

import Mobile from "../../Mobile";
import Footer from "../Footer";

function MobileView({ handleTouchStart, handleTouchEnd }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  const theFrappe = useRef(null);

  return (
    <>
      <div className="flex-col !justify-between h-[120vh] flexc">
        <section className="flex-[5] flexc relative">
          {/* === TOMBOL MENU === */}
          <div className="absolute transcenter z-[3]">
            <button
              ref={menuButton}
              onTouchStart={(event) => {
                setMenuOpen(!menuOpen);
                handleTouchStart(event, menuButton.current);
              }}
              onTouchEnd={(event) => {
                handleTouchEnd(event, menuButton.current, 300);
              }}
              className="relative flex-col overflow-hidden scale-100 border-4 border-white rounded-full shadow-lg text-light bg-primary size-48 flexc font-gagalin transall"
            >
              <div
                className={`text-[5rem] transall !duration-300 transcenter opacity-0 scale-0 ${
                  menuOpen && "!opacity-100 !scale-100"
                }`}
              >
                X
              </div>
              <div
                className={`opacity-100  transall !duration-300 transcenter ${
                  menuOpen && "!opacity-0"
                }`}
              >
                <div className="text-4xl">Rombong</div>
                <div className="text-xl">Mamah Hasan</div>
              </div>
            </button>
          </div>
          {/* === TOMBOL MENU === */}

          {/* === MENU 1 === */}
          <div
            ref={theFrappe}
            className={`transcenter transall !duration-300 z-[2] ${
              menuOpen && "!top-[70%]"
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
