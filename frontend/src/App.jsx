import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-body)] theme-transition selection:bg-[var(--selection-bg)] selection:text-[var(--text-heading)]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
