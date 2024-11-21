import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import Rodape from '../../components/rodape';
import Cabecarioadm from '../../components/cabecarioadm';



export default function Cadastrar() {
    const [nome, setNome] = useState('');
    const [nomeproduto, setNomeproduto] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');


    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "email": email,
            "telefone": telefone,
            "endereco": endereco,
            "nomeproduto": nomeproduto
        }

        const url = 'http://localhost:5010/listaNegra';
        let resp = await axios.post(url, paramCorpo);

        alert('Pedido adicionada. Id: ' + resp.data.novoId);
    }


    return (
<div>
    <div className='cabecarios'>
        <Cabecarioadm />
    </div>
        <div className='pagina-cadastrars'>
            <h1> PRODUTO </h1>


            <div className='forms'>
                <div className='kk'>
                <label>Produto:</label>
                    <select value={nomeproduto} onChange={(e) => setNomeproduto(e.target.value)}>
                        <option>Anel mykonos em prata com ouro e diamantes</option>
                        <option>Anel essence em ouro amarelo e ouro branco</option>
                        <option>Anel mykonos em prata com ouro</option>
                        <option>Aliança jazz em ouro branco</option>
                        <option>Anel Opera em ouro branco e ouro amarelo</option>
                        <option>Anel lyra em ouro branco com diamantes</option>
                        <option>g</option>
                        <option>h</option>
                        <option>i</option>
                    </select>
                </div>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input type='text' value={endereco} onChange={e => setEndereco(e.target.value)} />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type='text' checked={telefone} onChange={e => setTelefone(e.target.checked)} />
                </div>
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    <div className='rodape'>
        <Rodape />
    </div>
</div>
    )
}
