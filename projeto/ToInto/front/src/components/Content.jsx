{/* Componente Content */ }
{/* Autor: Júlia Dias Lara*/ }
{/* 20/10/2023-06/12/2023 */ }
{/* Descrição detalhada: O componente organiza o conteúdo principal da aplicação com base nas rotas especificas para cada componente.*/ }
import React from "react";
import { Home } from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/LoginLP/Login";
import NotFound from "../pages/NotFound"
import CadastroLP from "../pages/Cadastro/CadastroLP"
import { PlanosLP } from "./Planos/PlanosLP"
import { App_calen } from "../pages/App_calen";
import { App_todo } from "./App_todo";
import Cad_concluido from "../pages/Concluido/Cad_concluido";


const Content = props => (
    <main className="Content"> {/*Rotas para a aplicação*/}
        <Routes>{/* Envolve um conjunto de rotas */}
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/cadastro" exact element={<CadastroLP />} />
            <Route path="/cadastro" exact element={<PlanosLP />} />
            <Route path="/calendario" exact element={<App_calen />} />
            <Route path="/Todolist" exact element={<App_todo />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/concluido" exact element={<Cad_concluido />} />
        </Routes>
    </main>
);

export default Content;