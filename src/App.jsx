import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contect />
      <Footer />
    </div>
  );
}

export default App;
