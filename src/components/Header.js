import React from "react";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="bg-[#f6f6f6] p-4">
      <h2 className="text-center text-3xl font-bold">Matthew Salamander</h2>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
