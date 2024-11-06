import React from 'react';
import { Link } from 'react-router-dom';

import './cabecario.scss';

export default function Cabecario() {
return (
<div className='todo'>
    <div className='cabecario'>
        <img className='auria' src="auria.png" alt="" />
        <Link className='adm' to ='/login'>ADMIN</Link>
    </div>
</div>
);
}
