import { useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Agents from "./pages/Agents";
import Properties from "./pages/Properties";
import Property from "./pages/Property";
import Agent from "./pages/Agent";
import Contact from "./pages/Contact"
import { useLocation, Routes, Route } from "react-router-dom"

function MainRouter() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties/:id" element={<Property />} />
        <Route path="/agents/:id" element={<Agent />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
