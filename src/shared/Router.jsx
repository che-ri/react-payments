import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Layout from "./Layout";
import Main from "../pages/Main";
import CardDetail from "../pages/CardDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<CardDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
