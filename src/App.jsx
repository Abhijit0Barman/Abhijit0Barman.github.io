import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
