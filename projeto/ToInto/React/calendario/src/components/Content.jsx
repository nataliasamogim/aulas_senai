import React from "react";
import { Home } from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/LoginLP/Login";
import NotFound from "../pages/NotFound"
import {CadastroLP} from "../pages/Cadastro/CadastroLP"
import {PlanosLP} from "./Planos/PlanosLP"
import {App_calen} from "../pages/App_calen";
import { App_todo } from "./App_todo";


const Content = props => (
    <main className="Content"> {/*Rotas para a aplicação*/}
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/cadastro" exact element={<CadastroLP />} />
            <Route path="/cadastro" exact element={<PlanosLP />} />
            <Route path="/calendario" exact element={<App_calen />} />
            <Route path="/Todolist" exact element={<App_todo />} />
        </Routes>
    </main>
);

export default Content;