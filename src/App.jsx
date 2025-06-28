import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";

import Kicks from "./pages/kicks";
import Watches from "./pages/watches";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Footer from "./components/footer";

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
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
