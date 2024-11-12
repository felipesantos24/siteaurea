    import React from 'react';
import { Link } from 'react-router-dom';
import Cabecario from '../components/cabecario';
import Rodape from '../components/rodape';

import './anel.scss';

export default function Pulseiras() {

    return (
    <div className='todo'>
         <div className='cabecario'>
            <Cabecario />
        </div>
        <Link className='voltar' to='/'><h1>↩ Voltar</h1></Link>
        <div className='cardsgeral'>
            <div className='parte1'>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra19'><p className='texto22'>
                    <img className='imaggg' src="puls1.jpg" alt="" /><br />
                    PULSEIRA REALI EM OURO BRANCO 18K COM TOPAZIO SKY E DIAMANTES        
                   <br /><br />
        <br />
                    R$ 26,250,00        </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra20'><p className='texto22'>
                    <img className='imaggg' src="puls2.jpg" alt="" /><br />
                    PULSEIRA RIVEIRA EM OURO BRANCO 18K COM DIAMANTES       <br /><br /><br />
         <br />
                    R$ 30,750,00        </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra21'><p className='texto22'>
                    <img className='imaggg' src="puls3.jpg" alt="" /><br />
                    PULSEIRA ARPEGE EM OURO BRANCO 18K COM DIAMANTES           <br /><br /><br />
              <br />
                    R$ 44,500,00     </p>
                    </Link>
                </div>
            </div>
            </div>
            
            <div className='parte2'>
                <div className='cards2'>
                <div><Link className='likkm' to='/compra22'><p className='texto22'>
                    <img className='imaggg' src="puls4.jpg" alt="" /><br />
                    PULSEIRA MYKONOS EM PRATA 925 COM OURO AMARELO 18K E DIAMANTES         <br /><br />
                      <br />
                    R$ 6,350,00      </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra23'><p className='texto22'>
                    <img className='imaggg' src="puls5.jpg" alt="" /><br />
                    PULSEIRA MYKONOS EM PRATA 925 COM OURO AMARELO 18K      <br /> <br /><br />
                     <br />
                    R$ 3,000,00        </p>
                    </Link>
                </div>
        </div>
        <div className='cards2'>
                <div><Link className='likkm' to='/compra24'><p className='texto22'>
                    <img className='imaggg' src="puls6.jpg" alt="" /><br />
                    PULSEIRA CORDA EM OURO AMARELO 18K        <br /><br /><br />
                          <br />

                    R$ 3,200,00 
                    <br /> 
                    <br />        </p>
                    </Link>
                    <br /> 
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