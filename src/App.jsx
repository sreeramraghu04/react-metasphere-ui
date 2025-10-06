import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import ButtonsPage from "./pages/ButtonsPage";
import TogglePage from "./pages/TogglePage";
import LoaderPage from "./pages/LoaderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      
        {/* Redirect "/" to home page */}
        <Route index element={<Navigate to="/home" />} />

        {/* Core Pages */}
        <Route path="home" element={<Home />} />
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/toggles" element={<TogglePage />} />
        <Route path="/loaders" element={<LoaderPage />} />
      </Route>
    </Routes>
  );
}
