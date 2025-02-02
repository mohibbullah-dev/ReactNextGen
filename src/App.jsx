import "./App.css";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Marketplace from "./pages/Marketplace";
import Artist from "./pages/Artist";
import Community from "./pages/Community";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
