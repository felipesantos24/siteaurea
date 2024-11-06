import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './components/carroseu';
import App from './components/rodape';
import Cabecario from './components/cabecario';

import './index.scss';

export default function Aurea() {

    return (
    <div className='sitetodo'>
        <div className='cabecario'>
            <Cabecario />
        </div>

        <div className="carrosel">
            <Carousel />
        </div>
        <div className='maisvendidos'>
            <h1 className='fl'>Mais Vendidos</h1>
            <img className='setabaixo' src="setabaixo.png" alt="" />
            <div className='cards'>
                <div><Link className='likm' to='/login'>
                    <p className='texto'>
                <img className='imag'  src="aneln2.jpg" alt="" />
                meia aliança jazz
                    <br />
                    <br />
                    R$ 9,850,00  
                    </p>
                    </Link>
                </div>
                <div><Link className='likm' to='/compra16'>
                    <p className='texto2'>
                <img className='imag'  src="cor3.jpg" alt="" />
                    Colar de Prata
                    <br />
                    <br />
                    R$ 4,200,00
                    </p>
                    </Link>
                </div>
                <div><Link className='likm' to='/compra22'>
                    <p className='texto3'>
                <img className='imag'  src="puls4.jpg" alt="" />
                    Pulseira de Prata
                    <br />
                    <br />
                    R$ 6,999,99
                    </p>
                    </Link>
                </div>

            </div>
            
        </div>

        <img className='maos1' src="venda-de-joias.png" alt="" />
        <div className='grid'>
        <h1 className='categoriah1'>Categorias</h1>
        <h2 className='categoriah2'>Encontre a sua favorita</h2>
        <div className='categoria'>
        <div className='categorias'>
        <Link to="/anel" className='categoriaanel'>
    <p className='textoanel'>Aneis</p> <br />
    <img className='imagg2' src="aneln4.jpg" alt="" />
        </Link>
        <Link to="/pulseira" className='categoriapulseira'>
    <p className='textoanel'>Pulseiras</p> <br />
    <img className='imagg2' src="puls7.jpg" alt="" />
        </Link>
        <Link to="/brincos" className='categoriabrincos'>
    <p className='textoanel'>Brincos</p> <br />
    <img className='imagg3' src="brinco7.jpg" alt="" />
        </Link>
        <Link to="/colar" className='categoriacolar'>
    <p className='textoanel'>Colares</p> <br />
    <img className='imagg4' src="cor7.jpg" alt="" />
        </Link>
        </div>
        </div>
        </div>
        <div className='fotocimasobrenos'> <img className='realce' src="as.png" alt="realce" /> </div>
        <div className='sobrenos'>
            <div className='textosobrenos'>
            <h1 className='categoriah1'>SOBRE NOS :</h1> <br /> 
                <h2>Nossas joias são criadas com pedras preciosas e <br />metais nobres, refletindo um design sofisticado <br/> e um acabamento impecável. Cada peça é feita  <br /> para realçar sua beleza e transformar qualquer <br />  ocasião em um momento inesquecível.</h2>
            </div>
            <div className='imagem'>
                <img className='maocara' src="maocara.png" alt="" />
            </div>
        </div>
        <div className='comentario'> 
            <h1 className='categoriah12'>DEIXE SEU <br />
            COMENTARIO</h1>
            <br /><br /><br />
<div className='caixacoment'>
    <div className='comentariossd'>
        <input className='inputsss' placeholder=' 🔎 Comente Aqui'></input>
        <button className='buttton'>Enviar</button>
    </div>
    <div className='comentarios'>
    <div className='comentario-exibido'>
        <h2 className='bruno'>
            <br /> Bruno 
            <p className='elogio'><br />Muito bom!!<br />Otimas qualidades <br /> Recomendo</p>
        </h2> 
    </div>
    <div className='comentario-exibido'>
        <h2 className='bruno'>
            <br /> Robson 
            <p className='elogio'><br />Joias de <br /> altissima qualidade <br /> super recomendo!</p>
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