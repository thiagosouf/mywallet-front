import styled from "styled-components"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Link } from "react-router-dom";


console.log("Tela Dashboard");

export default function Dashboard(props) {
    const { codigo } = props;
    console.log("codigo:")
    console.log(codigo);
    const navigate = useNavigate();
    const [movimento, setMovimento] = useState([]);
    console.log(codigo);

    function renderizarExtrato(valores) {
        return valores.map(valor => {
            return (
                <Extrato key={valor.id}>
                    <p>{valor.data}</p>
                    <p>{valor.descricao}</p>
                    {valor.tipo === "entrada" ? (
                        <p style={{ color: "green" }}>{valor.valor}</p>
                    ) : (
                        <p style={{ color: "red" }}>{valor.valor}</p>
                    )}
                    {/* <p>{valor.valor}</p> */}
                </Extrato>
            );
        }
        );
    }

    function saldoTotal(valores) {
        let saldo = 0;
        valores.map(valor => {
            if (valor.tipo === "entrada") {
                saldo += parseFloat(valor.valor);
            } else {
                saldo -= parseFloat(valor.valor);
            }
        })
        return(<>{
            saldo > 0 ? (
                <p style={{ color: "green" }}>{saldo.toFixed(2)}</p>
            ):(
                <p style={{ color: "red" }}>{saldo.toFixed(2)}</p>
            )
        }</>);
        }
    
  
    useEffect(() => {
        const requisicao = axios.get("http://localhost:5000/painel")
        requisicao.then(res => {
            console.log("buscou o extrato");
            console.log(res.data);   
            setMovimento(res.data);
            renderizarExtrato(res.data);
        })
            requisicao.catch(err => {
                console.log("erro");
                alert("Erro ao buscar o extrato! Consulte os logs.");
                console.error(err);
            })
    }, []);


    return(
        <Dboard>
            <Topo>
                <Titulo>Olá, {codigo.name}</Titulo>
                <Link to="/"><p>Sair</p></Link>
            </Topo>
            <Conteudo>
                <ConteudoExtrato>
                    {renderizarExtrato(movimento)}
                </ConteudoExtrato>
                <Saldo>
                    <p>Saldo</p>
                    <p>{saldoTotal(movimento)}</p>
                </Saldo>
                
            </Conteudo>
            <Botoes>
                <BotaoEntrada onClick={() => navigate("/novaEntrada")}>
                    <h1>(+)</h1>
                    <p>Nova entrada</p>
                </BotaoEntrada>
                <BotaoSaida onClick={() => navigate("/novaSaida")}>
                    <h1>(-)</h1>
                    <p>Nova saída</p>
                </BotaoSaida>
            </Botoes>

        </Dboard>
    )
}

const Dboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8C11BE;
    height: 100vh;
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
const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 446px;
    width: 90%;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 13px;
    `
const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    
    `
const BotaoEntrada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 155px;
    height: 114px;
    background-color: #A328D6;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    p{
        color: #fff;
        font-size: 17px;
        width: 50%;
        font-weight: 700;
    }
    `
const BotaoSaida = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
width: 155px;
height: 114px;
background-color: #A328D6;
color: #fff;
border-radius: 5px;
padding: 10px;
p{
    color: #fff;
    font-size: 17px;
    width: 50%;
    font-weight: 700;
}
`
const Extrato = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    
    p{
        width: 145px;
        font-size: 16px;
        font-weight: 400;
        color: #000;
        
    }
    p:first-child{
        width: 48px;
        color: #c6c6c6;
        
        
    }
    p:last-child{
        width: 62px;
        color: green;
        text-align: end;
        
    }
`
const Saldo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 50px;
    p:first-child{
        font-size: 17px;
        font-weight: 700;
        color: black;
    }
    p:last-child{
        font-size: 17px;
        font-weight: 400;
    }
    `
const ConteudoExtrato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    height: 400px;
    border-radius: 5px;
    overflow-y: scroll;
    `