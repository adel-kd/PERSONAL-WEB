import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetailAgrica from './components/ProjectDetailAgrica';
import ProjectDetailAdufood from './components/ProjectDetailAdufood';

function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/agrica" element={<ProjectDetailAgrica />} />
        <Route path="/project/adufood" element={<ProjectDetailAdufood />} />
      </Routes>
    </Router>
  );
}
