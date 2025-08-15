import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/header";
import Home from "./components/Home";
import Services from "./components/Services";

let currentPage = "about";
function App() {
  return (
    <>
      <Header />
      {currentPage === "home" && <Home />}
      {currentPage === "about" && <About />}
      {currentPage === "contact" && <Contact />}
      {currentPage === "services" && <Services />}
      <Footer />
    </>
  );
}

export default App;
