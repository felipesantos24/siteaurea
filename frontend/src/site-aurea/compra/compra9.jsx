import React from "react";
import { Link } from "react-router-dom";
import Cabecario from '../components/cabecario.jsx'
import Rodape from "../components/rodape.jsx";
import './compra.scss'

export default function Compra9() {
    return (
<div className="tudo">
    <div className="cabecario">
        <Cabecario />
    </div>
<div className="partedecima">
    <div className="direcao">
        <Link className="links" to='/'><h2>Home</h2></Link><h2>→</h2><Link className="links" to='/brincos'><h2>Brincos</h2></Link><h2>→</h2><h2>Brinco color</h2>
    </div>
</div>
    <div className="site">
        <img className="foto" src="brinco3.jpg" alt="" />
        <div className="txt">
        <Link className="colecao" to='/brinco'><h3 className="tits">Coleção brincos</h3></Link>
        <h1 className="tit">brinco color em prata 925 com topazio swiss<br />e turmalina verde </h1>
        <h2 className="disc">Fabricado pelos nossos melhores artesãos,<br />Feito com ouro amarelo e uma camada de ouro branco<br />por cimapara destacar sua beleza e a beleza do anel</h2>
        <h2 className="preco">R$ 5,690,00</h2>
        <h4 className="precodesc">10x Sem Juros de R$ 569,00</h4>
        </div>
    </div>
    <Link to='/produto'><p className="compre">Compre ja</p></Link>
    <div className="rodape">
        <Rodape />
    </div>
</div>
    );
}