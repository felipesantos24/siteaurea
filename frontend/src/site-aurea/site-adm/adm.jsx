import { useState } from 'react'
import './adm.scss'

import axios from 'axios'
import { Link } from 'react-router-dom';



export default function Aureaadm() {
    const [listaNegra, setListaNegra] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5010/Consultar/';
        let resp = await axios.get(url);
        setListaNegra(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                    </tr>
                </thead>

                <tbody>
                    {listaNegra.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.produtos}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>{item.endereco}</td>
                            <td>{item.telefone}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}
