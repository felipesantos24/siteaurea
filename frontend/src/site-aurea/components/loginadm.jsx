import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './loginadm.scss';
import Cabecarioadm from './cabecarioadm';
import Rodape from './rodape';

const Login = () => {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function entrar(e) {
        e.preventDefault();

        const usuario = {
            "nome": nome,
            "senha": senha
        };

        const url = 'http://localhost:5020/entrar/';
        let resp = await axios.post(url, usuario);
        
            if (resp.data.erro) {
                alert(resp.data.erro);
            } else {
                localStorage.setItem('USUARIO', resp.data.token);
                navigate('/admin');
            }
    }

    return (
        <div className='sitetodoss'>
            <div className='cabecario'>
                <Cabecarioadm />
            </div>
        <div className='sitesssss'>
            <form onSubmit={entrar}>
                <div>
                    <label >Login:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                    />
                </div>
                <div>
                    <label >Senha:</label>
                    <input 
                        type="password" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
            <div className='rodapens'>
                <Rodape />
            </div>
        </div>
    );
};

export default Login;
