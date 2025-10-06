import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Full-page background gradient image */}
      <img
        src="/gradient.png"
        alt="Background Gradient"
        className="fixed top-0 left-0 w-full h-full object-cover opacity-60 -z-10"
      />

      {/* Shadow/gradient accent */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
