import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './components/carroseu';
import App from './components/rodape';
import Cabecario from './components/cabecario';

import './index.scss';

export default function Aureaadm() {

    return (
    <div className='sitetodo'>
        <div className='cabecariom'>
            <Cabecario />
        </div>

        <div className="carroselm">
            <Carousel />
        </div>
        <div className='maisvendidosm'>
            <h1 className='flm'>Mais Vendidos</h1>
            <img className='setabaixom' src="setabaixo.png" alt="" />
            <div className='cardschefem'>
            <div className='cardsm'>
                <div><Link className='likmm' to='/anel'>
                    <p className='textom'>
                <img className='imagm'  src="aneln4.jpg" alt="" />
                    Anel de Diamante
                    <br />
                    <br />
                    R$ 4,500,00
                    </p>
                    </Link>
                </div>
                <div><Link className='likmm' to='/colar'>
                    <p className='texto2m'>
                <img className='imagm'  src="cor3.jpg" alt="" />
                    Colar de Prata
                    <br />
                    <br />
                    R$ 4,200,00
                    </p>
                    </Link>
                </div>
                <div><Link className='likmm' to='/pulseira'>
                    <p className='texto3m'>
                <img className='imagm'  src="puls4.jpg" alt="" />
                    Pulseira de Prata
                    <br />
                    <br />
                    R$ 6,999,99
                    </p>
                    </Link>
                </div>

            </div>
            </div>
        </div>
        <img className='maos1m' src="venda-de-joias.png" alt="" />

        <h1 className='categoriah1m'>Categorias</h1>
        <h2 className='categoriah2m'>Encontre a sua favorita</h2>
        <div className='categoriam'>
        <div className='categoriasm'>
        <Link to="/anel" className='categoriaanelm'>
    <p className='textoanelm'>Aneis</p> <br />
    <img className='imagg2m' src="aneln4.jpg" alt="" />
        </Link>
        <Link to="/pulseira" className='categoriapulseiram'>
    <p className='textoanelm'>Pulseiras</p> <br />
    <img className='imagg2m' src="puls7.jpg" alt="" />
        </Link>
        <Link to="/brincos" className='categoriabrincosm'>
    <p className='textoanelm'>Brincos</p> <br />
    <img className='imagg3m' src="brinco7.jpg" alt="" />
        </Link>
        <Link to="/colar" className='categoriacolarm'>
    <p className='textoanelm'>Colares</p> <br />
    <img className='imagg4m' src="cor7.jpg" alt="" />
        </Link>
        </div>
        </div>
        <div className='fotocimasobrenosm'> <img className='realcem' src="as.png" alt="realce" /> </div>
        <div className='sobrenosm'>
            <div className='textosobrenosm'>
            <h1 className='categoriah1m'>SOBRE NOS :</h1> <br /> 
                <h2>Nossas joias são criadas com pedras preciosas e <br />metais nobres, refletindo um design sofisticado <br/> e um acabamento impecável. Cada peça é feita  <br /> para realçar sua beleza e transformar qualquer <br />  ocasião em um momento inesquecível.</h2>
            </div>
            <div className='imagemm'>
                <img className='maocaram' src="maocara.png" alt="" />
            </div>
        </div>
        <div className='comentariom'> 
            <h1 className='categoriah12m'>DEIXE SEU <br />
            COMENTARIO</h1>
            <br /><br /><br />
<div className='caixacomentm'>
    <div className='comentariossdm'>
        <input className='inputsssm' placeholder=' 🔎 Comente Aqui'></input>
        <button className='butttonm'>Enviar</button>
    </div>
    <div className='comentariosm'>
    <div className='comentario-exibidom'>
        <h2 className='brunom'>
            <br /> Bruno 
            <p className='elogiom'><br />Muito bom!!<br />Otimas qualidades <br /> Recomendo</p>
        </h2> 
    </div>
    <div className='comentario-exibidom'>
        <h2 className='brunom'>
            <br /> Robson 
            <p className='elogiom'><br />Joias de <br /> altissima qualidade <br /> super recomendo!</p>
        </h2> 
    </div>
    </div>
</div>
        </div>
    <div>
        <App />
    </div>
    </div>
    );
}