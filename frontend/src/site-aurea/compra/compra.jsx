import React from "react";
import { Link } from "react-router-dom";
import Cabecario from '../components/cabecario.jsx'
import Rodape from "../components/rodape.jsx";

import './compra.scss'

export default function Compra() {
    return (
<div className="tudo">
    <div className="cabecario">
        <Cabecario />
    </div>
<div className="partedecima">
    <div className="direcao">
        <Link className="links" to='/'><h2>Home</h2></Link><h2>→</h2><Link className="links" to='/anel'><h2>Aneis</h2></Link><h2>→</h2><h2>Anel exemplo</h2>
    </div>
    <div className="disconto">
        <h2 className="discontoss">15% OFF!</h2>
    </div>
</div>
    <div className="site">
        <img className="foto" src="aneln1.jpg" alt="" />
        <div className="txt">
        <h1 className="tit">Anel de ouro misturado com prata</h1>
        <h2 className="disc">Fabricado pelos nossos melhores artesãos,<br />Feito com Ouro e uma camada de prata por cima<br />para destacar sua beleza e a beleza do anel</h2>
        </div>
    </div>
    <div className="rodape">
        <Rodape />
    </div>
</div>
    );
}