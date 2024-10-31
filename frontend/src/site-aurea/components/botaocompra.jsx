import React from 'react';

import './cabecario.scss';

export default function Botao() {
    const WhatsApp = () => {
        const phoneNumber = '5511972629229'; 
        const message = `Olá! Tudo bem? Gostaria de contratar o serviços da sua empresa!`;
    
       
        const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
return (
    <button onClick={WhatsApp} className="compre">COMPRE JA!</button>
);
}
