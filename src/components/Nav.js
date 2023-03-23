import React from "react";
//import Graphic from "../images/undraw_solution_mindset_re_57bf.svg";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="w-full bg-[#feffff] flex items-center justify-center py-1 space-x-6">
      <nav className="w-8/12 m-auto p-4" currentPage={currentPage}>
        <button className="p-3 text-xl bg-[#898cc7] text-[#ffffff] m-2 w-3/12 rounded-xl" onClick={() => handlePageChange("About")}>
          ABOUT
        </button>
        <button className="p-3 text-xl bg-[#898cc7] text-[#ffffff] m-2 w-3/12 rounded-xl" onClick={() => handlePageChange("Portfolio")}>
          PORTFOLIO
        </button>
        <button className="p-3 text-xl bg-[#898cc7] text-[#ffffff] m-2 w-3/12 rounded-xl" onClick={() => handlePageChange("Contact")}>
          CONTACT
        </button>
      </nav>
    </div>
  );
}

export default Nav;
