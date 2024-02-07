import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Circles from "./circles";
import Header, { MenuLinks } from "./theHeader";
import Footer from "./theFooter";

const Root = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
  });

  return (
    <>
      <Header setMenu={setMenu} />
      <Circles />

      <main>
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
      <div className={`wrap-menu ${menu ? "active" : ""}`}>
        <button
          onClick={() => setMenu(!menu)}
          aria-label="Menu"
          className="close"
        >
          <svg
            version="1.1"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1={2} y1={2} x2={28} y2={28} strokeWidth={2} />
            <line x1={28} y1={2} x2={2} y2={28} strokeWidth={2} />
          </svg>
        </button>
        <MenuLinks setMenu={setMenu} />
      </div>
    </>
  );
};

export default Root;
