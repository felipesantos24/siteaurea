import React from 'react';

import './rodape.scss';

export default function Rodape() {
return (
<div class="container">
  <div class="meios-contato"  className='cs'>
    <p className='sa'>MEIOS DE CONTATO :</p>
    <p className='sa'><img className='icone' src="instagramk.png" alt="" /> INSTAGRAM</p>
    <p className='sa'><img className='icone' src="telefone-1.png" alt="" /> (00)00000-0000</p>
    <p className='sa'><img className='icone' src="whatsapp.png" alt="" /> (00)00000-0000</p>
  </div>

  <div class="info" className='cs'>
    <p className='sa'>DUVIDAS</p>
    <br />
    <p className='sa'>Guia de Medidas</p>
    <br /> <br />
    <p className='sa'>2024 © Info Tech</p>
  </div>

  <div class="outros" className='cs'>
    <p className='sa'>Sobre</p> <br />
    <p className='sa'>Sobre a infotech</p> <br />
    <p className='sa'>Sobre a aurea joias</p>
  </div>
</div>
);
}
