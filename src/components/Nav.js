import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="w-full bg-[#feffff] flex items-center justify-center py-5 space-x-5">
      <nav className="w-8/12 m-auto p-4" currentPage={currentPage}>
        <button className="p-3 text-xl bg-[#000000] text-[#ffffff] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("About")}>
          ABOUT
        </button>
        <button className="p-3 text-xl bg-[#000000] text-[#ffffff] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("Portfolio")}>
          PORTFOLIO
        </button>
        <button className="p-3 text-xl bg-[#000000] text-[#ffffff] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("Contact")}>
          CONTACT
        </button>
      </nav>
    </div>
  );
}

export default Nav;
