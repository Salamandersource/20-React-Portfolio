import Header from "./components/Header";
import Hello from "./components/Hello";
import Footer from "./components/Footer";

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
function App() {
  return (
    <>
      <Header />
      <Hello />
      <Footer />
    </>
  );
}

export default App;
