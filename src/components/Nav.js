import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="w-full bg-[#feffff]">
      <nav className="w-8/12 m-auto p-4" currentPage={currentPage}>
        <button className="p-3 text-xl bg-[#000000] text-[#6FFFE9] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("About")}>
          ABOUT
        </button>
        <button className="p-3 text-xl bg-[#000000] text-[#6FFFE9] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("Portfolio")}>
          PORTFOLIO
        </button>
        <button className="p-3 text-xl bg-[#000000] text-[#6FFFE9] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("Contact")}>
          CONTACT
        </button>
      </nav>
    </div>
  );
}

export default Nav;
