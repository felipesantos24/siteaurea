import { useState } from 'react'
import './adm.scss'
import axios from 'axios'
import Cabecarioadm from '../components/cabecarioadm';
import Rodape from '../components/rodape';



export default function Aureaadm() {
    const [listaNegra, setListaNegra] = useState([]);

    async function buscar() {
        const url = 'http://localhost:5020/Consultar/';
        let resp = await axios.get(url);
        setListaNegra(resp.data);
    }


    return (
<div className='tudsssss'>
            <div className='cabecario'>
                <Cabecarioadm    />
            </div>
        <div className='pagina-consultar'>
            <h1> CONSULTAR PEDIDOS </h1>

            <button onClick={buscar}>Buscar</button>


            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>Produto</th>
                    </tr>   
                </thead>
                <tbody>
                    {listaNegra.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.endereco}</td>
                            <td>{item.produtos}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            
        </div>
        <div className='rodanomeupe'>
            <Rodape />
        </div>
        </div>
    )
}
