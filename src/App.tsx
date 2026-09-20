import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { profile } from "./data/content";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="wrap footer">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built as a living delivery demo.
        </span>
        <span>Porthcawl · AWS · Kubernetes · Terraform · GitOps</span>
      </footer>
    </>
  );
}
