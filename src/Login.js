import styled from "styled-components"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

console.log("Tela Login");

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    function fazerLogin(event) {
        event.preventDefault();

        console.log("entrou no login");
        
        const requisicao = axios.post("http://localhost:5000/login", {
            email: email,
            senha: senha
        });
        requisicao.then(res => {
            console.log("Entrou!");
            console.log(res.data);
            props.setCodigo(res.data)
            navigate("/dashboard");
        }
        )
        requisicao.catch(err => {
            console.log("erro");
            alert("Erro ao fazer login! Consulte os logs.");
            console.error(err);
        });}

    return (
            <TelaDeLogin>
                <Logo>MyWallet</Logo>
                <Formulario onSubmit={fazerLogin}>
    
                    <input type="email" id="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                    <input type="password" id="senha" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required></input>    
                    <BotaoGrande type="submit">Entrar</BotaoGrande>
                </Formulario>
                <Link to="/cadastro"><p>Primeira vez? Cadastre-se!</p></Link>
            </TelaDeLogin>
    )

}
const TelaDeLogin = styled.div`
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