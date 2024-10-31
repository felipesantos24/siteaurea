import React from "react";
import { Link } from "react-router-dom";
import Cabecario from '../components/cabecario.jsx'
import Rodape from "../components/rodape.jsx";
import Botao from "../components/botaocompra.jsx";

import './compra.scss'

export default function Compra2() {
    return (
<div className="tudo">
    <div className="cabecario">
        <Cabecario />
    </div>
<div className="partedecima">
    <div className="direcao">
        <Link className="links" to='/'><h2>Home</h2></Link><h2>→</h2><Link className="links" to='/anel'><h2>Aneis</h2></Link><h2>→</h2><h2>Anel mykonos</h2>
    </div>
</div>
    <div className="site">
        <img className="foto" src="aneln6.jpg" alt="" />
        <div className="txt">
        <Link className="colecao" to='/anel'><h3 className="tits">Coleção aneis</h3></Link>
        <h1 className="tit">anel mykonos em prata com ouro amarelo</h1>
        <h2 className="disc">Cód : AN00053511 <br />
Coleção : Mykonos <br />
Largura aprox. : 14 mm <br />
Material : Prata com Ouro <br /></h2>
        <h2 className="preco">R$ 5,690,00</h2>
        <h4 className="precodesc">10x Sem Juros de R$ 569,00</h4>
        </div>
    </div>
    <div className="botao">
        <Botao />
    </div>
    <div className="rodape">
        <Rodape />
    </div>
</div>
    );
}