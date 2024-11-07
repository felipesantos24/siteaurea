import React from 'react';
import { Link } from 'react-router-dom';
import App from './components/rodape';
import Cabecarioadm from './components/cabecarioadm';

import './adm.scss';

export default function Aureaadm() {

    return (
<div className='sitetodo'>
    <div className='cabecario'>
        <Cabecarioadm />
    </div>
    <div className='cardsm'>
           <div><Link className='likm' to='/Compra4'>
                <p className='textom'>
                <img className='imagm'  src="images.png" alt="" />
                <br />
                Adicionar
                </p>
                </Link>
           </div>
           <div><Link className='likm' to='/Compra4'>
                <p className='textom'>
                <img className='imagm'  src="remove.png" alt="" />
                <br />
                Adicionar
                </p>
                </Link>
           </div>
           <div><Link className='likm' to='/Compra4'>
                <p className='textom'>
                <img className='imagm'  src="images.png" alt="" />
                <br />
                Adicionar
                </p>
                </Link>
           </div>
    </div>
    <div className='rodape'>
        <App />
    </div>
</div>
    );
}