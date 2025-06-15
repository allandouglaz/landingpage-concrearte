import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Differentials from "./components/Differentials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="font-sans text-gray-900 min-h-screen relative"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;