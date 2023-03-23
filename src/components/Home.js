import React, { useState } from "react";

import Nav from "./Nav";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="w-full text-[#ffffff] flex-1 flex flex-col">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default Home;
