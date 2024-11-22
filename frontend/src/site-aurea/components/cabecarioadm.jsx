import React from 'react';
import { Link } from 'react-router-dom';

import './cabecario.scss';

export default function Cabecarioadm() {
return (
<div className='todo'>

    <div className='cabecario'>
<Link to="/"><p className='voltaradm'>voltar</p></Link>
        <img className='auria' src="auria.png" alt="" />
    </div>
</div>
);
}
