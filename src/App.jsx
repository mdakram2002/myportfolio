import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Skills />
      <Projects />
      <Education/>
      <Contect />
      <Footer />
    </div>
  );
}

export default App;
