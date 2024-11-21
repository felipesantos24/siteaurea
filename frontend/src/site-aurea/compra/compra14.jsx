import React from "react";
import { Link } from "react-router-dom";
import Cabecario from '../components/cabecario.jsx'
import Rodape from "../components/rodape.jsx";
import './compra.scss'

export default function Compra14() {
    return (
<div className="tudo">
    <div className="cabecario">
        <Cabecario />
    </div>
<div className="partedecima">
    <div className="direcao">
        <Link className="links" to='/'><h2>Home</h2></Link><h2>→</h2><Link className="links" to='/colar'><h2>Colares</h2></Link><h2>→</h2><h2>Colar religioso</h2>
    </div>
</div>
    <div className="site">
        <img className="foto" src="cor2.jpg" alt="" />
        <div className="txt">
        <Link className="colecao" to='/colar'><h3 className="tits">Coleção Colares</h3></Link>
        <h1 className="tit">colar religioso estrela de davi em ouro amarelo <br /> com topazios incolores</h1>
        <h2 className="disc">Fabricado pelos nossos melhores artesãos,<br />Feito com ouro amarelo e uma camada de ouro branco<br />por cimapara destacar sua beleza e a beleza do anel</h2>
        <h2 className="preco">R$ 4.950,00</h2>
        <h4 className="precodesc">10x Sem Juros de R$ 495,00</h4>
        </div>
    </div>
    <Link to='/produto'><p className="compre">Compre ja</p></Link>
    <div className="rodape">
        <Rodape />
    </div>
</div>
    );
}