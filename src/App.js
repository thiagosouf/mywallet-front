import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyles from "./globalStyles"; 
import Login from "./Login";
import Cadastro from "./Cadastro";
import Dashboard from "./Dashboard";
import NovaEntrada from "./NovaEntrada";
import NovaSaida from "./NovaSaida";
// /cadastro -> formulário de cadastro
// /login -> formulário de login
// /painel -> dashboard com lista de entradas e saídas



export default function App() {
const [codigo, setCodigo] = useState(""); 
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Login setCodigo={setCodigo} />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/dashboard" element={<Dashboard codigo={codigo}/>} />
                <Route path="/novaEntrada" element={<NovaEntrada codigo={codigo}/>} />
                <Route path="/novaSaida" element={<NovaSaida codigo={codigo}/>} />
            </Routes>
        </BrowserRouter>
        
    )}