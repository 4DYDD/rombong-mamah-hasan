import React from "react";

function Footer({ className }) {
  return (
    <>
      <footer className={`p-5 text-center flexc bg-light shadow ${className}`}>
        <div>
          {" "}
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            {" "}
            Freepik{" "}
          </a>{" "}
          from{" "}
          <a
            className="text-blue-500"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
