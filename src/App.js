import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./globalStyles"; 
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import Dashboard from "./components/Dashboard";
import NovaEntrada from "./components/NovaEntrada";
import NovaSaida from "./components/NovaSaida";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/novaEntrada" element={<NovaEntrada />} />
                <Route path="/novaSaida" element={<NovaSaida />} />
            </Routes>
        </BrowserRouter>
        
    )}