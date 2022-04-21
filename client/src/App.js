import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ScrollToTop from "./components/common/ScrollToTop";
import ItemDetailPage from "./pages/ItemDetailPage";
import ItemListPage from "./pages/ItemListPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import SEO from "./SEO";


function App() {

  return (
    <>
      <BrowserRouter>
         <HelmetProvider>
          <SEO/>
          <ScrollToTop/>
          <Routes>
            <Route element={<MainPage />} path="/"/>
            <Route element={<ItemListPage/>} path="/Itemlist/:category"/>
            <Route element={<ItemDetailPage />} path="/ItemDetail/:id"/>
            <Route element={<LoginPage />} path="/Login"/>
            <Route element={<RegisterPage />} path="/Register"/>
          </Routes>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}

export default App;