import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import Rodape from '../../components/rodape';
import Cabecario from '../../components/cabecario';



export default function Cadastrar() {
    const [nm_pessoa, setnm_pessoa] = useState('');
    const [nrm_telefone, setnrm_telefone] = useState('');
    const [email_pessoa, setemail_pessoa] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nm_produtos, setnm_produtos] = useState('');
    const [] = useState ('');


    async function salvar() {
        let paramCorpo = {
            "nm_pessoa": nm_pessoa,
            "nrm_telefone": nrm_telefone,
            "email_pessoa": email_pessoa,
            "endereco": endereco,
            "nm_produtos": nm_produtos
        }

        const url = 'http://localhost:5010/Inserir';
        let resp = await axios.post(url, paramCorpo);

        alert('Pedido adicionada. ');
    }


    return (
<div>
    <div className='cabecarios'>
        <Cabecario />
    </div>
        <div className='pagina-cadastrars'>
            <h1> PRODUTO </h1>


            <div className='forms'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={nm_pessoa} onChange={e => setnm_pessoa(e.target.value)}/>
                </div>
                <div>
                    <label>Telefone:</label>
                    <input type='text' checked={nrm_telefone} onChange={e => setnrm_telefone(e.target.checked)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' value={email_pessoa} onChange={e => setemail_pessoa(e.target.value)} />
                </div>
                <div>
                    <label>Endereço:</label>
                    <input type='text' value={endereco} onChange={e => setEndereco(e.target.value)} />
                </div>
                <div>
                <label>Produto:</label>
                <select value={nm_produtos} onChange={(e) => setnm_produtos(e.target.value)}>
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
            </div>
            <button onClick={salvar}> SALVAR </button>

        </div>
    <div className='rddape'>
        <Rodape />
    </div>
</div>
    )
}
