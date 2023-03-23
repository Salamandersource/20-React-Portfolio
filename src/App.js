import Header from "./components/Header";

import Footer from "./components/Footer";
import "./index.css";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { useState } from "react";

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
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
    <div class="bg-[#1C2541] h-screen flex flex-col">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="w-full text-[#6FFFE9] flex-1 flex flex-col">{renderPage()}</div>

      <Footer />
    </div>
  );
}

export default App;
