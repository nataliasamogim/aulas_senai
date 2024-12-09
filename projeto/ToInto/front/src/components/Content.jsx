{/*Nome componente: Content*/}
{/*Autora: Júlia*/}
{/*Data de criação:22/03/2023  e data de alteração: 05/12/2024*/}
{/*Descrição: O componente Content importa as páginas necessárias para gerenciar as rotas no TOINTO */}

import React from "react";
import { Routes, Route } from "react-router-dom";
// Importação das páginas que serão utilizadas nas rotas
import { Home } from "../pages/Home";
import Login from "../pages/LoginLP/Login";
import NotFound from "../pages/NotFound";
import CadastroLP from "../pages/Cadastro/CadastroLP";
import { App_calen } from "../pages/App_calen";
import { App_todo } from "./App_todo";
import Cad_concluido from "../pages/Concluido/Cad_concluido";
import FormMani from "../pages/Form_manipulacao/FormMani";
import DadosCartao from "../pages/Adic_dados/DadosCartao";
import Dados_pix from "../pages/Adic_dados/Dados_pix";
import ConfPix from "../pages/Conf_Pix/ConfPix";
import Modific_cart from "../pages/Modificar_cartao/Modific_cart";
import { ModificPlano } from "../pages/Modific_plano/Modific_plano";
import Concluido_cadatualizado from "../pages/Concluido/Concluido_cadatualizado";
import { Esc_Pag } from "../pages/Escolha_pag/Esc_Pag";
import Recuperacao from "../pages/Esq_senha/Recuperacao";
import { Modific_pag } from "../pages/Escolha_pag/Modific_pag";
import Pag_cartao_realizado from "../pages/Concluido/pag_cartao_realizado";

// Define o componente Content, que renderiza as rotas da aplicação
const Content = props => (
    <main className="Content">
        <Routes>
            {/* Definição das rotas, com a associação dos caminhos (path)*/}
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Login" exact element={<Login />} />
            <Route path="/cadastro" exact element={<CadastroLP />} />
            <Route path="/calendario" exact element={<App_calen />} />
            <Route path="/Todolist" exact element={<App_todo />} />
            <Route path="/concluido" exact element={<Cad_concluido />} />
            <Route path="/pag_concluido" exact element={<Pag_cartao_realizado />} />
            <Route path="/escpag" exact element={<Esc_Pag />} />
            <Route path="/modific_pag" exact element={<Modific_pag/>}/>
            <Route path="/modificar" exact element={<FormMani />} />
            <Route path="/cadatualizado" exact element={<Concluido_cadatualizado />} />
            <Route path="/dadoscart" exact element={<DadosCartao />} />
            <Route path="/dadospix" exact element={<Dados_pix />} />
            <Route path="/ConfPix" exact element={<ConfPix />} />
            <Route path="/modificart" exact element={<Modific_cart />} />
            <Route path="/modificplano" exact element={<ModificPlano />} />
            <Route path="/pagamento" exact element={<Esc_Pag />} />
            <Route path="/esq_senha" exact element={<Recuperacao />}/>
        </Routes>
    </main>
);

export default Content;
