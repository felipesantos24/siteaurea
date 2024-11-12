import React from 'react';
import { Link } from 'react-router-dom';
import Cabecario from '../components/cabecario';
import Rodape from '../components/rodape';

import './anel.scss';

export default function Anel() {

    return (
<div className='todo'>
        <div className='cabecario'>
            <Cabecario />
        </div>
        <Link className='voltar' to='/'>Voltar aos conteudos</Link>
        <div className='cardsgeral'>
            <div className='parte1'>
            <div className='cards2'>
                <div className='nada'><Link className='likkm' to='/compra'>
                    <p className='texto22'>
                    <img className='imaggg' src="aneln1.jpg" alt="" /><br />
                    ANEL ESSENCE OURO AMERELO OURO BRANCO<br /><br /><br />
                    R$ 5,690,00        </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra2'>
                    <p className='texto22'>
                    <img className='imaggg' src="aneln6.jpg" alt="" /><br />
                    ANEL MYKONOS EM PRATA 925 COM OURO AMARELO 18K<br /><br /><br />
                    R$ 4,190,00        </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra3'>
                    <p className='texto22'>
                    <img className='imaggg' src="aneln7.jpg" alt="" /><br />
                    ANEL MYKONOS EM PRATA 925 COM OURO AMARELO 18K E DIAMANTE<br />      <br />
                    R$ 3,650,00        </p>
                    </Link>
                </div>
            </div>
            </div>
            
            <div className='parte2'>
                <div className='cards2'>
                <div><Link className='likkm' to='/compra4'>
                    <p className='texto22'>
                    <img className='imaggg' src="aneln2.jpg" alt="" /><br />
                    MEIA ALIANÇA JAZZ EM OURO BRANCO 18K COM DIAMANTES<br /> <br /><br />
                    R$ 9,850,00        </p>
                    </Link>
                </div>
            </div>
            <div className='cards2'>
                <div><Link className='likkm' to='/compra5'>
                    <p className='texto22'>
                    <img className='imaggg' src="aneln3.jpg" alt="" /><br />
                    ANEL KYRA EM OURO BRANCO 18K COM DIAMANTES<br /><br /><br />
                    R$ 11,390,00        </p>
                    </Link>
                </div>
        </div>
        <div className='cards2'>
                <div><Link className='likkm' to='/compra6'>
                    <p className='texto22'>
                    <img className='imaggg' src="aneln5.jpg" alt="" /><br />
                    ANEL KYRA COM OURO BRANCO 18K CRAVEJADO COM DIAMANTES<br />      <br />
                    R$ 13,900,00        </p>
                    </Link>
                </div> 
        </div>
    </div>
    </div> <br /> <br /> <br /> <br />
    <div className='rodape'>
        <Rodape />
    </div>
</div>
    );
}