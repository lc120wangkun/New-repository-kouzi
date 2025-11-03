import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Thoughts from "@/pages/Thoughts";
import Timeline from "@/pages/Timeline";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

export default function App() {
  const { theme, isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
