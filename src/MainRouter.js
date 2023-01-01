import Home from "./pages/Home";
import About from "./pages/About";
import Agents from "./pages/Agents";
import Properties from "./pages/Properties";
import Property from "./pages/Property";
import Agent from "./pages/Agent";

import { Routes, Route } from "react-router-dom";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<Property />} />
          <Route path="/agents/:id" element={<Agent />} />
      </Routes>
    </>
  );
}

export default MainRouter;
