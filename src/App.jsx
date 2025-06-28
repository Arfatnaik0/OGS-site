import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";

import Kicks from "./pages/Kicks";
import Watches from "./pages/Watches";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/kicks" element={<Kicks />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
