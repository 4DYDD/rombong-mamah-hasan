import React, { useEffect, useState, useRef } from "react";
import Button from "../button/Button";

function Header() {
  const [showCartQuantity, setShowCartQuantity] = useState(false);
  let esKopi = null;
  let tehEs = null;
  let esKelapa = null;

  return (
    <>
      <header className="antialiased bg-white font-capriola">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Rombong Mamah Hasan
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Aneka Minuman Manis dan Menyegarkan
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:ring-3 focus:outline-hidden"
                type="button"
              >
                <span className="text-sm font-medium"> Lokasi </span>
                <i className="fa-solid fa-location-dot"></i>
              </button>

              <Button
                className={`z-[20] !inline-block py-2 !text-sm text-white transall w-[6.5rem] h-[2rem] outline outline-1 outline-biru-700 rounded-xl bg-transparent`}
                buttonOpen={
                  <>
                    <div className="p-[1.3em] text-center rounded-full select-none flexc size-full font-capriola transcenter hover:bg-biru-700 bg-transparent text-primary hover:text-white transall">
                      <span className="text-[0.2em]">Keranjang</span>
                    </div>
                  </>
                }
                buttonClose={
                  <>
                    <div className="p-[1.3em] flexc gap-2 text-center rounded-full select-none flexc size-full font-capriola transcenter hover:bg-biru-700 bg-transparent text-primary hover:text-white transall">
                      <i className="text-[0.2em] fa-solid fa-xmark"></i>
                    </div>
                  </>
                }
                clicked={({ menuOpen, changeButton }) => {
                  // setShowCartQuantity(!showCartQuantity);
                  changeButton("!w-[3rem]");
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="grid justify-center items-center max-w-[70rem] py-3 grid-cols-1 gap-1 mx-auto lg:grid-cols-3 lg:gap-10 [&>article]:h-[20rem] [&>article]:outline [&>article]:outline-1 [&>article]:outline-biru-300 [&>article]:shadow-lg [&>article]:shadow-biru-300">
          {[
            {
              imageLink:
                "https://media.istockphoto.com/id/497863160/id/foto/es-kopi-dalam-cangkir-takeaway.jpg?s=2048x2048&w=is&k=20&c=4_Bl5_V1onYNRM0YbAH6mYPd8hgiH22aCVFrreK4qBs=",
              ProdName: "Es Kopi",
              ProdPrice: 6000,
            },
            {
              imageLink:
                "https://media.istockphoto.com/id/1270188225/id/foto/cangkir-plastik-realistis-di-latar-belakang-putih-terisolasi-mock-up-cold-berang-berang.jpg?s=2048x2048&w=is&k=20&c=nyNFuk6m_h4PPD26oDHzlKj8JF3R3lFSWKAOayHImxI=",
              ProdName: "Teh Es",
              ProdPrice: 5000,
            },
            {
              imageLink:
                "https://media.istockphoto.com/id/1155623658/id/foto/segelas-teh-hitam-lemon-beku-di-latar-belakang-putih.jpg?s=2048x2048&w=is&k=20&c=PcIaVBrF8qeBYFfCCtF9hgA9Mi2ZBEFkwzKk0iwasSk=",
              ProdName: "Es Kelapa",
              ProdPrice: 8000,
            },
            {
              imageLink:
                "https://media.istockphoto.com/id/184284292/id/foto/lumpur.jpg?s=2048x2048&w=is&k=20&c=EELb6G_gMgCCLDgqe3YurLsEllBeCl3hE1OykVF7QKY=",
              ProdName: "Es Jeruk",
              ProdPrice: 6000,
            },
            {
              imageLink:
                "https://media.istockphoto.com/id/160053930/id/foto/gelas-gelas-dengan-makanan-penutup-es-krim-stroberi.jpg?s=2048x2048&w=is&k=20&c=y9mirwtciwZlCe1g8k0f0DOmys98z2QMIXadesFmH_I=",
              ProdName: "Es Susu Jelly",
              ProdPrice: 8000,
            },
          ].map(({ imageLink, ProdName, ProdPrice }, index) => (
            <article className="relative flex flex-col justify-end w-full mx-auto overflow-hidden isolate rounded-3xl">
              <div
                style={{
                  backgroundImage: `url(${imageLink})`,
                }}
                className="w-full h-full bg-center bg-no-repeat bg-cover transcenter"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-biru-300 via-biru-300/40"></div>
              <div className="absolute bottom-0 w-full flexc !justify-end px-5 py-8 shadow shadow-biru-300">
                <Button
                  className={`z-[20] !inline-block py-2 !text-sm text-white transall w-[3rem] h-[2rem] outline outline-1 outline-biru-700 rounded-xl bg-transparent`}
                  buttonOpen={
                    <>
                      <div className="p-[1.3em] text-center rounded-full select-none flexc size-full font-capriola transcenter hover:bg-biru-700 bg-transparent text-primary hover:text-white transall">
                        <i className="text-[0.2em] fa-solid fa-plus"></i>
                      </div>
                    </>
                  }
                  buttonClose={
                    <>
                      <div className="p-[1.3em] flexc gap-2 text-center rounded-full select-none flexc size-full font-capriola transcenter hover:bg-biru-700 bg-transparent text-primary hover:text-white transall">
                        <i className="text-[0.2em] fa-solid fa-xmark"></i>
                      </div>
                    </>
                  }
                  clicked={({ menuOpen }) => {
                    // setShowCartQuantity(!showCartQuantity);
                  }}
                />
              </div>
              <h3 className="z-10 mt-3 text-3xl font-bold text-biru-800 ps-5">
                {ProdName}
              </h3>
              <div className="z-10 pb-5 overflow-hidden text-base leading-6 text-biru-700 gap-y-1 ps-5">
                Rp {ProdPrice}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Header;
