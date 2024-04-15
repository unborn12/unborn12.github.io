import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectsData from "./ProjectsData.json"

function App() {
  return (
    <div className="App w-full max-w-[60rem] m-auto">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects data={ProjectsData} />
        <Contact />

      </main>
    </div>
  );
}

export default App;
