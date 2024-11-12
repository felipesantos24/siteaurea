import React from 'react';
import { Link } from 'react-router-dom';
import Cabecario from '../components/cabecario';
import Rodape from '../components/rodape';

import './anel.scss';

export default function Colares() {

    return (
    <div className='todo'>
         <div className='cabecario'>
            <Cabecario />
        </div>
        <Link className='voltar' to='/'><h1>↩ Voltar</h1></Link>
        <div className='cardsgeral'>
            <div className='parte1'>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra13'><p className='texto22'>
                    <img className='imaggg' src="cor1.jpg" alt="" /><br />
                    COLAR ICONA EM OURO AMARELO 18K COM TURMALINA VERDE E DIAMANTES         <br /><br />
                <br />
                    R$ 9,450,00       </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra14'><p className='texto22'>
                    <img className='imaggg' src="cor2.jpg" alt="" /><br />
                    COLAR RELIGIOSO ESTRELA DE DAVI EM OURO AMARELO 18K COM TOPAZIOS         <br /><br />
                  <br />
                    R$ 4,950,00        </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra15'><p className='texto22'>
                    <img className='imaggg' src="cor6.jpg" alt="" /><br />
                    COLAR CHOKER EM OURO AMARELO 18K COM DIAMANTES         <br ></br><br /><br />
              <br />
                    R$ 39,350,00      </p>
                    </Link>
                </div>
            </div>
            </div>
            
            <div className='parte2'>
                <div className='cards2'>
                <div><Link className='likkm' to='/compra16'><p className='texto22'>
                    <img className='imaggg' src="cor3.jpg" alt="" /><br />
                    COLAR CHAINS EM PRATA 925 COM TOPAZIOS LONDON E SAFIRAS INCOLORES         <br /><br /><br />
                     <br />
                    R$ 4,750,00     </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra17'><p className='texto22'>
                    <img className='imaggg' src="cor4.jpg" alt="" /><br />
                    COLAR MELODIA EM PRATA 925 COM RUBIS E ESPINELIOS        <br /><br /><br /><br />
                      <br />
                    R$ 3,890,00      </p>
                    </Link>
                </div>
        </div>
        <div className='cards2'>
                <div><Link className='likkm' to='/compra18'><p className='texto22'>
                    <img className='imaggg' src="cor5.jpg" alt="" /><br />
                    COLAR REALI EM OURO BRANCO 18K COM TOPAZIOS SKY TANZANITA E DIAMANTES         <br /><br />
                  <br />
                    R$ 69,650,00        </p>
                    </Link>
                </div> 
        </div>
        </div>
        </div><br /> <br /> <br /> <br />
    <div className='rodape'>
        <Rodape />
    </div>
</div>
    );
}