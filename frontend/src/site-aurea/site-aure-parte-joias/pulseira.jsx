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
        <div className='cardsgeral'>
            <div className='parte1'>
            <div className='cards2'>
                <div><p className='texto22'>
                    <img className='imaggg' src="puls1.jpg" alt="" /><br />
                    PULSEIRA   RETANGULAR CRAVEJADA FOLEADA A OURO 18K         <br /><br />
                    R$  ̶ ̶4̶0̶0̶,̶0̶0̶        <br />
                    R$ 340,00        </p>
                </div>
            </div>
            <div className='cards2'>
                <div><p className='texto22'>
                    <img className='imaggg' src="puls2.jpg" alt="" /><br />
                    PULSEIRA   RETANGULAR CRAVEJADA FOLEADA A OURO 18K         <br /><br />
                    R$  ̶ ̶4̶0̶0̶,̶0̶0̶        <br />
                    R$ 340,00        </p>
                </div>
            </div>
            <div className='cards2'>
                <div><p className='texto22'>
                    <img className='imaggg' src="puls3.jpg" alt="" /><br />
                    PULSEIRA   RETANGULAR CRAVEJADA FOLEADA A OURO 18K         <br /><br />
                    R$  ̶ ̶4̶0̶0̶,̶0̶0̶        <br />
                    R$ 340,00        </p>
                </div>
            </div>
            </div>
            
            <div className='parte2'>
                <div className='cards2'>
                <div><p className='texto22'>
                    <img className='imaggg' src="puls4.jpg" alt="" /><br />
                    PULSEIRA   RETANGULAR CRAVEJADA FOLEADA A OURO 18K         <br /><br />
                    R$  ̶ ̶4̶0̶0̶,̶0̶0̶        <br />
                    R$ 340,00        </p>
                </div>
            </div>
            <div className='cards2'>
                <div><p className='texto22'>
                    <img className='imaggg' src="puls5.jpg" alt="" /><br />
                    PULSEIRA   RETANGULAR CRAVEJADA FOLEADA A OURO 18K         <br /><br />
                    R$  ̶ ̶4̶0̶0̶,̶0̶0̶        <br />
                    R$ 340,00        </p>
                </div>
        </div>
        <div className='cards2'>
                <div><p className='texto22'>
                    <img className='imaggg' src="puls6.jpg" alt="" /><br />
                    PULSEIRA   RETANGULAR CRAVEJADA FOLEADA A OURO 18K         <br /><br />
                    R$  ̶ ̶4̶0̶0̶,̶0̶0̶        <br />
                    R$ 340,00        </p>
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