import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ScrollToTop from "./components/common/ScrollToTop";
import CartPage from "./pages/CartPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemListPage from "./pages/ItemListPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route element={<MainPage />} path="/"/>
          <Route element={<ItemListPage/>} path="/Itemlist/:category"/>
          <Route element={<ItemDetailPage />} path="/ItemDetail/:id"/>
          <Route element={<LoginPage />} path="/Login"/>
          <Route element={<RegisterPage />} path="/Register"/>
          <Route element={<CartPage />} path="/Cart"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;