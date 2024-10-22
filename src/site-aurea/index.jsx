import React from 'react';

import './index.scss';

export default function Aurea() {

    return (
    <div className='site todo'>
        <header>
            <div className='cabecario'>
                <img className='auria' src="auria.png" alt="" />
            </div>
        </header>

        <div className='carroceu'>
            <img className='braço' src="braco.png" alt="" />
        </div>
        <div className='maisvendidos'>
            <h1 className='fl'>Mais Vendidos</h1>
            <img className='setabaixo' src="setabaixo.png" alt="" />
            <div className='cards'>
                <div><p className='texto'>
                <img className='imag'  src="anel1.png" alt="" />
                    Anel Aço Preto
                    <br />
                    ̶R̶$̶ ̶4̶1̶5̶,̶0̶0̶
                    <br />
                    R$ 352,75
                    </p>
                </div>
                <div><p className='texto2'>
                <img className='imag'  src="colar.png" alt="" />
                    Pulseiradeprata
                    <br />
                    R̶$ ̶ ̶̶̶7̶̶5̶̶̶0̶̶̶,̶̶̶0̶̶̶0̶̶̶
                    <br />
                    R$637,50
                    </p>
                </div>
                <div><p className='texto3'>
                <img className='imag'  src="pulseira.png" alt="" />
                    Colar de aço
                    <br />
                    ̶R̶$ ̶ ̶̶̶̶̶1̶3̶1̶̶̶5̶̶̶,̶̶̶0̶̶̶0̶̶̶
                    <br />
                    R$ 1117,75
                    </p>
                </div>

            </div>
        </div>
        <img className='maos1' src="maos1.png" alt="" />

        <h1 className='categoriah1'>Categoria</h1>
        <h2 className='categoriah2'>encontre a sua favorita</h2>
        <div className='categoria'>
        <div className='categorias'>
        <button className='categoriaanel'><img className='imagg' src="anel.jpg" alt="" />
        <p>aneis</p>
        </button>
        <button className='categoriapulseira'><img className='imagg' src="pulseira.jpg" alt="" />
        <p>pulseiras</p>
        </button>
        <button className='categoriabrincos'><img className='imagg' src="brincos.jpg" alt="" />
        <p>broncos</p>
        </button>
        <button className='categoriacolar'><img className='imagg' src="colar.jpg" alt="" />
        <p>colares</p>
        </button>
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
        </div>
        <div className='caixacoment'>
            <input className='inputsss' placeholder='🔎 Comente Aqui'></input>
            <button>Enviar</button>
        </div>
    </div>
    );
}