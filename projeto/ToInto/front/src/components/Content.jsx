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
import { App_calen } from "../pages/App_calen";
import { App_todo } from "./App_todo";
import Cad_concluido from "../pages/Concluido/Cad_concluido";
import FormMani from "../pages/backup_pg/FormMani";
import { PlanoAnual } from "../pages/Escolha_pag/PlanoAnual";
import { PlanoMensal } from "../pages/Escolha_pag/PlanoMensal"
import DadosCartao from "../pages/Adic_dados/DadosCartao";
import Dados_pix from "../pages/Adic_dados/Dados_pix"
import Modific_cart from "../pages/Modificar_cartao/Modific_cart";


const Content = props => (
    <main className="Content"> {/*Rotas para a aplicação*/}
        <Routes>{/* Envolve um conjunto de rotas */}
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/cadastro/:plano" exact element={<CadastroLP />} />
            <Route path="/calendario" exact element={<App_calen />} />
            <Route path="/Todolist" exact element={<App_todo />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/concluido" exact element={<Cad_concluido />} />
            <Route path="/anual" exact element={<PlanoAnual />} />
            <Route path="/mensal" exact element={<PlanoMensal />} />
            <Route path="/modificar" exact element={<FormMani />} />
            <Route path="/dadoscart" exact element={<DadosCartao />} />
            <Route path="/dadospix" exact element={<Dados_pix />} />
            <Route path="/modificarpag" exact element={<Modific_cart />} />

        </Routes>
    </main>
);

export default Content;