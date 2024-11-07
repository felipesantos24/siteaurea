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
                <img className='imagm'  src="images.png" alt="" />
                <br />
                Adicionar
                </Link>
           </div>
           <div><Link className='likm' to='/Compra4'>
                <img className='imagm'  src="remove.png" alt="" />
                <br />
                Remover
                </Link>
           </div>
           <div><Link className='likm' to='/Compra4'>
                <img className='imagm'  src="editar.png" alt="" />
                <br />
                Editar
                </Link>
           </div>
    </div>
    <div className='rodape'>
        <App />
    </div>
</div>
    );
}