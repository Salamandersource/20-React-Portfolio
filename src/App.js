import Header from "./components/Header";

import Footer from "./components/Footer";
import "./index.css";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { useState } from "react";
import Graphic from "./Images/girl-with-red-hat-Z6SXt1v5tP8-unsplash.jpg";

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    //<div class="bg-[#223371] h-screen flex flex-col">
    <div style={{ backgroundImage: `url(${Graphic})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: 800, width: 1200 }}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="w-full text-[#ffffff] flex-1 flex flex-col">{renderPage()}</div>

      <Footer />
    </div>
  );
}

export default App;
