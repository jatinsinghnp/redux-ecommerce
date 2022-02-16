import Header from "./components/Header";

import Home from "./components/Home";
import Cart from "./components/Cart";
import Jump from "./components/Jump";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-xs bg-[#f3f3f3] m-0 p-0">
      <Header />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart/" element={<Cart />} />
        <Route path="api/" element={<Jump />} />
      </Routes>
    </div>
  );
}

export default App;
