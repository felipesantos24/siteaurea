import React from 'react';
import { Link } from 'react-router-dom';
import Cabecario from '../components/cabecario';
import Rodape from '../components/rodape';


import './anel.scss';

export default function Brincos() {

    return (
    <div className='todo'>
        <div className='cabecario'>
            <Cabecario />
        </div>
        <Link className='voltar' to='/'><h1>↩ Voltar</h1></Link>
        <div className='cardsgeral'>
            <div className='parte1'>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra7'>
                    <p className='texto22'>
                    <img className='imaggg' src="brinco1.jpg" alt="" /><br />
                    BRINCO ARGOLA LINE EM PRATA 925         <br /><br /><br /><br />
                         <br />
                    R$ 190,00        </p>
                    </Link>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra8'>
                    <p className='texto22'>
                    <img className='imaggg' src="brinco2.jpg" alt="" /><br />
                    BRINCO GLEE EM PRATA COM AMETISTA ROXA E TOPAZIOS INCOLORES         <br /><br />
                           <br />
                    R$ 330,00        </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra9'>
                    <p className='texto22'>
                    <img className='imaggg' src="brinco3.jpg" alt="" /><br />
                    BRINCO COLOR EM PRATA 925 COM TOPAZIO SWISS E TURMALINA VERDE         <br /><br />
                        <br />
                    R$ 390,00        </p>
                    </Link>
                </div>
            </div>
            </div>
            
            <div className='parte2'>
                <div className='cards2'>
                <div><Link className='likkm' to='/compra10'>
                    <p className='texto22'>
                    <img className='imaggg' src="brinco4.jpg" alt="" /><br />
                    BRINCO EM PRATA 925 COM PEROLA E TOPAZIOS INCOLORES        <br /><br /><br />
                   <br />
                    R$ 890,00        </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra11'>
                    <p className='texto22'>
                    <img className='imaggg' src="brinco5.jpg" alt="" /><br />
                    BRINCO DENGOSA EM OURO AMARELO 18K COM ESMERALDA E DIAMANTES        <br /><br />
              <br />
                    R$ 4,840,00        </p>
                    </Link>
                </div>
        </div>
        <div className='cards2'>
                <div><Link className='likkm' to='/compra12'>
                    <p className='texto22'>
                    <img className='imaggg' src="brinco6.jpg" alt="" /><br />
                    BRINCO CLASSICO EM OURO BRANCO 18K COM ESMERALDA E DIAMANTES     <br /><br />
       <br />
                    R$ 20,000,00        </p>
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