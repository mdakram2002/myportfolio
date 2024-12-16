/** @format */
import About from "./components/About";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/ContainerImg";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contect from "./components/Contect";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Container />
      <About />
      <Services />
      <Projects />
      <Contect />
      <Footer />
    </div>
  );
}

export default App;
