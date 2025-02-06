import { Route, Routes } from "react-router";
import "./App.css";
import RootLayouts from "./layouts/RootLayouts";
import Artist from "./pages/Artist";
import Community from "./pages/Community";
import Home from "./pages/Home";
import MarketPlace from "./pages/MarketPlace";
function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
