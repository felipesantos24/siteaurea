import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import Rodape from '../../components/rodape';
import Cabecario from '../../components/cabecario';



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

        const url = 'http://localhost:5010/Inserir';
        let resp = await axios.post(url, paramCorpo);

        alert('Pedido adicionada. Id: ' + resp.data.novoId);
    }


    return (
<div>
    <div className='cabecarios'>
        <Cabecario />
    </div>
        <div className='pagina-cadastrars'>
            <h1> PRODUTO </h1>


            <div className='forms'>
                <div className='kk'>
                <label>Produto:</label>
                <select value={nomeproduto} onChange={(e) => setNomeproduto(e.target.value)}>
                        <option>Anel mykonos </option>
                        <option>Anel essence </option>
                        <option>Anel mykonos </option>
                        <option>Aliança jazz </option>
                        <option>Anel Opera  </option>
                        <option>Anel lyra  </option>
                        <option>pulseira reali </option>
                        <option>pulseira arpege</option>
                        <option>pulseira mykonos</option>
                        <option>pulseira mykonos em ouro </option>
                        <option>pulseira corda</option>
                        <option>brinco argola line</option>
                        <option>brinco glee</option>
                        <option>brinco color</option>
                        <option>brinco com perola</option>
                        <option>brinco dengosa</option>
                        <option>brinco classico com esmeralda</option>
                        <option>colar icona</option>
                        <option>colar religioso estrela de davi </option>
                        <option>colar choker</option>
                        <option>colar chains</option>
                        <option>colar melodia</option>
                        <option>colar reali</option>
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
    <div className='rddape'>
        <Rodape />
    </div>
</div>
    )
}
