import { useState } from 'react'
import './index.scss'
import axios from 'axios'
import Rodape from '../../components/rodape';
import Cabecario from '../../components/cabecario';
import {Link} from 'react-router-dom';



export default function Cadastrar() {
    const [nm_pessoa, setnm_pessoa] = useState('');
    const [email_pessoa, setemail_pessoa] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nm_produtos, setnm_produtos] = useState('');


    async function salvar() {
        let paramCorpo = {
            "nm_pessoa": nm_pessoa,
            "email_pessoa": email_pessoa,
            "endereco": endereco,
            "nm_produtos": nm_produtos
        }
    
        const url = 'http://4.172.207.208:3039/Inserir';
        let resp = await axios.post(url, paramCorpo);
    
        alert('Pedido adicionada. ');
    }


    return (
<div>
    <div className='cabecarios'>
        <Cabecario />
    </div>
        <div className='pagina-cadastrars'>
        <Link to="/"><p className='voltarproduto'>voltar</p></Link>
            <h1> PRODUTO </h1>


            <div className='forms'>
                <div>
                    <label>Nome:</label>
                    <input type='text' value={nm_pessoa} onChange={e => setnm_pessoa(e.target.value)}/>
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
                    <option value="Anel mykonos">Anel mykonos</option>
                    <option value="Anel essence">Anel essence</option>
                    <option value="Anel mykonos detalhes em prata">Anel mykonos detalhes em prata</option>
                    <option value="Aliança jazz">Aliança jazz</option>
                    <option value="Anel Opera">Anel Opera</option>
                    <option value="Anel lyra">Anel lyra</option>
                    <option value="pulseira reali">pulseira reali</option>
                    <option value="pulseira arpege">pulseira arpege</option>
                    <option value="pulseira mykonos">pulseira mykonos</option>
                    <option value="pulseira mykonos em ouro">pulseira mykonos em ouro</option>
                    <option value="pulseira corda">pulseira corda</option>
                    <option value="brinco argola line">brinco argola line</option>
                    <option value="brinco glee">brinco glee</option>
                    <option value="brinco color">brinco color</option>
                    <option value="brinco com perola">brinco com perola</option>
                    <option value="brinco dengosa">brinco dengosa</option>
                    <option value="brinco classico com esmeralda">brinco classico com esmeralda</option>
                    <option value="colar icona">colar icona</option>
                    <option value="colar religioso estrela de davi">colar religioso estrela de davi</option>
                    <option value="colar choker">colar choker</option>
                    <option value="colar chains">colar chains</option>
                    <option value="colar melodia">colar melodia</option>
                    <option value="colar reali">colar reali</option>
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
