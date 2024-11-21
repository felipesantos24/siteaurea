import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import Cabecarioadm from '../../components/cabecarioadm';
import Rodape from '../../components/rodape'



export default function Personalizado() {
    const [nome, setNome] = useState('');
    const [nomeproduto, setNomeproduto] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');


    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "email": email,
            "telefone": telefone,
            "nomeproduto": nomeproduto
        }

        const url = 'http://localhost:5010/listaNegra';
        let resp = await axios.post(url, paramCorpo);

        alert('Pedido adicionada. Id: ' + resp.data.novoId);
    }


    return (
<div>
    <div className='cabecario'>
            <Cabecarioadm />
    </div>
        <div className='pagina-cadastrar'>
            <h1> PRODUTO PERSONALIZADO </h1>


            <div className='form'>
                <div>
                <label>Produto:</label>
                    <select value={nomeproduto} onChange={(e) => setNomeproduto(e.target.value)}>
                        <option>Anel</option>
                        <option>Brinco</option>
                        <option>Pulseira</option>
                        <option>Colar</option>
                    </select>
                </div>
                <div>
                    <label>Descrição:</label>
                    <input placeholder='exemplo:prata com azul escuro' type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div>
                    <label>Seu Nome:</label>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type='text' checked={telefone} onChange={e => setTelefone(e.target.checked)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    <div className='rsdape'>
    <Rodape  />
    </div>
</div>
    )
}
