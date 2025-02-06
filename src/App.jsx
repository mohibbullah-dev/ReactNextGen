import { Route, Routes } from "react-router";
import "./App.css";
import RootLayouts from "./layouts/RootLayouts";
import Artist from "./pages/Artist";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
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
