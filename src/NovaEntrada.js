import styled from "styled-components"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

console.log("Tela Cadastro Entrada");

export default function NovaEntrada(props) {
    const { codigo } = props;
    const [valor, setValor] = useState("");
    const [descricao, setDescricao] = useState("");
    const navigate = useNavigate();

    function salvarEntrada(event){
        event.preventDefault();

        console.log("entrou no salvarEntrada");

        const requisicao = axios.post("http://localhost:5000/painel", {
            name: codigo.name,
            valor: valor,
            descricao: descricao,
            tipo: "entrada"
        });
        requisicao.then(res => {
            console.log("funcionou");
            navigate("/dashboard", { nome: res.data.name });
        })
        requisicao.catch(err => {
            console.log("erro");
            alert("Erro ao realizar a Entrada! Consulte os logs.");
            console.error(err);
        });
    }
    


    
    return(
        <TelaDoBotao>
            <Topo>
                <Titulo>Nova Entrada</Titulo>
                <Link to="/dashboard"><p>Voltar</p></Link>
            </Topo>
            <Formulario onSubmit={salvarEntrada}>

                <input type="number" id="valor" placeholder="valor" value={valor} onChange={e => setValor(e.target.value)} required></input>
                <input type="text" id="descricao" placeholder="descricao" value={descricao} onChange={e => setDescricao(e.target.value)} required></input>    
                <BotaoGrande type="submit">Entrar</BotaoGrande>
            </Formulario>
        </TelaDoBotao>
)
}

const TelaDoBotao = styled.div`
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
const Topo = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 90%;
    p{
        color: #fff;
    }
    `
const Titulo = styled.h1`
font-size: 26px;
font-weight: 700;
color: #fff;
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