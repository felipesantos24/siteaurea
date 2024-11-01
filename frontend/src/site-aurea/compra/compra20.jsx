import React from "react";
import { Link } from "react-router-dom";
import Cabecario from '../components/cabecario.jsx'
import Rodape from "../components/rodape.jsx";
import Botao from "../components/botaocompra.jsx";
import './compra.scss'

export default function Compra20() {
    return (
<div className="tudo">
    <div className="cabecario">
        <Cabecario />
    </div>
<div className="partedecima">
    <div className="direcao">
        <Link className="links" to='/'><h2>Home</h2></Link><h2>→</h2><Link className="links" to='/pulseira'><h2>Pulseiras</h2></Link><h2>→</h2><h2>Pulseira riveira</h2>
    </div>
</div>
    <div className="site">
        <img className="foto" src="puls2.jpg" alt="" />
        <div className="txt">
        <Link className="colecao" to='/pulseira'><h3 className="tits">Coleção Pulseiras</h3></Link>
        <h1 className="tit">pulseira riveira em ouro branco <br />com diamantes </h1>
        <h2 className="disc">Fabricado pelos nossos melhores artesãos,<br />Feito com ouro amarelo e uma camada de ouro branco<br />por cimapara destacar sua beleza e a beleza do anel</h2>
        <h2 className="preco">R$ 5,690,00</h2>
        <h4 className="precodesc">10x Sem Juros de R$ 569,00</h4>
        </div>
    </div>
    <div className="botao">
        <Botao />
    </div>    <div className="rodape">
        <Rodape />
    </div>
</div>
    );
}