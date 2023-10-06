import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import MainPage from "./pages/MainPage";
import UndefinedPage from "./pages/UndefinedPage";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      {/*
       * taryıcaki url izler
       * url değiştiğinde tanımladığımız
       * route'lardan biri ile eşeleşirse
       * ekrana route'un bileşenini basar
       */}
      <Routes>
        {/* projedeki her sayfa için route tanımlanır */}
        {/* route'a yol ve o yol için ekran a basılacak beileşen verilir */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        <Route path="/ürün/:id" element={<ProductDetail/>} />
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
