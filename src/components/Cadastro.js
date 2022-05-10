import styled from "styled-components"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

console.log("Tela Cadastro");

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const navigate = useNavigate();

    function fazerCadastro(event) {
        event.preventDefault();

        console.log("entrou no cadastro");

        if (senha !== senha2) {
            alert("As senhas não conferem!");
            return;
        }

        
        const requisicao = axios.post("https://mywalletbf.herokuapp.com/cadastro", {
            name: nome,
            email: email,
            senha: senha,
            confirmSenha: senha2
        });
        requisicao.then(res => {
            console.log("funcionou");
            navigate("/");
        }
        )
        requisicao.catch(err => {
            console.log("erro");
            alert("Erro ao fazer cadastro! Consulte os logs.");
            console.error(err);
        });}

    return (
            <TelaDeCadastro>
                <Logo>MyWallet</Logo>
                <Formulario onSubmit={fazerCadastro}>
                    <input type="text" id="nome" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} required></input>
                    <input type="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                    <input type="password" id="senha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required></input>
                    <input type="password" id="senha" placeholder="senha" value={senha2} onChange={e => setSenha2(e.target.value)} required></input>    
                    <BotaoGrande type="submit">Cadastrar</BotaoGrande>
                </Formulario>
                <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
            </TelaDeCadastro>
    )

}
const TelaDeCadastro = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #8C11BE;
        height: 100vh;
        p{
            color: #fff;
            text-decoration: none;
            font-size: 15px;
            font-weight: 700;
        }
        `
const Logo = styled.div`
        text-align: center;
        font-family: 'Saira Stencil One', cursive;
        font-size: 32px;
        color: #fff;
        margin-bottom: 24px;
        `
const Formulario = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        input{
            height: 58px;
            width: 303px;
            border-radius: 5px;
            font-size: 20px;
            padding: 0 16px ;
            border: 0;
            margin-bottom: 13px;
        }
        input::placeholder{
            color: #000;
        }
        `
const BotaoGrande = styled.button`
    width: 303px;
    height: 45px;
    background: #A328D6;
    color: #ffffff;
    border-radius: 5px;
    margin-bottom: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    border: none
    `